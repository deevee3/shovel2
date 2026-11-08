<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\Handoff;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;

/**
 * API endpoints for external integrations (Excel, Sheets, Airtable).
 * 
 * Provides:
 * - CSV/JSON data exports
 * - Delta sync (updated_since) for efficient polling
 * - Webhook registration for real-time updates
 */
class IntegrationController extends Controller
{
    /**
     * GET /api/integrations/conversations
     * 
     * List conversations with pagination and delta sync support.
     * Use ?updated_since=ISO8601 for incremental sync.
     */
    public function conversations(Request $request): JsonResponse
    {
        $query = Conversation::query()
            ->with(['currentAssignment.user:id,name,email']);

        // Delta sync: only return records updated after this timestamp
        if ($updatedSince = $request->input('updated_since')) {
            $timestamp = Carbon::parse($updatedSince);
            $query->where('updated_at', '>', $timestamp);
        }

        // Filter by status
        if ($status = $request->input('status')) {
            $statuses = is_array($status) ? $status : explode(',', $status);
            $query->whereIn('status', $statuses);
        }

        // Filter by priority
        if ($priority = $request->input('priority')) {
            $query->where('priority', $priority);
        }

        // Date range filter
        if ($from = $request->input('from')) {
            $query->where('created_at', '>=', Carbon::parse($from));
        }
        if ($to = $request->input('to')) {
            $query->where('created_at', '<=', Carbon::parse($to));
        }

        // Sorting
        $sortBy = $request->input('sort', 'updated_at');
        $sortDir = $request->input('order', 'desc');
        $query->orderBy($sortBy, $sortDir);

        // Pagination
        $perPage = min($request->input('per_page', 100), 500);
        $conversations = $query->paginate($perPage);

        return response()->json([
            'data' => $conversations->items(),
            'meta' => [
                'current_page' => $conversations->currentPage(),
                'last_page' => $conversations->lastPage(),
                'per_page' => $conversations->perPage(),
                'total' => $conversations->total(),
                'sync_timestamp' => now()->toIso8601String(),
            ],
        ]);
    }

    /**
     * GET /api/integrations/conversations/export
     * 
     * Export conversations as CSV for Excel/Sheets import.
     */
    public function exportConversations(Request $request): Response
    {
        $format = $request->input('format', 'csv');
        
        $query = Conversation::query()
            ->with(['currentAssignment.user:id,name,email']);

        // Apply date filters
        if ($from = $request->input('from')) {
            $query->where('created_at', '>=', Carbon::parse($from));
        }
        if ($to = $request->input('to')) {
            $query->where('created_at', '<=', Carbon::parse($to));
        }

        // Limit export size
        $limit = min($request->input('limit', 5000), 10000);
        $conversations = $query->limit($limit)->get();

        if ($format === 'json') {
            return response()->json([
                'data' => $conversations->map(fn ($c) => $this->formatConversationForExport($c)),
                'exported_at' => now()->toIso8601String(),
                'count' => $conversations->count(),
            ]);
        }

        // CSV format
        $csv = $this->generateCsv($conversations, [
            'id', 'case_id', 'subject', 'status', 'priority',
            'requester_identifier', 'assigned_to', 'created_at', 
            'updated_at', 'first_responded_at', 'sla_status',
        ]);

        return response($csv, 200, [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="conversations_' . now()->format('Y-m-d') . '.csv"',
        ]);
    }

    /**
     * GET /api/integrations/messages
     * 
     * List messages with delta sync support.
     */
    public function messages(Request $request): JsonResponse
    {
        $query = Message::query()
            ->with(['conversation:id,case_id,subject,status']);

        // Delta sync
        if ($updatedSince = $request->input('updated_since')) {
            $query->where('created_at', '>', Carbon::parse($updatedSince));
        }

        // Filter by conversation
        if ($conversationId = $request->input('conversation_id')) {
            $query->where('conversation_id', $conversationId);
        }

        // Filter by sender type
        if ($senderType = $request->input('sender_type')) {
            $query->where('sender_type', $senderType);
        }

        $perPage = min($request->input('per_page', 100), 500);
        $messages = $query->orderBy('created_at', 'desc')->paginate($perPage);

        return response()->json([
            'data' => $messages->items(),
            'meta' => [
                'current_page' => $messages->currentPage(),
                'last_page' => $messages->lastPage(),
                'per_page' => $messages->perPage(),
                'total' => $messages->total(),
                'sync_timestamp' => now()->toIso8601String(),
            ],
        ]);
    }

    /**
     * GET /api/integrations/handoffs
     * 
     * List handoffs with delta sync support.
     */
    public function handoffs(Request $request): JsonResponse
    {
        $query = Handoff::query()
            ->with(['conversation:id,case_id,subject']);

        // Delta sync
        if ($updatedSince = $request->input('updated_since')) {
            $query->where('created_at', '>', Carbon::parse($updatedSince));
        }

        // Filter by reason
        if ($reason = $request->input('reason_code')) {
            $query->where('reason_code', $reason);
        }

        $perPage = min($request->input('per_page', 100), 500);
        $handoffs = $query->orderBy('created_at', 'desc')->paginate($perPage);

        return response()->json([
            'data' => $handoffs->items(),
            'meta' => [
                'current_page' => $handoffs->currentPage(),
                'last_page' => $handoffs->lastPage(),
                'per_page' => $handoffs->perPage(),
                'total' => $handoffs->total(),
                'sync_timestamp' => now()->toIso8601String(),
            ],
        ]);
    }

