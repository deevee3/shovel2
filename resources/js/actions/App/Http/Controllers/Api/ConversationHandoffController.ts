import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ConversationHandoffController::store
* @see app/Http/Controllers/Api/ConversationHandoffController.php:19
* @route '/api/conversations/{conversation}/handoff'
*/
export const store = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/conversations/{conversation}/handoff',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ConversationHandoffController::store
* @see app/Http/Controllers/Api/ConversationHandoffController.php:19
* @route '/api/conversations/{conversation}/handoff'
*/
store.url = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { conversation: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { conversation: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            conversation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        conversation: typeof args.conversation === 'object'
        ? args.conversation.id
        : args.conversation,
    }

    return store.definition.url
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ConversationHandoffController::store
* @see app/Http/Controllers/Api/ConversationHandoffController.php:19
* @route '/api/conversations/{conversation}/handoff'
*/
store.post = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ConversationHandoffController::store
* @see app/Http/Controllers/Api/ConversationHandoffController.php:19
* @route '/api/conversations/{conversation}/handoff'
*/
const storeForm = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ConversationHandoffController::store
* @see app/Http/Controllers/Api/ConversationHandoffController.php:19
* @route '/api/conversations/{conversation}/handoff'
*/
storeForm.post = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const ConversationHandoffController = { store }

export default ConversationHandoffController