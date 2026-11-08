import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\AssignmentController::accept
* @see app/Http/Controllers/Api/AssignmentController.php:23
* @route '/api/assignments/{assignment}/accept'
*/
export const accept = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: accept.url(args, options),
    method: 'post',
})

accept.definition = {
    methods: ["post"],
    url: '/api/assignments/{assignment}/accept',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\AssignmentController::accept
* @see app/Http/Controllers/Api/AssignmentController.php:23
* @route '/api/assignments/{assignment}/accept'
*/
accept.url = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assignment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { assignment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            assignment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        assignment: typeof args.assignment === 'object'
        ? args.assignment.id
        : args.assignment,
    }

    return accept.definition.url
            .replace('{assignment}', parsedArgs.assignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AssignmentController::accept
* @see app/Http/Controllers/Api/AssignmentController.php:23
* @route '/api/assignments/{assignment}/accept'
*/
accept.post = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: accept.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AssignmentController::accept
* @see app/Http/Controllers/Api/AssignmentController.php:23
* @route '/api/assignments/{assignment}/accept'
*/
const acceptForm = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: accept.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AssignmentController::accept
* @see app/Http/Controllers/Api/AssignmentController.php:23
* @route '/api/assignments/{assignment}/accept'
*/
acceptForm.post = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: accept.url(args, options),
    method: 'post',
})

accept.form = acceptForm

/**
* @see \App\Http\Controllers\Api\AssignmentController::release
* @see app/Http/Controllers/Api/AssignmentController.php:61
* @route '/api/assignments/{assignment}/release'
*/
export const release = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: release.url(args, options),
    method: 'post',
})

release.definition = {
    methods: ["post"],
    url: '/api/assignments/{assignment}/release',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\AssignmentController::release
* @see app/Http/Controllers/Api/AssignmentController.php:61
* @route '/api/assignments/{assignment}/release'
*/
release.url = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assignment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { assignment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            assignment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        assignment: typeof args.assignment === 'object'
        ? args.assignment.id
        : args.assignment,
    }

    return release.definition.url
            .replace('{assignment}', parsedArgs.assignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AssignmentController::release
* @see app/Http/Controllers/Api/AssignmentController.php:61
* @route '/api/assignments/{assignment}/release'
*/
release.post = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: release.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AssignmentController::release
* @see app/Http/Controllers/Api/AssignmentController.php:61
* @route '/api/assignments/{assignment}/release'
*/
const releaseForm = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: release.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AssignmentController::release
* @see app/Http/Controllers/Api/AssignmentController.php:61
* @route '/api/assignments/{assignment}/release'
*/
releaseForm.post = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: release.url(args, options),
    method: 'post',
})

release.form = releaseForm

/**
* @see \App\Http\Controllers\Api\AssignmentController::resolve
* @see app/Http/Controllers/Api/AssignmentController.php:109
* @route '/api/assignments/{assignment}/resolve'
*/
export const resolve = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

resolve.definition = {
    methods: ["post"],
    url: '/api/assignments/{assignment}/resolve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\AssignmentController::resolve
* @see app/Http/Controllers/Api/AssignmentController.php:109
* @route '/api/assignments/{assignment}/resolve'
*/
resolve.url = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assignment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { assignment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            assignment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        assignment: typeof args.assignment === 'object'
        ? args.assignment.id
        : args.assignment,
    }

    return resolve.definition.url
            .replace('{assignment}', parsedArgs.assignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AssignmentController::resolve
* @see app/Http/Controllers/Api/AssignmentController.php:109
* @route '/api/assignments/{assignment}/resolve'
*/
resolve.post = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AssignmentController::resolve
* @see app/Http/Controllers/Api/AssignmentController.php:109
* @route '/api/assignments/{assignment}/resolve'
*/
const resolveForm = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resolve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AssignmentController::resolve
* @see app/Http/Controllers/Api/AssignmentController.php:109
* @route '/api/assignments/{assignment}/resolve'
*/
resolveForm.post = (args: { assignment: number | { id: number } } | [assignment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resolve.url(args, options),
    method: 'post',
})

resolve.form = resolveForm

/**
* @see \App\Http\Controllers\Api\AssignmentController::reclaim
* @see app/Http/Controllers/Api/AssignmentController.php:164
* @route '/api/conversations/{conversation}/reclaim'
*/
export const reclaim = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reclaim.url(args, options),
    method: 'post',
})

reclaim.definition = {
    methods: ["post"],
    url: '/api/conversations/{conversation}/reclaim',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\AssignmentController::reclaim
* @see app/Http/Controllers/Api/AssignmentController.php:164
* @route '/api/conversations/{conversation}/reclaim'
*/
reclaim.url = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return reclaim.definition.url
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AssignmentController::reclaim
* @see app/Http/Controllers/Api/AssignmentController.php:164
* @route '/api/conversations/{conversation}/reclaim'
*/
reclaim.post = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reclaim.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AssignmentController::reclaim
* @see app/Http/Controllers/Api/AssignmentController.php:164
* @route '/api/conversations/{conversation}/reclaim'
*/
const reclaimForm = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reclaim.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AssignmentController::reclaim
* @see app/Http/Controllers/Api/AssignmentController.php:164
* @route '/api/conversations/{conversation}/reclaim'
*/
reclaimForm.post = (args: { conversation: number | { id: number } } | [conversation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reclaim.url(args, options),
    method: 'post',
})

reclaim.form = reclaimForm

const AssignmentController = { accept, release, resolve, reclaim }

export default AssignmentController