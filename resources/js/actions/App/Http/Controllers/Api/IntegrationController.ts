import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\IntegrationController::schema
* @see app/Http/Controllers/Api/IntegrationController.php:254
* @route '/api/integrations/schema'
*/
export const schema = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schema.url(options),
    method: 'get',
})

schema.definition = {
    methods: ["get","head"],
    url: '/api/integrations/schema',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\IntegrationController::schema
* @see app/Http/Controllers/Api/IntegrationController.php:254
* @route '/api/integrations/schema'
*/
schema.url = (options?: RouteQueryOptions) => {
    return schema.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IntegrationController::schema
* @see app/Http/Controllers/Api/IntegrationController.php:254
* @route '/api/integrations/schema'
*/
schema.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schema.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::schema
* @see app/Http/Controllers/Api/IntegrationController.php:254
* @route '/api/integrations/schema'
*/
schema.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: schema.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::schema
* @see app/Http/Controllers/Api/IntegrationController.php:254
* @route '/api/integrations/schema'
*/
const schemaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schema.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::schema
* @see app/Http/Controllers/Api/IntegrationController.php:254
* @route '/api/integrations/schema'
*/
schemaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schema.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::schema
* @see app/Http/Controllers/Api/IntegrationController.php:254
* @route '/api/integrations/schema'
*/
schemaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schema.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

schema.form = schemaForm

/**
* @see \App\Http\Controllers\Api\IntegrationController::conversations
* @see app/Http/Controllers/Api/IntegrationController.php:30
* @route '/api/integrations/conversations'
*/
export const conversations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conversations.url(options),
    method: 'get',
})

conversations.definition = {
    methods: ["get","head"],
    url: '/api/integrations/conversations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\IntegrationController::conversations
* @see app/Http/Controllers/Api/IntegrationController.php:30
* @route '/api/integrations/conversations'
*/
conversations.url = (options?: RouteQueryOptions) => {
    return conversations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IntegrationController::conversations
* @see app/Http/Controllers/Api/IntegrationController.php:30
* @route '/api/integrations/conversations'
*/
conversations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conversations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::conversations
* @see app/Http/Controllers/Api/IntegrationController.php:30
* @route '/api/integrations/conversations'
*/
conversations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conversations.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::conversations
* @see app/Http/Controllers/Api/IntegrationController.php:30
* @route '/api/integrations/conversations'
*/
const conversationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: conversations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::conversations
* @see app/Http/Controllers/Api/IntegrationController.php:30
* @route '/api/integrations/conversations'
*/
conversationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: conversations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::conversations
* @see app/Http/Controllers/Api/IntegrationController.php:30
* @route '/api/integrations/conversations'
*/
conversationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: conversations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

conversations.form = conversationsForm

/**
* @see \App\Http\Controllers\Api\IntegrationController::exportConversations
* @see app/Http/Controllers/Api/IntegrationController.php:86
* @route '/api/integrations/conversations/export'
*/
export const exportConversations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportConversations.url(options),
    method: 'get',
})

exportConversations.definition = {
    methods: ["get","head"],
    url: '/api/integrations/conversations/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\IntegrationController::exportConversations
* @see app/Http/Controllers/Api/IntegrationController.php:86
* @route '/api/integrations/conversations/export'
*/
exportConversations.url = (options?: RouteQueryOptions) => {
    return exportConversations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IntegrationController::exportConversations
* @see app/Http/Controllers/Api/IntegrationController.php:86
* @route '/api/integrations/conversations/export'
*/
exportConversations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportConversations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::exportConversations
* @see app/Http/Controllers/Api/IntegrationController.php:86
* @route '/api/integrations/conversations/export'
*/
exportConversations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportConversations.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::exportConversations
* @see app/Http/Controllers/Api/IntegrationController.php:86
* @route '/api/integrations/conversations/export'
*/
const exportConversationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportConversations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::exportConversations
* @see app/Http/Controllers/Api/IntegrationController.php:86
* @route '/api/integrations/conversations/export'
*/
exportConversationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportConversations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::exportConversations
* @see app/Http/Controllers/Api/IntegrationController.php:86
* @route '/api/integrations/conversations/export'
*/
exportConversationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportConversations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportConversations.form = exportConversationsForm

/**
* @see \App\Http\Controllers\Api\IntegrationController::messages
* @see app/Http/Controllers/Api/IntegrationController.php:131
* @route '/api/integrations/messages'
*/
export const messages = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: messages.url(options),
    method: 'get',
})

