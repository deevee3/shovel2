import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ConversationController::store
* @see app/Http/Controllers/Api/ConversationController.php:19
* @route '/api/conversations'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/conversations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ConversationController::store
* @see app/Http/Controllers/Api/ConversationController.php:19
* @route '/api/conversations'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ConversationController::store
* @see app/Http/Controllers/Api/ConversationController.php:19
* @route '/api/conversations'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ConversationController::store
* @see app/Http/Controllers/Api/ConversationController.php:19
* @route '/api/conversations'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ConversationController::store
* @see app/Http/Controllers/Api/ConversationController.php:19
* @route '/api/conversations'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const ConversationController = { store }

export default ConversationController