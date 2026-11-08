<?php

namespace App\Models\Concerns;

use App\Models\Organization;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Trait for models that belong to an organization (tenant scoping).
 * 
 * This trait provides:
 * - Automatic organization relationship
 * - Global scope to filter queries by current organization
 * - Auto-assignment of organization_id on create
 * 
 * Usage: Add `use BelongsToOrganization;` to your model.
 */
trait BelongsToOrganization
{
    /**
     * Boot the trait - add global scope and creating listener.
     */
    public static function bootBelongsToOrganization(): void
    {
        // Global scope to filter by organization
        static::addGlobalScope('organization', function (Builder $builder) {
            if ($organizationId = static::getCurrentOrganizationId()) {
                $builder->where($builder->getModel()->getTable() . '.organization_id', $organizationId);
            }
        });

        // Auto-assign organization_id on create
        static::creating(function (Model $model) {
            if (empty($model->organization_id)) {
                $model->organization_id = static::getCurrentOrganizationId();
            }
        });
    }

    /**
     * Get the organization relationship.
     * 
     * @return BelongsTo<Organization, self>
     */
    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class);
    }

    /**
     * Scope to a specific organization (bypasses global scope).
     */
    public function scopeForOrganization(Builder $query, int|Organization $organization): Builder
    {
        $organizationId = $organization instanceof Organization ? $organization->id : $organization;
        
        return $query->withoutGlobalScope('organization')
            ->where($this->getTable() . '.organization_id', $organizationId);
    }

    /**
     * Scope to query without organization filter.
     */
    public function scopeWithoutOrganizationScope(Builder $query): Builder
    {
        return $query->withoutGlobalScope('organization');
    }

    /**
     * Scope to include all organizations (admin/system use).
     */
    public function scopeAllOrganizations(Builder $query): Builder
    {
        return $query->withoutGlobalScope('organization');
    }

    /**
     * Get the current organization ID from context.
     * 
     * Priority: explicit context > authenticated user's current org > null
     */
    protected static function getCurrentOrganizationId(): ?int
    {
        // Check if there's an explicit organization context set (e.g., from middleware)
        if (app()->bound('current_organization_id')) {
            return app('current_organization_id');
        }

        // Fall back to authenticated user's current organization
        $user = auth()->user();
        if ($user && $user->current_organization_id) {
            return $user->current_organization_id;
        }

        return null;
    }

    /**
     * Check if this model belongs to the given organization.
     */
    public function belongsToOrg(int|Organization $organization): bool
    {
        $organizationId = $organization instanceof Organization ? $organization->id : $organization;
        return $this->organization_id === $organizationId;
    }
}
