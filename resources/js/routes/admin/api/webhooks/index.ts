import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\WebhookController::index
* @see app/Http/Controllers/Admin/WebhookController.php:30
* @route '/admin/api/webhooks'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/api/webhooks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\WebhookController::index
* @see app/Http/Controllers/Admin/WebhookController.php:30
* @route '/admin/api/webhooks'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\WebhookController::index
* @see app/Http/Controllers/Admin/WebhookController.php:30
* @route '/admin/api/webhooks'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::index
* @see app/Http/Controllers/Admin/WebhookController.php:30
* @route '/admin/api/webhooks'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::index
* @see app/Http/Controllers/Admin/WebhookController.php:30
* @route '/admin/api/webhooks'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::index
* @see app/Http/Controllers/Admin/WebhookController.php:30
* @route '/admin/api/webhooks'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::index
* @see app/Http/Controllers/Admin/WebhookController.php:30
* @route '/admin/api/webhooks'
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
* @see \App\Http\Controllers\Admin\WebhookController::store
* @see app/Http/Controllers/Admin/WebhookController.php:78
* @route '/admin/api/webhooks'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/api/webhooks',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\WebhookController::store
* @see app/Http/Controllers/Admin/WebhookController.php:78
* @route '/admin/api/webhooks'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\WebhookController::store
* @see app/Http/Controllers/Admin/WebhookController.php:78
* @route '/admin/api/webhooks'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::store
* @see app/Http/Controllers/Admin/WebhookController.php:78
* @route '/admin/api/webhooks'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::store
* @see app/Http/Controllers/Admin/WebhookController.php:78
* @route '/admin/api/webhooks'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\WebhookController::show
* @see app/Http/Controllers/Admin/WebhookController.php:112
* @route '/admin/api/webhooks/{webhook}'
*/
export const show = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/api/webhooks/{webhook}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\WebhookController::show
* @see app/Http/Controllers/Admin/WebhookController.php:112
* @route '/admin/api/webhooks/{webhook}'
*/
show.url = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { webhook: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { webhook: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            webhook: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        webhook: typeof args.webhook === 'object'
        ? args.webhook.id
        : args.webhook,
    }

    return show.definition.url
            .replace('{webhook}', parsedArgs.webhook.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\WebhookController::show
* @see app/Http/Controllers/Admin/WebhookController.php:112
* @route '/admin/api/webhooks/{webhook}'
*/
show.get = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::show
* @see app/Http/Controllers/Admin/WebhookController.php:112
* @route '/admin/api/webhooks/{webhook}'
*/
show.head = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::show
* @see app/Http/Controllers/Admin/WebhookController.php:112
* @route '/admin/api/webhooks/{webhook}'
*/
const showForm = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::show
* @see app/Http/Controllers/Admin/WebhookController.php:112
* @route '/admin/api/webhooks/{webhook}'
*/
showForm.get = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::show
* @see app/Http/Controllers/Admin/WebhookController.php:112
* @route '/admin/api/webhooks/{webhook}'
*/
showForm.head = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Admin\WebhookController::update
* @see app/Http/Controllers/Admin/WebhookController.php:119
* @route '/admin/api/webhooks/{webhook}'
*/
export const update = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/api/webhooks/{webhook}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\WebhookController::update
* @see app/Http/Controllers/Admin/WebhookController.php:119
* @route '/admin/api/webhooks/{webhook}'
*/
update.url = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { webhook: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { webhook: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            webhook: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        webhook: typeof args.webhook === 'object'
        ? args.webhook.id
        : args.webhook,
    }

    return update.definition.url
            .replace('{webhook}', parsedArgs.webhook.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\WebhookController::update
* @see app/Http/Controllers/Admin/WebhookController.php:119
* @route '/admin/api/webhooks/{webhook}'
*/
update.put = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::update
* @see app/Http/Controllers/Admin/WebhookController.php:119
* @route '/admin/api/webhooks/{webhook}'
*/
const updateForm = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::update
* @see app/Http/Controllers/Admin/WebhookController.php:119
* @route '/admin/api/webhooks/{webhook}'
*/
updateForm.put = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\WebhookController::destroy
* @see app/Http/Controllers/Admin/WebhookController.php:176
* @route '/admin/api/webhooks/{webhook}'
*/
export const destroy = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/api/webhooks/{webhook}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\WebhookController::destroy
* @see app/Http/Controllers/Admin/WebhookController.php:176
* @route '/admin/api/webhooks/{webhook}'
*/
destroy.url = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { webhook: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { webhook: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            webhook: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        webhook: typeof args.webhook === 'object'
        ? args.webhook.id
        : args.webhook,
    }

    return destroy.definition.url
            .replace('{webhook}', parsedArgs.webhook.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\WebhookController::destroy
* @see app/Http/Controllers/Admin/WebhookController.php:176
* @route '/admin/api/webhooks/{webhook}'
*/
destroy.delete = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::destroy
* @see app/Http/Controllers/Admin/WebhookController.php:176
* @route '/admin/api/webhooks/{webhook}'
*/
const destroyForm = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::destroy
* @see app/Http/Controllers/Admin/WebhookController.php:176
* @route '/admin/api/webhooks/{webhook}'
*/
destroyForm.delete = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Admin\WebhookController::test
* @see app/Http/Controllers/Admin/WebhookController.php:187
* @route '/admin/api/webhooks/{webhook}/test'
*/
export const test = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(args, options),
    method: 'post',
})

test.definition = {
    methods: ["post"],
    url: '/admin/api/webhooks/{webhook}/test',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\WebhookController::test
* @see app/Http/Controllers/Admin/WebhookController.php:187
* @route '/admin/api/webhooks/{webhook}/test'
*/
test.url = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { webhook: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { webhook: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            webhook: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        webhook: typeof args.webhook === 'object'
        ? args.webhook.id
        : args.webhook,
    }

    return test.definition.url
            .replace('{webhook}', parsedArgs.webhook.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\WebhookController::test
* @see app/Http/Controllers/Admin/WebhookController.php:187
* @route '/admin/api/webhooks/{webhook}/test'
*/
test.post = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::test
* @see app/Http/Controllers/Admin/WebhookController.php:187
* @route '/admin/api/webhooks/{webhook}/test'
*/
const testForm = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: test.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\WebhookController::test
* @see app/Http/Controllers/Admin/WebhookController.php:187
* @route '/admin/api/webhooks/{webhook}/test'
*/
testForm.post = (args: { webhook: number | { id: number } } | [webhook: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: test.url(args, options),
    method: 'post',
})

test.form = testForm

const webhooks = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    test: Object.assign(test, test),
}

export default webhooks