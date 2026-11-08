import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ConversationMessageController::store
* @see app/Http/Controllers/Api/ConversationMessageController.php:25
* @route '/api/conversations/{conversation}/messages'
*/
export const store = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/conversations/{conversation}/messages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ConversationMessageController::store
* @see app/Http/Controllers/Api/ConversationMessageController.php:25
* @route '/api/conversations/{conversation}/messages'
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
* @see \App\Http\Controllers\Api\ConversationMessageController::store
* @see app/Http/Controllers/Api/ConversationMessageController.php:25
* @route '/api/conversations/{conversation}/messages'
*/
store.post = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ConversationMessageController::store
* @see app/Http/Controllers/Api/ConversationMessageController.php:25
* @route '/api/conversations/{conversation}/messages'
*/
const storeForm = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ConversationMessageController::store
* @see app/Http/Controllers/Api/ConversationMessageController.php:25
* @route '/api/conversations/{conversation}/messages'
*/
storeForm.post = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\ConversationMessageController::storeHumanMessage
* @see app/Http/Controllers/Api/ConversationMessageController.php:56
* @route '/api/conversations/{conversation}/human-messages'
*/
export const storeHumanMessage = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeHumanMessage.url(args, options),
    method: 'post',
})

storeHumanMessage.definition = {
    methods: ["post"],
    url: '/api/conversations/{conversation}/human-messages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ConversationMessageController::storeHumanMessage
* @see app/Http/Controllers/Api/ConversationMessageController.php:56
* @route '/api/conversations/{conversation}/human-messages'
*/
storeHumanMessage.url = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return storeHumanMessage.definition.url
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ConversationMessageController::storeHumanMessage
* @see app/Http/Controllers/Api/ConversationMessageController.php:56
* @route '/api/conversations/{conversation}/human-messages'
*/
storeHumanMessage.post = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeHumanMessage.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ConversationMessageController::storeHumanMessage
* @see app/Http/Controllers/Api/ConversationMessageController.php:56
* @route '/api/conversations/{conversation}/human-messages'
*/
const storeHumanMessageForm = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeHumanMessage.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ConversationMessageController::storeHumanMessage
* @see app/Http/Controllers/Api/ConversationMessageController.php:56
* @route '/api/conversations/{conversation}/human-messages'
*/
storeHumanMessageForm.post = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeHumanMessage.url(args, options),
    method: 'post',
})

storeHumanMessage.form = storeHumanMessageForm

const ConversationMessageController = { store, storeHumanMessage }

export default ConversationMessageController