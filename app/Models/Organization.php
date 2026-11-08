<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'type',
        'settings',
        'billing_metadata',
        'status',
    ];

    protected $casts = [
        'settings' => 'array',
        'billing_metadata' => 'array',
    ];

    protected $hidden = [
        'billing_metadata',
    ];

    protected static function booted(): void
    {
        static::creating(function (self $org): void {
            if (blank($org->public_id)) {
                $org->public_id = (string) Str::uuid();
            }
            if (blank($org->slug)) {
                $org->slug = Str::slug($org->name) . '-' . Str::random(6);
            }
        });
    }

    /**
     * @return BelongsToMany<User>
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'organization_user')
            ->withPivot(['role', 'permissions', 'joined_at'])
            ->withTimestamps();
    }

    /**
     * @return BelongsToMany<User>
     */
    public function owners(): BelongsToMany
    {
        return $this->users()->wherePivot('role', 'owner');
    }

    /**
     * @return BelongsToMany<User>
     */
    public function admins(): BelongsToMany
    {
        return $this->users()->wherePivotIn('role', ['owner', 'admin']);
    }

    /**
     * @return HasMany<OrganizationInvitation>
     */
    public function invitations(): HasMany
    {
        return $this->hasMany(OrganizationInvitation::class);
    }

    /**
     * @return HasMany<OrganizationInvitation>
     */
    public function pendingInvitations(): HasMany
    {
        return $this->invitations()
            ->whereNull('accepted_at')
            ->where('expires_at', '>', now());
    }

    /**
     * @return HasMany<ApiKey>
     */
    public function apiKeys(): HasMany
    {
        return $this->hasMany(ApiKey::class);
    }

    /**
     * @return HasMany<Conversation>
     */
    public function conversations(): HasMany
    {
        return $this->hasMany(Conversation::class);
    }

    /**
     * @return HasMany<Queue>
     */
    public function queues(): HasMany
    {
        return $this->hasMany(Queue::class);
    }

    /**
     * Check if a user has a specific role in this organization.
     */
    public function userHasRole(User $user, string|array $roles): bool
    {
        $roles = (array) $roles;
        $membership = $this->users()
            ->where('user_id', $user->id)
            ->first();

        return $membership && in_array($membership->pivot->role, $roles, true);
    }

    /**
     * Check if a user is a member of this organization.
     */
    public function hasMember(User $user): bool
    {
        return $this->users()->where('user_id', $user->id)->exists();
    }

    /**
     * Check if this is a personal (single-user) organization.
     */
    public function isPersonal(): bool
    {
        return $this->type === 'personal';
    }

    /**
     * Get the organization's setting value.
     */
    public function getSetting(string $key, mixed $default = null): mixed
    {
        return data_get($this->settings, $key, $default);
    }
}
