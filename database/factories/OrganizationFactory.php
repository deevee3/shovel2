<?php

namespace Database\Factories;

use App\Models\Organization;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Organization>
 */
class OrganizationFactory extends Factory
{
    protected $model = Organization::class;

    public function definition(): array
    {
        $name = fake()->company();
        
        return [
            'public_id' => (string) Str::uuid(),
            'name' => $name,
            'slug' => Str::slug($name) . '-' . Str::random(6),
            'description' => fake()->optional()->sentence(),
            'type' => 'team',
            'settings' => [],
            'billing_metadata' => [],
            'status' => 'active',
        ];
    }

    /**
     * Create a personal organization.
     */
    public function personal(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'personal',
            'name' => fake()->name() . "'s Workspace",
        ]);
    }

    /**
     * Create a suspended organization.
     */
    public function suspended(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'suspended',
        ]);
    }
}
