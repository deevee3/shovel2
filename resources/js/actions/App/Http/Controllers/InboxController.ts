import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
const InboxController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: InboxController.url(options),
    method: 'get',
})

InboxController.definition = {
    methods: ["get","head"],
    url: '/inbox',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
InboxController.url = (options?: RouteQueryOptions) => {
    return InboxController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
InboxController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: InboxController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
InboxController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: InboxController.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
const InboxControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: InboxController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
InboxControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: InboxController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
InboxControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: InboxController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

InboxController.form = InboxControllerForm

export default InboxController