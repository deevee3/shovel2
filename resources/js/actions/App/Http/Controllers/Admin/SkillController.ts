import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SkillController::showProfile
* @see app/Http/Controllers/Admin/SkillController.php:135
* @route '/admin/skills/{skill}'
*/
export const showProfile = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showProfile.url(args, options),
    method: 'get',
})

showProfile.definition = {
    methods: ["get","head"],
    url: '/admin/skills/{skill}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::showProfile
* @see app/Http/Controllers/Admin/SkillController.php:135
* @route '/admin/skills/{skill}'
*/
showProfile.url = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { skill: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            skill: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        skill: typeof args.skill === 'object'
        ? args.skill.id
        : args.skill,
    }

    return showProfile.definition.url
            .replace('{skill}', parsedArgs.skill.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::showProfile
* @see app/Http/Controllers/Admin/SkillController.php:135
* @route '/admin/skills/{skill}'
*/
showProfile.get = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showProfile.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::showProfile
* @see app/Http/Controllers/Admin/SkillController.php:135
* @route '/admin/skills/{skill}'
*/
showProfile.head = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showProfile.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::showProfile
* @see app/Http/Controllers/Admin/SkillController.php:135
* @route '/admin/skills/{skill}'
*/
const showProfileForm = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showProfile.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::showProfile
* @see app/Http/Controllers/Admin/SkillController.php:135
* @route '/admin/skills/{skill}'
*/
showProfileForm.get = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showProfile.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::showProfile
* @see app/Http/Controllers/Admin/SkillController.php:135
* @route '/admin/skills/{skill}'
*/
showProfileForm.head = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showProfile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showProfile.form = showProfileForm

/**
* @see \App\Http\Controllers\Admin\SkillController::index
* @see app/Http/Controllers/Admin/SkillController.php:24
* @route '/admin/api/skills'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/api/skills',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::index
* @see app/Http/Controllers/Admin/SkillController.php:24
* @route '/admin/api/skills'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::index
* @see app/Http/Controllers/Admin/SkillController.php:24
* @route '/admin/api/skills'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::index
* @see app/Http/Controllers/Admin/SkillController.php:24
* @route '/admin/api/skills'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::index
* @see app/Http/Controllers/Admin/SkillController.php:24
* @route '/admin/api/skills'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::index
* @see app/Http/Controllers/Admin/SkillController.php:24
* @route '/admin/api/skills'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::index
* @see app/Http/Controllers/Admin/SkillController.php:24
* @route '/admin/api/skills'
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
* @see \App\Http\Controllers\Admin\SkillController::all
* @see app/Http/Controllers/Admin/SkillController.php:60
* @route '/admin/api/skills/all'
*/
export const all = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})

all.definition = {
    methods: ["get","head"],
    url: '/admin/api/skills/all',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::all
* @see app/Http/Controllers/Admin/SkillController.php:60
* @route '/admin/api/skills/all'
*/
all.url = (options?: RouteQueryOptions) => {
    return all.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::all
* @see app/Http/Controllers/Admin/SkillController.php:60
* @route '/admin/api/skills/all'
*/
all.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::all
* @see app/Http/Controllers/Admin/SkillController.php:60
* @route '/admin/api/skills/all'
*/
all.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: all.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::all
* @see app/Http/Controllers/Admin/SkillController.php:60
* @route '/admin/api/skills/all'
*/
const allForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: all.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::all
* @see app/Http/Controllers/Admin/SkillController.php:60
* @route '/admin/api/skills/all'
*/
allForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: all.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::all
* @see app/Http/Controllers/Admin/SkillController.php:60
* @route '/admin/api/skills/all'
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
* @see \App\Http\Controllers\Admin\SkillController::store
* @see app/Http/Controllers/Admin/SkillController.php:71
* @route '/admin/api/skills'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/api/skills',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::store
* @see app/Http/Controllers/Admin/SkillController.php:71
* @route '/admin/api/skills'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::store
* @see app/Http/Controllers/Admin/SkillController.php:71
* @route '/admin/api/skills'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::store
* @see app/Http/Controllers/Admin/SkillController.php:71
* @route '/admin/api/skills'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::store
* @see app/Http/Controllers/Admin/SkillController.php:71
* @route '/admin/api/skills'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\SkillController::show
* @see app/Http/Controllers/Admin/SkillController.php:96
* @route '/admin/api/skills/{skill}'
*/
export const show = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/api/skills/{skill}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::show
* @see app/Http/Controllers/Admin/SkillController.php:96
* @route '/admin/api/skills/{skill}'
*/
show.url = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { skill: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            skill: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        skill: typeof args.skill === 'object'
        ? args.skill.id
        : args.skill,
    }

    return show.definition.url
            .replace('{skill}', parsedArgs.skill.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::show
* @see app/Http/Controllers/Admin/SkillController.php:96
* @route '/admin/api/skills/{skill}'
*/
show.get = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::show
* @see app/Http/Controllers/Admin/SkillController.php:96
* @route '/admin/api/skills/{skill}'
*/
show.head = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::show
* @see app/Http/Controllers/Admin/SkillController.php:96
* @route '/admin/api/skills/{skill}'
*/
const showForm = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::show
* @see app/Http/Controllers/Admin/SkillController.php:96
* @route '/admin/api/skills/{skill}'
*/
showForm.get = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::show
* @see app/Http/Controllers/Admin/SkillController.php:96
* @route '/admin/api/skills/{skill}'
*/
showForm.head = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\SkillController::update
* @see app/Http/Controllers/Admin/SkillController.php:103
* @route '/admin/api/skills/{skill}'
*/
export const update = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/api/skills/{skill}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::update
* @see app/Http/Controllers/Admin/SkillController.php:103
* @route '/admin/api/skills/{skill}'
*/
update.url = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { skill: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            skill: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        skill: typeof args.skill === 'object'
        ? args.skill.id
        : args.skill,
    }

    return update.definition.url
            .replace('{skill}', parsedArgs.skill.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::update
* @see app/Http/Controllers/Admin/SkillController.php:103
* @route '/admin/api/skills/{skill}'
*/
update.put = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::update
* @see app/Http/Controllers/Admin/SkillController.php:103
* @route '/admin/api/skills/{skill}'
*/
const updateForm = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::update
* @see app/Http/Controllers/Admin/SkillController.php:103
* @route '/admin/api/skills/{skill}'
*/
updateForm.put = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\SkillController::destroy
* @see app/Http/Controllers/Admin/SkillController.php:144
* @route '/admin/api/skills/{skill}'
*/
export const destroy = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/api/skills/{skill}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\SkillController::destroy
* @see app/Http/Controllers/Admin/SkillController.php:144
* @route '/admin/api/skills/{skill}'
*/
destroy.url = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { skill: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { skill: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            skill: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        skill: typeof args.skill === 'object'
        ? args.skill.id
        : args.skill,
    }

    return destroy.definition.url
            .replace('{skill}', parsedArgs.skill.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SkillController::destroy
* @see app/Http/Controllers/Admin/SkillController.php:144
* @route '/admin/api/skills/{skill}'
*/
destroy.delete = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::destroy
* @see app/Http/Controllers/Admin/SkillController.php:144
* @route '/admin/api/skills/{skill}'
*/
const destroyForm = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SkillController::destroy
* @see app/Http/Controllers/Admin/SkillController.php:144
* @route '/admin/api/skills/{skill}'
*/
destroyForm.delete = (args: { skill: number | { id: number } } | [skill: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const SkillController = { showProfile, index, all, store, show, update, destroy }

export default SkillController