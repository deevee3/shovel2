<?php

namespace App\Http\Middleware;

use App\Models\ApiKey;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class AuthenticateApiKey
{
    public function handle(Request $request, Closure $next)
    {
        $provided = $this->extractKey($request);

        if (! $provided) {
            throw new UnauthorizedHttpException('ApiKey', 'Missing API key. Provide X-Api-Key or Authorization: Bearer credentials.');
        }

        $hashed = hash('sha256', $provided);

        /** @var ApiKey|null $apiKey */
        // Use withoutOrganizationScope to query API keys before org context is set
        $apiKey = ApiKey::query()
            ->withoutGlobalScope('organization')
            ->where('key', $hashed)
            ->where('active', true)
            ->where(function ($query) {
                $query->whereNull('expires_at')
                    ->orWhere('expires_at', '>', now());
            })
            ->first();

        if (! $apiKey) {
            throw new UnauthorizedHttpException('ApiKey', 'Invalid or inactive API key.');
        }

        $apiKey->forceFill([
            'last_used_at' => now(),
        ])->saveQuietly();

        // Store API key for organization context resolution
        $request->attributes->set('api_key', $apiKey);
        $request->attributes->set('apiKey', $apiKey); // Legacy support

        // Set organization context from API key
        if ($apiKey->organization_id) {
            app()->instance('current_organization_id', $apiKey->organization_id);
        }

        return $next($request);
    }

    private function extractKey(Request $request): ?string
    {
        $headerKey = $request->headers->get('X-Api-Key');
        if ($headerKey) {
            return $headerKey;
        }

        $authorization = $request->headers->get('Authorization');
        if ($authorization && str_starts_with($authorization, 'Bearer ')) {
            return substr($authorization, 7);
        }

        return null;
    }
}
