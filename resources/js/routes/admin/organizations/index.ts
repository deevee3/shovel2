import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import invitations from './invitations'
import members from './members'
/**
* @see \App\Http\Controllers\Admin\OrganizationController::index
* @see app/Http/Controllers/Admin/OrganizationController.php:27
* @route '/admin/organization'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/organization',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\OrganizationController::index
* @see app/Http/Controllers/Admin/OrganizationController.php:27
* @route '/admin/organization'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\OrganizationController::index
* @see app/Http/Controllers/Admin/OrganizationController.php:27
* @route '/admin/organization'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::index
* @see app/Http/Controllers/Admin/OrganizationController.php:27
* @route '/admin/organization'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::index
* @see app/Http/Controllers/Admin/OrganizationController.php:27
* @route '/admin/organization'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::index
* @see app/Http/Controllers/Admin/OrganizationController.php:27
* @route '/admin/organization'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::index
* @see app/Http/Controllers/Admin/OrganizationController.php:27
* @route '/admin/organization'
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
* @see \App\Http\Controllers\Admin\OrganizationController::create
* @see app/Http/Controllers/Admin/OrganizationController.php:56
* @route '/admin/organization/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/organization/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\OrganizationController::create
* @see app/Http/Controllers/Admin/OrganizationController.php:56
* @route '/admin/organization/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\OrganizationController::create
* @see app/Http/Controllers/Admin/OrganizationController.php:56
* @route '/admin/organization/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::create
* @see app/Http/Controllers/Admin/OrganizationController.php:56
* @route '/admin/organization/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::create
* @see app/Http/Controllers/Admin/OrganizationController.php:56
* @route '/admin/organization/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::create
* @see app/Http/Controllers/Admin/OrganizationController.php:56
* @route '/admin/organization/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::create
* @see app/Http/Controllers/Admin/OrganizationController.php:56
* @route '/admin/organization/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Admin\OrganizationController::store
* @see app/Http/Controllers/Admin/OrganizationController.php:64
* @route '/admin/organization'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/organization',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\OrganizationController::store
* @see app/Http/Controllers/Admin/OrganizationController.php:64
* @route '/admin/organization'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\OrganizationController::store
* @see app/Http/Controllers/Admin/OrganizationController.php:64
* @route '/admin/organization'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::store
* @see app/Http/Controllers/Admin/OrganizationController.php:64
* @route '/admin/organization'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::store
* @see app/Http/Controllers/Admin/OrganizationController.php:64
* @route '/admin/organization'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\OrganizationController::update
* @see app/Http/Controllers/Admin/OrganizationController.php:80
* @route '/admin/organization'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/organization',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\OrganizationController::update
* @see app/Http/Controllers/Admin/OrganizationController.php:80
* @route '/admin/organization'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\OrganizationController::update
* @see app/Http/Controllers/Admin/OrganizationController.php:80
* @route '/admin/organization'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::update
* @see app/Http/Controllers/Admin/OrganizationController.php:80
* @route '/admin/organization'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::update
* @see app/Http/Controllers/Admin/OrganizationController.php:80
* @route '/admin/organization'
*/
updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\OrganizationController::invite
* @see app/Http/Controllers/Admin/OrganizationController.php:102
* @route '/admin/organization/invite'
*/
export const invite = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: invite.url(options),
    method: 'post',
})

invite.definition = {
    methods: ["post"],
    url: '/admin/organization/invite',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\OrganizationController::invite
* @see app/Http/Controllers/Admin/OrganizationController.php:102
* @route '/admin/organization/invite'
*/
invite.url = (options?: RouteQueryOptions) => {
    return invite.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\OrganizationController::invite
* @see app/Http/Controllers/Admin/OrganizationController.php:102
* @route '/admin/organization/invite'
*/
invite.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: invite.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::invite
* @see app/Http/Controllers/Admin/OrganizationController.php:102
* @route '/admin/organization/invite'
*/
const inviteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: invite.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::invite
* @see app/Http/Controllers/Admin/OrganizationController.php:102
* @route '/admin/organization/invite'
*/
inviteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: invite.url(options),
    method: 'post',
})

invite.form = inviteForm

/**
* @see \App\Http\Controllers\Admin\OrganizationController::switchMethod
* @see app/Http/Controllers/Admin/OrganizationController.php:203
* @route '/admin/organization/switch/{organization}'
*/
export const switchMethod = (args: { organization: number | { id: number } } | [organization: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchMethod.url(args, options),
    method: 'post',
})

switchMethod.definition = {
    methods: ["post"],
    url: '/admin/organization/switch/{organization}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\OrganizationController::switchMethod
* @see app/Http/Controllers/Admin/OrganizationController.php:203
* @route '/admin/organization/switch/{organization}'
*/
switchMethod.url = (args: { organization: number | { id: number } } | [organization: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { organization: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { organization: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            organization: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        organization: typeof args.organization === 'object'
        ? args.organization.id
        : args.organization,
    }

    return switchMethod.definition.url
            .replace('{organization}', parsedArgs.organization.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\OrganizationController::switchMethod
* @see app/Http/Controllers/Admin/OrganizationController.php:203
* @route '/admin/organization/switch/{organization}'
*/
switchMethod.post = (args: { organization: number | { id: number } } | [organization: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchMethod.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::switchMethod
* @see app/Http/Controllers/Admin/OrganizationController.php:203
* @route '/admin/organization/switch/{organization}'
*/
const switchMethodForm = (args: { organization: number | { id: number } } | [organization: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: switchMethod.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\OrganizationController::switchMethod
* @see app/Http/Controllers/Admin/OrganizationController.php:203
* @route '/admin/organization/switch/{organization}'
*/
switchMethodForm.post = (args: { organization: number | { id: number } } | [organization: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: switchMethod.url(args, options),
    method: 'post',
})

switchMethod.form = switchMethodForm

const organizations = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    invite: Object.assign(invite, invite),
    invitations: Object.assign(invitations, invitations),
    members: Object.assign(members, members),
    switch: Object.assign(switchMethod, switchMethod),
}

export default organizations