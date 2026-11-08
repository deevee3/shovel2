import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ApiKeyController::index
* @see app/Http/Controllers/Admin/ApiKeyController.php:23
* @route '/admin/api/api-keys'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/api/api-keys',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::index
* @see app/Http/Controllers/Admin/ApiKeyController.php:23
* @route '/admin/api/api-keys'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::index
* @see app/Http/Controllers/Admin/ApiKeyController.php:23
* @route '/admin/api/api-keys'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::index
* @see app/Http/Controllers/Admin/ApiKeyController.php:23
* @route '/admin/api/api-keys'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::index
* @see app/Http/Controllers/Admin/ApiKeyController.php:23
* @route '/admin/api/api-keys'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::index
* @see app/Http/Controllers/Admin/ApiKeyController.php:23
* @route '/admin/api/api-keys'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::index
* @see app/Http/Controllers/Admin/ApiKeyController.php:23
* @route '/admin/api/api-keys'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::store
* @see app/Http/Controllers/Admin/ApiKeyController.php:64
* @route '/admin/api/api-keys'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/api/api-keys',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::store
* @see app/Http/Controllers/Admin/ApiKeyController.php:64
* @route '/admin/api/api-keys'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::store
* @see app/Http/Controllers/Admin/ApiKeyController.php:64
* @route '/admin/api/api-keys'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::store
* @see app/Http/Controllers/Admin/ApiKeyController.php:64
* @route '/admin/api/api-keys'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::store
* @see app/Http/Controllers/Admin/ApiKeyController.php:64
* @route '/admin/api/api-keys'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::update
* @see app/Http/Controllers/Admin/ApiKeyController.php:97
* @route '/admin/api/api-keys/{apiKey}'
*/
export const update = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/api/api-keys/{apiKey}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::update
* @see app/Http/Controllers/Admin/ApiKeyController.php:97
* @route '/admin/api/api-keys/{apiKey}'
*/
update.url = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { apiKey: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { apiKey: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            apiKey: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        apiKey: typeof args.apiKey === 'object'
        ? args.apiKey.id
        : args.apiKey,
    }

    return update.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::update
* @see app/Http/Controllers/Admin/ApiKeyController.php:97
* @route '/admin/api/api-keys/{apiKey}'
*/
update.put = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::update
* @see app/Http/Controllers/Admin/ApiKeyController.php:97
* @route '/admin/api/api-keys/{apiKey}'
*/
const updateForm = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::update
* @see app/Http/Controllers/Admin/ApiKeyController.php:97
* @route '/admin/api/api-keys/{apiKey}'
*/
updateForm.put = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::destroy
* @see app/Http/Controllers/Admin/ApiKeyController.php:117
* @route '/admin/api/api-keys/{apiKey}'
*/
export const destroy = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/api/api-keys/{apiKey}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::destroy
* @see app/Http/Controllers/Admin/ApiKeyController.php:117
* @route '/admin/api/api-keys/{apiKey}'
*/
destroy.url = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { apiKey: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { apiKey: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            apiKey: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        apiKey: typeof args.apiKey === 'object'
        ? args.apiKey.id
        : args.apiKey,
    }

    return destroy.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::destroy
* @see app/Http/Controllers/Admin/ApiKeyController.php:117
* @route '/admin/api/api-keys/{apiKey}'
*/
destroy.delete = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::destroy
* @see app/Http/Controllers/Admin/ApiKeyController.php:117
* @route '/admin/api/api-keys/{apiKey}'
*/
const destroyForm = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ApiKeyController::destroy
* @see app/Http/Controllers/Admin/ApiKeyController.php:117
* @route '/admin/api/api-keys/{apiKey}'
*/
destroyForm.delete = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const apiKeys = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default apiKeys