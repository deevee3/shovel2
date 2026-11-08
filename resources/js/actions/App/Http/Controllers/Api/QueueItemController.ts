import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\QueueItemController::index
* @see app/Http/Controllers/Api/QueueItemController.php:22
* @route '/api/queues/{queue}/items'
*/
export const index = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/queues/{queue}/items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\QueueItemController::index
* @see app/Http/Controllers/Api/QueueItemController.php:22
* @route '/api/queues/{queue}/items'
*/
index.url = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{queue}', parsedArgs.queue.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QueueItemController::index
* @see app/Http/Controllers/Api/QueueItemController.php:22
* @route '/api/queues/{queue}/items'
*/
index.get = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\QueueItemController::index
* @see app/Http/Controllers/Api/QueueItemController.php:22
* @route '/api/queues/{queue}/items'
*/
index.head = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\QueueItemController::index
* @see app/Http/Controllers/Api/QueueItemController.php:22
* @route '/api/queues/{queue}/items'
*/
const indexForm = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\QueueItemController::index
* @see app/Http/Controllers/Api/QueueItemController.php:22
* @route '/api/queues/{queue}/items'
*/
indexForm.get = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\QueueItemController::index
* @see app/Http/Controllers/Api/QueueItemController.php:22
* @route '/api/queues/{queue}/items'
*/
indexForm.head = (args: { queue: number | { id: number } } | [queue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Api\QueueItemController::claim
* @see app/Http/Controllers/Api/QueueItemController.php:67
* @route '/api/queues/{queue}/items/{queueItem}/claim'
*/
export const claim = (args: { queue: number | { id: number }, queueItem: number | { id: number } } | [queue: number | { id: number }, queueItem: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: claim.url(args, options),
    method: 'post',
})

claim.definition = {
    methods: ["post"],
    url: '/api/queues/{queue}/items/{queueItem}/claim',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\QueueItemController::claim
* @see app/Http/Controllers/Api/QueueItemController.php:67
* @route '/api/queues/{queue}/items/{queueItem}/claim'
*/
claim.url = (args: { queue: number | { id: number }, queueItem: number | { id: number } } | [queue: number | { id: number }, queueItem: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            queue: args[0],
            queueItem: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        queue: typeof args.queue === 'object'
        ? args.queue.id
        : args.queue,
        queueItem: typeof args.queueItem === 'object'
        ? args.queueItem.id
        : args.queueItem,
    }

    return claim.definition.url
            .replace('{queue}', parsedArgs.queue.toString())
            .replace('{queueItem}', parsedArgs.queueItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QueueItemController::claim
* @see app/Http/Controllers/Api/QueueItemController.php:67
* @route '/api/queues/{queue}/items/{queueItem}/claim'
*/
claim.post = (args: { queue: number | { id: number }, queueItem: number | { id: number } } | [queue: number | { id: number }, queueItem: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: claim.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QueueItemController::claim
* @see app/Http/Controllers/Api/QueueItemController.php:67
* @route '/api/queues/{queue}/items/{queueItem}/claim'
*/
const claimForm = (args: { queue: number | { id: number }, queueItem: number | { id: number } } | [queue: number | { id: number }, queueItem: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: claim.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\QueueItemController::claim
* @see app/Http/Controllers/Api/QueueItemController.php:67
* @route '/api/queues/{queue}/items/{queueItem}/claim'
*/
claimForm.post = (args: { queue: number | { id: number }, queueItem: number | { id: number } } | [queue: number | { id: number }, queueItem: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: claim.url(args, options),
    method: 'post',
})

claim.form = claimForm

const QueueItemController = { index, claim }

export default QueueItemController