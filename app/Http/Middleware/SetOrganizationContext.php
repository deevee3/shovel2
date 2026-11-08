<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Middleware to set the current organization context for tenant scoping.
 * 
 * This ensures all database queries are automatically scoped to the
 * user's current organization, preventing data leakage between tenants.
 */
class SetOrganizationContext
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $organizationId = $this->resolveOrganizationId($request);

        if ($organizationId) {
            // Bind organization ID to container for global scope access
            app()->instance('current_organization_id', $organizationId);
        }

        return $next($request);
    }

    /**
     * Resolve the organization ID from various sources.
     * 
     * Priority:
     * 1. API key's organization_id (for API requests)
     * 2. Request header X-Organization-Id (for org switching)
     * 3. Authenticated user's current_organization_id
     */
    protected function resolveOrganizationId(Request $request): ?int
    {
        // 1. Check if API key has organization context
        if ($apiKey = $request->attributes->get('api_key')) {
            return $apiKey->organization_id;
        }

        // 2. Check request header for explicit organization switch
        if ($headerOrgId = $request->header('X-Organization-Id')) {
            $user = auth()->user();
            // Validate user belongs to this organization
            if ($user && $user->belongsToOrganization((int) $headerOrgId)) {
                return (int) $headerOrgId;
            }
        }

        // 3. Fall back to authenticated user's current organization
        $user = auth()->user();
        if ($user) {
            return $user->current_organization_id;
        }

        return null;
    }
}
