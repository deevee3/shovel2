import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::index
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:25
* @route '/admin/api/handoff-policies'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/api/handoff-policies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::index
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:25
* @route '/admin/api/handoff-policies'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::index
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:25
* @route '/admin/api/handoff-policies'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::index
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:25
* @route '/admin/api/handoff-policies'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::index
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:25
* @route '/admin/api/handoff-policies'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::index
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:25
* @route '/admin/api/handoff-policies'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::index
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:25
* @route '/admin/api/handoff-policies'
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
* @see \App\Http\Controllers\Admin\HandoffPolicyController::store
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:70
* @route '/admin/api/handoff-policies'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/api/handoff-policies',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::store
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:70
* @route '/admin/api/handoff-policies'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::store
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:70
* @route '/admin/api/handoff-policies'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::store
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:70
* @route '/admin/api/handoff-policies'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::store
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:70
* @route '/admin/api/handoff-policies'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::show
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:96
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
export const show = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/api/handoff-policies/{handoffPolicy}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::show
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:96
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
show.url = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { handoffPolicy: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { handoffPolicy: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            handoffPolicy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        handoffPolicy: typeof args.handoffPolicy === 'object'
        ? args.handoffPolicy.id
        : args.handoffPolicy,
    }

    return show.definition.url
            .replace('{handoffPolicy}', parsedArgs.handoffPolicy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::show
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:96
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
show.get = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::show
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:96
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
show.head = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::show
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:96
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
const showForm = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::show
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:96
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
showForm.get = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::show
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:96
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
showForm.head = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\HandoffPolicyController::update
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:105
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
export const update = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/api/handoff-policies/{handoffPolicy}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::update
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:105
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
update.url = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { handoffPolicy: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { handoffPolicy: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            handoffPolicy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        handoffPolicy: typeof args.handoffPolicy === 'object'
        ? args.handoffPolicy.id
        : args.handoffPolicy,
    }

    return update.definition.url
            .replace('{handoffPolicy}', parsedArgs.handoffPolicy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::update
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:105
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
update.put = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::update
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:105
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
const updateForm = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::update
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:105
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
updateForm.put = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\HandoffPolicyController::destroy
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:142
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
export const destroy = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/api/handoff-policies/{handoffPolicy}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::destroy
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:142
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
destroy.url = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { handoffPolicy: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { handoffPolicy: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            handoffPolicy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        handoffPolicy: typeof args.handoffPolicy === 'object'
        ? args.handoffPolicy.id
        : args.handoffPolicy,
    }

    return destroy.definition.url
            .replace('{handoffPolicy}', parsedArgs.handoffPolicy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::destroy
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:142
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
destroy.delete = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::destroy
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:142
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
const destroyForm = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\HandoffPolicyController::destroy
* @see app/Http/Controllers/Admin/HandoffPolicyController.php:142
* @route '/admin/api/handoff-policies/{handoffPolicy}'
*/
destroyForm.delete = (args: { handoffPolicy: number | { id: number } } | [handoffPolicy: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const handoffPolicies = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default handoffPolicies