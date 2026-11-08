<?php

namespace App\Services;

use App\Models\Organization;
use App\Models\User;
use Illuminate\Support\Facades\Log;

/**
 * Service to manage per-seat billing for team members.
 * 
 * Each additional team member beyond the first (owner) costs $49/month.
 * This is implemented via Stripe subscription item quantities.
 */
class SeatBillingService
{
    /**
     * Get the seat price ID from config.
     */
    public function getSeatPriceId(): string
    {
        return config('plans.seat_price.id');
    }

    /**
     * Get the billable user for an organization.
     * This is typically the owner or the organization itself.
     */
    public function getBillableUser(Organization $organization): ?User
    {
        // Get the owner of the organization
        return $organization->owners()->first();
    }

    /**
     * Calculate the number of billable seats for an organization.
     * The first seat (owner) is included in the base plan.
     * Additional members are charged $49 each.
     */
    public function calculateBillableSeats(Organization $organization): int
    {
        $totalMembers = $organization->users()->count();
        
        // First seat is included free (the owner)
        return max(0, $totalMembers - 1);
    }

    /**
     * Sync the seat count with Stripe when members are added/removed.
     */
    public function syncSeats(Organization $organization): bool
    {
        $billableUser = $this->getBillableUser($organization);
        
        if (!$billableUser) {
            Log::warning('No billable user found for organization', [
                'organization_id' => $organization->id,
            ]);
            return false;
        }

        $subscription = $billableUser->subscription('default');
        
        if (!$subscription || !$subscription->valid()) {
            Log::info('No valid subscription for seat sync', [
                'organization_id' => $organization->id,
                'user_id' => $billableUser->id,
            ]);
            return false;
        }

        $billableSeats = $this->calculateBillableSeats($organization);
        $seatPriceId = $this->getSeatPriceId();

        try {
            // Check if seat price item already exists on subscription
            $seatItem = $subscription->findItemOrFail($seatPriceId);
            
            if ($billableSeats > 0) {
                // Update the quantity
                $subscription->updateQuantity($billableSeats, $seatPriceId);
                
                Log::info('Updated seat quantity', [
                    'organization_id' => $organization->id,
                    'seats' => $billableSeats,
                ]);
            } else {
                // No additional seats needed, remove the item
                $subscription->removePrice($seatPriceId);
                
                Log::info('Removed seat item (no additional seats)', [
                    'organization_id' => $organization->id,
                ]);
            }
        } catch (\Exception $e) {
            // Seat item doesn't exist yet
            if ($billableSeats > 0) {
                try {
                    // Add the seat price to subscription
                    $subscription->addPrice($seatPriceId, $billableSeats);
                    
                    Log::info('Added seat pricing to subscription', [
                        'organization_id' => $organization->id,
                        'seats' => $billableSeats,
                    ]);
                } catch (\Exception $addError) {
                    Log::error('Failed to add seat pricing', [
                        'organization_id' => $organization->id,
                        'error' => $addError->getMessage(),
                    ]);
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Add a seat when a new member joins.
     */
    public function addSeat(Organization $organization): bool
    {
        return $this->syncSeats($organization);
    }

    /**
     * Remove a seat when a member leaves.
     */
    public function removeSeat(Organization $organization): bool
    {
        return $this->syncSeats($organization);
    }

    /**
     * Get current seat count and cost for display.
     */
    public function getSeatInfo(Organization $organization): array
    {
        $billableSeats = $this->calculateBillableSeats($organization);
        $pricePerSeat = config('plans.seat_price.price', 49);

        return [
            'total_members' => $organization->users()->count(),
            'billable_seats' => $billableSeats,
            'price_per_seat' => $pricePerSeat,
            'monthly_seat_cost' => $billableSeats * $pricePerSeat,
            'included_seats' => 1, // Owner is included free
        ];
    }

    /**
     * Check if adding a member requires payment method.
     */
    public function requiresPaymentForNewMember(Organization $organization): bool
    {
        $billableUser = $this->getBillableUser($organization);
        
        if (!$billableUser) {
            return true;
        }

        $subscription = $billableUser->subscription('default');
        
        // If no subscription or no payment method, require setup
        if (!$subscription || !$subscription->valid()) {
            return true;
        }

        return !$billableUser->hasDefaultPaymentMethod();
    }
}
