<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Tables that need organization scoping for tenant isolation.
     */
    private array $tablesToScope = [
        'conversations',
        'queues',
        'api_keys',
        'webhooks',
        'handoff_rules',
        'kb_articles',
        'audit_events',
    ];

    public function up(): void
    {
        foreach ($this->tablesToScope as $table) {
            if (Schema::hasTable($table) && !Schema::hasColumn($table, 'organization_id')) {
                Schema::table($table, function (Blueprint $table) {
                    $table->foreignId('organization_id')
                        ->nullable() // nullable for migration, will be required for new records
                        ->after('id')
                        ->constrained()
                        ->cascadeOnDelete();
                    
                    $table->index('organization_id');
                });
            }
        }

        // Add current_organization_id to users for org switching
        if (!Schema::hasColumn('users', 'current_organization_id')) {
            Schema::table('users', function (Blueprint $table) {
                $table->foreignId('current_organization_id')
                    ->nullable()
                    ->after('metadata')
                    ->constrained('organizations')
                    ->nullOnDelete();
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('users', 'current_organization_id')) {
            Schema::table('users', function (Blueprint $table) {
                $table->dropConstrainedForeignId('current_organization_id');
            });
        }

        foreach (array_reverse($this->tablesToScope) as $tableName) {
            if (Schema::hasTable($tableName) && Schema::hasColumn($tableName, 'organization_id')) {
                Schema::table($tableName, function (Blueprint $table) {
                    $table->dropConstrainedForeignId('organization_id');
                });
            }
        }
    }
};