messages.definition = {
    methods: ["get","head"],
    url: '/api/integrations/messages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\IntegrationController::messages
* @see app/Http/Controllers/Api/IntegrationController.php:131
* @route '/api/integrations/messages'
*/
messages.url = (options?: RouteQueryOptions) => {
    return messages.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IntegrationController::messages
* @see app/Http/Controllers/Api/IntegrationController.php:131
* @route '/api/integrations/messages'
*/
messages.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: messages.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::messages
* @see app/Http/Controllers/Api/IntegrationController.php:131
* @route '/api/integrations/messages'
*/
messages.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: messages.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::messages
* @see app/Http/Controllers/Api/IntegrationController.php:131
* @route '/api/integrations/messages'
*/
const messagesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: messages.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::messages
* @see app/Http/Controllers/Api/IntegrationController.php:131
* @route '/api/integrations/messages'
*/
messagesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: messages.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::messages
* @see app/Http/Controllers/Api/IntegrationController.php:131
* @route '/api/integrations/messages'
*/
messagesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: messages.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

messages.form = messagesForm

/**
* @see \App\Http\Controllers\Api\IntegrationController::handoffs
* @see app/Http/Controllers/Api/IntegrationController.php:171
* @route '/api/integrations/handoffs'
*/
export const handoffs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handoffs.url(options),
    method: 'get',
})

handoffs.definition = {
    methods: ["get","head"],
    url: '/api/integrations/handoffs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\IntegrationController::handoffs
* @see app/Http/Controllers/Api/IntegrationController.php:171
* @route '/api/integrations/handoffs'
*/
handoffs.url = (options?: RouteQueryOptions) => {
    return handoffs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IntegrationController::handoffs
* @see app/Http/Controllers/Api/IntegrationController.php:171
* @route '/api/integrations/handoffs'
*/
handoffs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handoffs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::handoffs
* @see app/Http/Controllers/Api/IntegrationController.php:171
* @route '/api/integrations/handoffs'
*/
handoffs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handoffs.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::handoffs
* @see app/Http/Controllers/Api/IntegrationController.php:171
* @route '/api/integrations/handoffs'
*/
const handoffsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handoffs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::handoffs
* @see app/Http/Controllers/Api/IntegrationController.php:171
* @route '/api/integrations/handoffs'
*/
handoffsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handoffs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::handoffs
* @see app/Http/Controllers/Api/IntegrationController.php:171
* @route '/api/integrations/handoffs'
*/
handoffsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handoffs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

handoffs.form = handoffsForm

/**
* @see \App\Http\Controllers\Api\IntegrationController::analytics
* @see app/Http/Controllers/Api/IntegrationController.php:206
* @route '/api/integrations/analytics'
*/
export const analytics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analytics.url(options),
    method: 'get',
})

analytics.definition = {
    methods: ["get","head"],
    url: '/api/integrations/analytics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\IntegrationController::analytics
* @see app/Http/Controllers/Api/IntegrationController.php:206
* @route '/api/integrations/analytics'
*/
analytics.url = (options?: RouteQueryOptions) => {
    return analytics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IntegrationController::analytics
* @see app/Http/Controllers/Api/IntegrationController.php:206
* @route '/api/integrations/analytics'
*/
analytics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analytics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::analytics
* @see app/Http/Controllers/Api/IntegrationController.php:206
* @route '/api/integrations/analytics'
*/
analytics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: analytics.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::analytics
* @see app/Http/Controllers/Api/IntegrationController.php:206
* @route '/api/integrations/analytics'
*/
const analyticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: analytics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::analytics
* @see app/Http/Controllers/Api/IntegrationController.php:206
* @route '/api/integrations/analytics'
*/
analyticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: analytics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\IntegrationController::analytics
* @see app/Http/Controllers/Api/IntegrationController.php:206
* @route '/api/integrations/analytics'
*/
analyticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: analytics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

analytics.form = analyticsForm

const IntegrationController = { schema, conversations, exportConversations, messages, handoffs, analytics }

export default IntegrationController