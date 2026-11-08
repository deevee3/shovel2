import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\OrganizationController::list
* @see app/Http/Controllers/Admin/OrganizationController.php:218
* @route '/admin/api/organizations'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/admin/api/organizations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\OrganizationController::list
* @see app/Http/Controllers/Admin/OrganizationController.php:218
* @route '/admin/api/organizations'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\OrganizationController::list
* @see app/Http/Controllers/Admin/OrganizationController.php:218
* @route '/admin/api/organizations'
*/
list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::list
* @see app/Http/Controllers/Admin/OrganizationController.php:218
* @route '/admin/api/organizations'
*/
list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::list
* @see app/Http/Controllers/Admin/OrganizationController.php:218
* @route '/admin/api/organizations'
*/
const listForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::list
* @see app/Http/Controllers/Admin/OrganizationController.php:218
* @route '/admin/api/organizations'
*/
listForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::list
* @see app/Http/Controllers/Admin/OrganizationController.php:218
* @route '/admin/api/organizations'
*/
listForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

list.form = listForm

const organizations = {
    list: Object.assign(list, list),
}

export default organizations