    /**
     * GET /api/integrations/analytics
     * 
     * Summary metrics for dashboard integrations.
     */
    public function analytics(Request $request): JsonResponse
    {
        $from = $request->input('from', now()->subDays(30)->toDateString());
        $to = $request->input('to', now()->toDateString());

        $fromDate = Carbon::parse($from)->startOfDay();
        $toDate = Carbon::parse($to)->endOfDay();

        $conversations = Conversation::query()
            ->whereBetween('created_at', [$fromDate, $toDate]);

        $metrics = [
            'period' => [
                'from' => $fromDate->toIso8601String(),
                'to' => $toDate->toIso8601String(),
            ],
            'conversations' => [
                'total' => (clone $conversations)->count(),
                'by_status' => (clone $conversations)->selectRaw('status, count(*) as count')
                    ->groupBy('status')
                    ->pluck('count', 'status'),
                'by_priority' => (clone $conversations)->selectRaw('priority, count(*) as count')
                    ->groupBy('priority')
                    ->pluck('count', 'priority'),
            ],
            'handoffs' => [
                'total' => Handoff::whereBetween('created_at', [$fromDate, $toDate])->count(),
                'by_reason' => Handoff::whereBetween('created_at', [$fromDate, $toDate])
                    ->selectRaw('reason_code, count(*) as count')
                    ->groupBy('reason_code')
                    ->pluck('count', 'reason_code'),
            ],
            'resolution' => [
                'resolved' => Conversation::whereBetween('updated_at', [$fromDate, $toDate])
                    ->where('status', 'resolved')
                    ->count(),
            ],
            'generated_at' => now()->toIso8601String(),
        ];

        return response()->json($metrics);
    }

    /**
     * GET /api/integrations/schema
     * 
     * Return data schema for external tools to understand the data structure.
     */
    public function schema(): JsonResponse
    {
        return response()->json([
            'version' => '1.0',
            'resources' => [
                'conversation' => [
                    'fields' => [
                        'id' => ['type' => 'integer', 'description' => 'Unique identifier'],
                        'case_id' => ['type' => 'string', 'description' => 'Human-readable case ID'],
                        'subject' => ['type' => 'string', 'description' => 'Conversation subject'],
                        'status' => ['type' => 'enum', 'values' => Conversation::statuses()],
                        'priority' => ['type' => 'enum', 'values' => ['low', 'standard', 'high', 'urgent']],
                        'requester_identifier' => ['type' => 'string', 'description' => 'Customer email or ID'],
                        'created_at' => ['type' => 'datetime', 'format' => 'ISO8601'],
                        'updated_at' => ['type' => 'datetime', 'format' => 'ISO8601'],
                    ],
                ],
                'message' => [
                    'fields' => [
                        'id' => ['type' => 'integer'],
                        'conversation_id' => ['type' => 'integer'],
                        'sender_type' => ['type' => 'enum', 'values' => ['requester', 'agent', 'human', 'system']],
                        'content' => ['type' => 'text'],
                        'confidence' => ['type' => 'float', 'nullable' => true],
                        'created_at' => ['type' => 'datetime'],
                    ],
                ],
                'handoff' => [
                    'fields' => [
                        'id' => ['type' => 'integer'],
                        'conversation_id' => ['type' => 'integer'],
                        'reason_code' => ['type' => 'string'],
                        'confidence' => ['type' => 'float'],
                        'created_at' => ['type' => 'datetime'],
                    ],
                ],
            ],
            'pagination' => [
                'max_per_page' => 500,
                'default_per_page' => 100,
            ],
            'sync' => [
                'delta_param' => 'updated_since',
                'format' => 'ISO8601',
                'description' => 'Use ?updated_since=TIMESTAMP to fetch only records updated after that time',
            ],
        ]);
    }

    /**
     * Format conversation data for export.
     */
    private function formatConversationForExport(Conversation $conversation): array
    {
        return [
            'id' => $conversation->id,
            'case_id' => $conversation->case_id,
            'subject' => $conversation->subject,
            'status' => $conversation->status,
            'priority' => $conversation->priority,
            'requester_identifier' => $conversation->requester_identifier,
            'assigned_to' => $conversation->currentAssignment?->user?->email,
            'message_count' => $conversation->messages()->count(),
            'created_at' => $conversation->created_at->toIso8601String(),
            'updated_at' => $conversation->updated_at->toIso8601String(),
            'first_responded_at' => $conversation->first_responded_at?->toIso8601String(),
            'sla_status' => $conversation->sla_status,
        ];
    }

    /**
     * Generate CSV from collection.
     */
    private function generateCsv($items, array $columns): string
    {
        $output = fopen('php://temp', 'r+');
        
        // Header row
        fputcsv($output, $columns);

        foreach ($items as $item) {
            $row = [];
            foreach ($columns as $col) {
                $value = $item->{$col} ?? '';
                
                // Handle nested values
                if ($col === 'assigned_to') {
                    $value = $item->currentAssignment?->user?->email ?? '';
                }
                
                // Format dates
                if ($value instanceof Carbon) {
                    $value = $value->toIso8601String();
                }
                
                // Handle arrays
                if (is_array($value)) {
                    $value = json_encode($value);
                }
                
                $row[] = $value;
            }
            fputcsv($output, $row);
        }

        rewind($output);
        $csv = stream_get_contents($output);
        fclose($output);

        return $csv;
    }
}
