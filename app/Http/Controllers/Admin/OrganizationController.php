<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\OrganizationInvitation;
use App\Models\User;
use App\Services\OrganizationService;
use App\Services\SeatBillingService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrganizationController extends Controller
{
    public function __construct(
        private readonly OrganizationService $organizationService,
        private readonly SeatBillingService $seatBillingService
    ) {}

    /**
     * Display organization settings.
     */
    public function index(Request $request): Response
    {
        $user = $request->user();
        $organization = $user->currentOrganization;

        if (!$organization) {
            return Inertia::render('admin/organization/setup');
        }

        return Inertia::render('admin/organization/index', [
            'organization' => $organization,
            'members' => $organization->users()->get()->map(fn ($u) => [
                'id' => $u->id,
                'name' => $u->name,
                'email' => $u->email,
                'avatar' => $u->avatar,
                'role' => $u->pivot->role,
                'joined_at' => $u->pivot->joined_at,
            ]),
            'pendingInvitations' => $organization->pendingInvitations()->get(),
            'userRole' => $user->roleInOrganization($organization),
            'canManage' => $user->canManageOrganization($organization),
            'seatInfo' => $this->seatBillingService->getSeatInfo($organization),
        ]);
    }

    /**
     * Show organization creation form.
     */
    public function create(): Response
    {
        return Inertia::render('admin/organization/create');
    }

    /**
     * Create a new organization.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);

        $organization = $this->organizationService->create($validated, $request->user());

        return redirect()->route('admin.organizations.index')
            ->with('success', 'Organization created successfully.');
    }

    /**
     * Update organization settings.
     */
    public function update(Request $request): RedirectResponse
    {
        $user = $request->user();
        $organization = $user->currentOrganization;

        if (!$organization || !$user->canManageOrganization($organization)) {
            abort(403, 'You do not have permission to update this organization.');
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);

        $this->organizationService->update($organization, $validated);

        return back()->with('success', 'Organization updated successfully.');
    }

    /**
     * Send an invitation to join the organization.
     */
    public function invite(Request $request): RedirectResponse
    {
        $user = $request->user();
        $organization = $user->currentOrganization;

        if (!$organization || !$user->canManageOrganization($organization)) {
            abort(403, 'You do not have permission to invite members.');
        }

        $validated = $request->validate([
            'email' => 'required|email|max:255',
            'role' => 'required|in:admin,member',
        ]);

        try {
            $this->organizationService->invite(
                $organization,
                $validated['email'],
                $validated['role'],
                $user
            );

            return back()->with('success', 'Invitation sent successfully.');
        } catch (\InvalidArgumentException $e) {
            return back()->withErrors(['email' => $e->getMessage()]);
        }
    }

    /**
     * Cancel a pending invitation.
     */
    public function cancelInvitation(Request $request, OrganizationInvitation $invitation): RedirectResponse
    {
        $user = $request->user();
        $organization = $user->currentOrganization;

        if (!$organization || $invitation->organization_id !== $organization->id) {
            abort(404);
        }

        if (!$user->canManageOrganization($organization)) {
            abort(403);
        }

        $this->organizationService->cancelInvitation($invitation, $user);

        return back()->with('success', 'Invitation cancelled.');
    }

    /**
     * Remove a member from the organization.
     */
    public function removeMember(Request $request, User $member): RedirectResponse
    {
        $user = $request->user();
        $organization = $user->currentOrganization;

        if (!$organization || !$user->canManageOrganization($organization)) {
            abort(403);
        }

        try {
            $this->organizationService->removeMember($organization, $member, $user);
            return back()->with('success', 'Member removed successfully.');
        } catch (\InvalidArgumentException $e) {
            return back()->withErrors(['member' => $e->getMessage()]);
        }
    }

    /**
     * Update a member's role.
     */
    public function updateMemberRole(Request $request, User $member): RedirectResponse
    {
        $user = $request->user();
        $organization = $user->currentOrganization;

        if (!$organization || !$user->ownsOrganization($organization)) {
            abort(403, 'Only owners can change member roles.');
        }

        $validated = $request->validate([
            'role' => 'required|in:owner,admin,member',
        ]);

        try {
            $this->organizationService->updateMemberRole(
                $organization,
                $member,
                $validated['role'],
                $user
            );
            return back()->with('success', 'Member role updated.');
        } catch (\InvalidArgumentException $e) {
            return back()->withErrors(['role' => $e->getMessage()]);
        }
    }

    /**
     * Switch to a different organization.
     */
    public function switch(Request $request, Organization $organization): RedirectResponse
    {
        $user = $request->user();

        if (!$user->switchOrganization($organization)) {
            abort(403, 'You are not a member of this organization.');
        }

        return redirect()->route('admin.dashboard')
            ->with('success', "Switched to {$organization->name}.");
    }

    /**
     * List user's organizations (for switcher).
     */
    public function listUserOrganizations(Request $request): JsonResponse
    {
        $user = $request->user();

        $organizations = $user->organizations()->get()->map(fn ($org) => [
            'id' => $org->id,
            'name' => $org->name,
            'slug' => $org->slug,
            'type' => $org->type,
            'role' => $org->pivot->role,
            'is_current' => $org->id === $user->current_organization_id,
        ]);

        return response()->json(['organizations' => $organizations]);
    }
}
