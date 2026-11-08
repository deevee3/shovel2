import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\QueueController::index
* @see app/Http/Controllers/Admin/QueueController.php:23
* @route '/admin/api/queues'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/api/queues',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\QueueController::index
* @see app/Http/Controllers/Admin/QueueController.php:23
* @route '/admin/api/queues'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QueueController::index
* @see app/Http/Controllers/Admin/QueueController.php:23
* @route '/admin/api/queues'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::index
* @see app/Http/Controllers/Admin/QueueController.php:23
* @route '/admin/api/queues'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::index
* @see app/Http/Controllers/Admin/QueueController.php:23
* @route '/admin/api/queues'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::index
* @see app/Http/Controllers/Admin/QueueController.php:23
* @route '/admin/api/queues'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::index
* @see app/Http/Controllers/Admin/QueueController.php:23
* @route '/admin/api/queues'
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
* @see \App\Http\Controllers\Admin\QueueController::all
* @see app/Http/Controllers/Admin/QueueController.php:59
* @route '/admin/api/queues/all'
*/
export const all = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})

all.definition = {
    methods: ["get","head"],
    url: '/admin/api/queues/all',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\QueueController::all
* @see app/Http/Controllers/Admin/QueueController.php:59
* @route '/admin/api/queues/all'
*/
all.url = (options?: RouteQueryOptions) => {
    return all.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QueueController::all
* @see app/Http/Controllers/Admin/QueueController.php:59
* @route '/admin/api/queues/all'
*/
all.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::all
* @see app/Http/Controllers/Admin/QueueController.php:59
* @route '/admin/api/queues/all'
*/
all.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: all.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::all
* @see app/Http/Controllers/Admin/QueueController.php:59
* @route '/admin/api/queues/all'
*/
const allForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: all.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::all
* @see app/Http/Controllers/Admin/QueueController.php:59
* @route '/admin/api/queues/all'
*/
allForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: all.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::all
* @see app/Http/Controllers/Admin/QueueController.php:59
* @route '/admin/api/queues/all'
*/
allForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: all.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

all.form = allForm

/**
* @see \App\Http\Controllers\Admin\QueueController::store
* @see app/Http/Controllers/Admin/QueueController.php:70
* @route '/admin/api/queues'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/api/queues',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\QueueController::store
* @see app/Http/Controllers/Admin/QueueController.php:70
* @route '/admin/api/queues'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QueueController::store
* @see app/Http/Controllers/Admin/QueueController.php:70
* @route '/admin/api/queues'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::store
* @see app/Http/Controllers/Admin/QueueController.php:70
* @route '/admin/api/queues'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::store
* @see app/Http/Controllers/Admin/QueueController.php:70
* @route '/admin/api/queues'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\QueueController::show
* @see app/Http/Controllers/Admin/QueueController.php:116
* @route '/admin/api/queues/{queue}'
*/
export const show = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/api/queues/{queue}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\QueueController::show
* @see app/Http/Controllers/Admin/QueueController.php:116
* @route '/admin/api/queues/{queue}'
*/
show.url = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { queue: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { queue: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            queue: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        queue: typeof args.queue === 'object'
        ? args.queue.id
        : args.queue,
    }

    return show.definition.url
            .replace('{queue}', parsedArgs.queue.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QueueController::show
* @see app/Http/Controllers/Admin/QueueController.php:116
* @route '/admin/api/queues/{queue}'
*/
show.get = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::show
* @see app/Http/Controllers/Admin/QueueController.php:116
* @route '/admin/api/queues/{queue}'
*/
show.head = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::show
* @see app/Http/Controllers/Admin/QueueController.php:116
* @route '/admin/api/queues/{queue}'
*/
const showForm = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::show
* @see app/Http/Controllers/Admin/QueueController.php:116
* @route '/admin/api/queues/{queue}'
*/
showForm.get = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::show
* @see app/Http/Controllers/Admin/QueueController.php:116
* @route '/admin/api/queues/{queue}'
*/
showForm.head = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\QueueController::update
* @see app/Http/Controllers/Admin/QueueController.php:123
* @route '/admin/api/queues/{queue}'
*/
export const update = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/api/queues/{queue}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\QueueController::update
* @see app/Http/Controllers/Admin/QueueController.php:123
* @route '/admin/api/queues/{queue}'
*/
update.url = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { queue: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { queue: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            queue: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        queue: typeof args.queue === 'object'
        ? args.queue.id
        : args.queue,
    }

    return update.definition.url
            .replace('{queue}', parsedArgs.queue.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QueueController::update
* @see app/Http/Controllers/Admin/QueueController.php:123
* @route '/admin/api/queues/{queue}'
*/
update.put = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::update
* @see app/Http/Controllers/Admin/QueueController.php:123
* @route '/admin/api/queues/{queue}'
*/
const updateForm = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::update
* @see app/Http/Controllers/Admin/QueueController.php:123
* @route '/admin/api/queues/{queue}'
*/
updateForm.put = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\QueueController::destroy
* @see app/Http/Controllers/Admin/QueueController.php:206
* @route '/admin/api/queues/{queue}'
*/
export const destroy = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/api/queues/{queue}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\QueueController::destroy
* @see app/Http/Controllers/Admin/QueueController.php:206
* @route '/admin/api/queues/{queue}'
*/
destroy.url = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { queue: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { queue: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            queue: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        queue: typeof args.queue === 'object'
        ? args.queue.id
        : args.queue,
    }

    return destroy.definition.url
            .replace('{queue}', parsedArgs.queue.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QueueController::destroy
* @see app/Http/Controllers/Admin/QueueController.php:206
* @route '/admin/api/queues/{queue}'
*/
destroy.delete = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::destroy
* @see app/Http/Controllers/Admin/QueueController.php:206
* @route '/admin/api/queues/{queue}'
*/
const destroyForm = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::destroy
* @see app/Http/Controllers/Admin/QueueController.php:206
* @route '/admin/api/queues/{queue}'
*/
destroyForm.delete = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\QueueController::assignUsers
* @see app/Http/Controllers/Admin/QueueController.php:224
* @route '/admin/api/queues/{queue}/users'
*/
export const assignUsers = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignUsers.url(args, options),
    method: 'post',
})

assignUsers.definition = {
    methods: ["post"],
    url: '/admin/api/queues/{queue}/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\QueueController::assignUsers
* @see app/Http/Controllers/Admin/QueueController.php:224
* @route '/admin/api/queues/{queue}/users'
*/
assignUsers.url = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { queue: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { queue: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            queue: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        queue: typeof args.queue === 'object'
        ? args.queue.id
        : args.queue,
    }

    return assignUsers.definition.url
            .replace('{queue}', parsedArgs.queue.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QueueController::assignUsers
* @see app/Http/Controllers/Admin/QueueController.php:224
* @route '/admin/api/queues/{queue}/users'
*/
assignUsers.post = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignUsers.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::assignUsers
* @see app/Http/Controllers/Admin/QueueController.php:224
* @route '/admin/api/queues/{queue}/users'
*/
const assignUsersForm = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assignUsers.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::assignUsers
* @see app/Http/Controllers/Admin/QueueController.php:224
* @route '/admin/api/queues/{queue}/users'
*/
assignUsersForm.post = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assignUsers.url(args, options),
    method: 'post',
})

assignUsers.form = assignUsersForm

/**
* @see \App\Http\Controllers\Admin\QueueController::unassignUser
* @see app/Http/Controllers/Admin/QueueController.php:249
* @route '/admin/api/queues/{queue}/users/{userId}'
*/
export const unassignUser = (args: { queue: number | { id: number }, userId: string | number } | [queue: number | { id: number }, userId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: unassignUser.url(args, options),
    method: 'delete',
})

unassignUser.definition = {
    methods: ["delete"],
    url: '/admin/api/queues/{queue}/users/{userId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\QueueController::unassignUser
* @see app/Http/Controllers/Admin/QueueController.php:249
* @route '/admin/api/queues/{queue}/users/{userId}'
*/
unassignUser.url = (args: { queue: number | { id: number }, userId: string | number } | [queue: number | { id: number }, userId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            queue: args[0],
            userId: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        queue: typeof args.queue === 'object'
        ? args.queue.id
        : args.queue,
        userId: args.userId,
    }

    return unassignUser.definition.url
            .replace('{queue}', parsedArgs.queue.toString())
            .replace('{userId}', parsedArgs.userId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QueueController::unassignUser
* @see app/Http/Controllers/Admin/QueueController.php:249
* @route '/admin/api/queues/{queue}/users/{userId}'
*/
unassignUser.delete = (args: { queue: number | { id: number }, userId: string | number } | [queue: number | { id: number }, userId: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: unassignUser.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::unassignUser
* @see app/Http/Controllers/Admin/QueueController.php:249
* @route '/admin/api/queues/{queue}/users/{userId}'
*/
const unassignUserForm = (args: { queue: number | { id: number }, userId: string | number } | [queue: number | { id: number }, userId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unassignUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\QueueController::unassignUser
* @see app/Http/Controllers/Admin/QueueController.php:249
* @route '/admin/api/queues/{queue}/users/{userId}'
*/
unassignUserForm.delete = (args: { queue: number | { id: number }, userId: string | number } | [queue: number | { id: number }, userId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unassignUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

unassignUser.form = unassignUserForm

const queues = {
    index: Object.assign(index, index),
    all: Object.assign(all, all),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    assignUsers: Object.assign(assignUsers, assignUsers),
    unassignUser: Object.assign(unassignUser, unassignUser),
}

export default queues