<?php

namespace App\Http\Controllers;

use App\Models\OrganizationInvitation;
use App\Services\OrganizationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InvitationController extends Controller
{
    public function __construct(
        private readonly OrganizationService $organizationService
    ) {}

    /**
     * Show the invitation acceptance page.
     */
    public function show(string $token): Response|RedirectResponse
    {
        $invitation = OrganizationInvitation::where('token', $token)
            ->with('organization:id,name,description')
            ->first();

        if (!$invitation) {
            return redirect()->route('login')
                ->with('error', 'This invitation link is invalid.');
        }

        if (!$invitation->isValid()) {
            return redirect()->route('login')
                ->with('error', 'This invitation has expired or already been accepted.');
        }

        return Inertia::render('Invitations/Show', [
            'invitation' => [
                'token' => $invitation->token,
                'email' => $invitation->email,
                'role' => $invitation->role,
                'organization' => [
                    'name' => $invitation->organization->name,
                    'description' => $invitation->organization->description,
                ],
                'expires_at' => $invitation->expires_at->toIso8601String(),
            ],
        ]);
    }

    /**
     * Accept the invitation.
     */
    public function accept(Request $request, string $token): RedirectResponse
    {
        $user = $request->user();

        if (!$user) {
            // Store token in session and redirect to login/register
            session(['pending_invitation' => $token]);
            return redirect()->route('login')
                ->with('info', 'Please log in or create an account to accept this invitation.');
        }

        $invitation = OrganizationInvitation::where('token', $token)->first();

        if (!$invitation) {
            return redirect()->route('admin.dashboard')
                ->with('error', 'This invitation link is invalid.');
        }

        try {
            $this->organizationService->acceptInvitation($invitation, $user);

            return redirect()->route('admin.dashboard')
                ->with('success', "You've joined {$invitation->organization->name}!");
        } catch (\InvalidArgumentException $e) {
            return redirect()->route('admin.dashboard')
                ->with('error', $e->getMessage());
        }
    }
}
