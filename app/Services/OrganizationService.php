<?php

namespace App\Services;

use App\Models\Organization;
use App\Models\OrganizationInvitation;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OrganizationService
{
    public function __construct(
        private readonly AuditLogService $auditService,
        private readonly SeatBillingService $seatBillingService
    ) {}

    /**
     * Create a new organization.
     */
    public function create(array $data, User $owner): Organization
    {
        return DB::transaction(function () use ($data, $owner) {
            $organization = Organization::create([
                'name' => $data['name'],
                'slug' => $data['slug'] ?? Str::slug($data['name']) . '-' . Str::random(6),
                'description' => $data['description'] ?? null,
                'type' => $data['type'] ?? 'team',
                'settings' => $data['settings'] ?? [],
            ]);

            // Add owner as member with 'owner' role
            $organization->users()->attach($owner->id, [
                'role' => 'owner',
                'joined_at' => now(),
            ]);

            // Set as user's current organization if they don't have one
            if (!$owner->current_organization_id) {
                $owner->update(['current_organization_id' => $organization->id]);
            }

            $this->auditService->log('organization.created', [
                'organization_id' => $organization->id,
                'organization_name' => $organization->name,
                'owner_id' => $owner->id,
            ], ['actor_id' => $owner->id]);

            return $organization;
        });
    }

    /**
     * Create a personal organization for a user (called on registration).
     */
    public function createPersonalOrganization(User $user): Organization
    {
        return $this->create([
            'name' => "{$user->name}'s Workspace",
            'type' => 'personal',
        ], $user);
    }

    /**
     * Update organization details.
     */
    public function update(Organization $organization, array $data): Organization
    {
        $organization->update([
            'name' => $data['name'] ?? $organization->name,
            'description' => $data['description'] ?? $organization->description,
            'settings' => array_merge($organization->settings ?? [], $data['settings'] ?? []),
        ]);

        $this->auditService->log('organization.updated', [
            'organization_id' => $organization->id,
            'changes' => $data,
        ]);

        return $organization->fresh();
    }

    /**
     * Invite a user to an organization by email.
     */
    public function invite(Organization $organization, string $email, string $role, User $invitedBy): OrganizationInvitation
    {
        // Check if user is already a member
        $existingUser = User::where('email', strtolower($email))->first();
        if ($existingUser && $organization->hasMember($existingUser)) {
            throw new \InvalidArgumentException('User is already a member of this organization.');
        }

        // Check for existing pending invitation
        $existingInvite = $organization->invitations()
            ->forEmail($email)
            ->valid()
            ->first();

        if ($existingInvite) {
            throw new \InvalidArgumentException('An invitation has already been sent to this email.');
        }

        $invitation = $organization->invitations()->create([
            'email' => strtolower($email),
            'role' => $role,
            'invited_by' => $invitedBy->id,
            'expires_at' => now()->addDays(7),
        ]);

        $this->auditService->log('organization.invitation_sent', [
            'organization_id' => $organization->id,
            'invitation_id' => $invitation->id,
            'email' => $email,
            'role' => $role,
        ], ['actor_id' => $invitedBy->id]);

        // TODO: Send invitation email

        return $invitation;
    }

    /**
     * Accept an invitation and add user to organization.
     */
    public function acceptInvitation(OrganizationInvitation $invitation, User $user): void
    {
        if (!$invitation->isValid()) {
            throw new \InvalidArgumentException('This invitation is no longer valid.');
        }

        if (strtolower($user->email) !== strtolower($invitation->email)) {
            throw new \InvalidArgumentException('This invitation was sent to a different email address.');
        }

        DB::transaction(function () use ($invitation, $user) {
            // Add user to organization
            $invitation->organization->users()->attach($user->id, [
                'role' => $invitation->role,
                'joined_at' => now(),
            ]);

            // Mark invitation as accepted
            $invitation->markAccepted();

            // Switch user to this organization if they don't have a current one
            if (!$user->current_organization_id) {
                $user->update(['current_organization_id' => $invitation->organization_id]);
            }

            // Update seat billing for the new member
            $this->seatBillingService->addSeat($invitation->organization);

            $this->auditService->log('organization.member_joined', [
                'organization_id' => $invitation->organization_id,
                'user_id' => $user->id,
                'role' => $invitation->role,
                'invitation_id' => $invitation->id,
            ], ['actor_id' => $user->id]);
        });
    }

    /**
     * Cancel/revoke an invitation.
     */
    public function cancelInvitation(OrganizationInvitation $invitation, User $cancelledBy): void
    {
        $organizationId = $invitation->organization_id;
        $email = $invitation->email;
        
        $invitation->delete();

        $this->auditService->log('organization.invitation_cancelled', [
            'organization_id' => $organizationId,
            'email' => $email,
        ], ['actor_id' => $cancelledBy->id]);
    }

    /**
     * Add a user to an organization (direct add, not via invite).
     */
    public function addMember(Organization $organization, User $user, string $role = 'member'): void
    {
        if ($organization->hasMember($user)) {
            throw new \InvalidArgumentException('User is already a member of this organization.');
        }

        $organization->users()->attach($user->id, [
            'role' => $role,
            'joined_at' => now(),
        ]);

        // Update seat billing for the new member
        $this->seatBillingService->addSeat($organization);

        $this->auditService->log('organization.member_added', [
            'organization_id' => $organization->id,
            'user_id' => $user->id,
            'role' => $role,
        ]);
    }

    /**
     * Remove a user from an organization.
     */
    public function removeMember(Organization $organization, User $user, User $removedBy): void
    {
        if (!$organization->hasMember($user)) {
            throw new \InvalidArgumentException('User is not a member of this organization.');
        }

        // Can't remove the last owner
        if ($organization->userHasRole($user, 'owner')) {
            $ownerCount = $organization->owners()->count();
            if ($ownerCount <= 1) {
                throw new \InvalidArgumentException('Cannot remove the last owner. Transfer ownership first.');
            }
        }

        $organization->users()->detach($user->id);

        // If this was their current organization, clear it
        if ($user->current_organization_id === $organization->id) {
            $newOrg = $user->organizations()->first();
            $user->update(['current_organization_id' => $newOrg?->id]);
        }

        // Update seat billing (reduce seats)
        $this->seatBillingService->removeSeat($organization);

        $this->auditService->log('organization.member_removed', [
            'organization_id' => $organization->id,
            'user_id' => $user->id,
        ], ['actor_id' => $removedBy->id]);
    }

    /**
     * Update a member's role in an organization.
     */
    public function updateMemberRole(Organization $organization, User $user, string $newRole, User $changedBy): void
    {
        if (!$organization->hasMember($user)) {
            throw new \InvalidArgumentException('User is not a member of this organization.');
        }

        // Can't demote the last owner
        if ($organization->userHasRole($user, 'owner') && $newRole !== 'owner') {
            $ownerCount = $organization->owners()->count();
            if ($ownerCount <= 1) {
                throw new \InvalidArgumentException('Cannot demote the last owner. Transfer ownership first.');
            }
        }

        $organization->users()->updateExistingPivot($user->id, [
            'role' => $newRole,
        ]);

        $this->auditService->log('organization.member_role_changed', [
            'organization_id' => $organization->id,
            'user_id' => $user->id,
            'new_role' => $newRole,
        ], ['actor_id' => $changedBy->id]);
    }

    /**
     * Transfer organization ownership to another member.
     */
    public function transferOwnership(Organization $organization, User $currentOwner, User $newOwner): void
    {
        if (!$organization->hasMember($newOwner)) {
            throw new \InvalidArgumentException('New owner must be an existing member.');
        }

        if (!$organization->userHasRole($currentOwner, 'owner')) {
            throw new \InvalidArgumentException('Only owners can transfer ownership.');
        }

        DB::transaction(function () use ($organization, $currentOwner, $newOwner) {
            // Make new user an owner
            $organization->users()->updateExistingPivot($newOwner->id, ['role' => 'owner']);
            
            // Demote current owner to admin
            $organization->users()->updateExistingPivot($currentOwner->id, ['role' => 'admin']);

            $this->auditService->log('organization.ownership_transferred', [
                'organization_id' => $organization->id,
                'from_user_id' => $currentOwner->id,
                'to_user_id' => $newOwner->id,
            ], ['actor_id' => $currentOwner->id]);
        });
    }

    /**
     * Delete an organization.
     */
    public function delete(Organization $organization, User $deletedBy): void
    {
        if ($organization->isPersonal()) {
            throw new \InvalidArgumentException('Cannot delete personal organizations.');
        }

        $this->auditService->log('organization.deleted', [
            'organization_id' => $organization->id,
            'organization_name' => $organization->name,
        ], ['actor_id' => $deletedBy->id]);

        // Cascade delete will handle related records
        $organization->delete();
    }
}
