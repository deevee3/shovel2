import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\KbArticleController::index
* @see app/Http/Controllers/Admin/KbArticleController.php:18
* @route '/admin/kb'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/kb',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\KbArticleController::index
* @see app/Http/Controllers/Admin/KbArticleController.php:18
* @route '/admin/kb'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KbArticleController::index
* @see app/Http/Controllers/Admin/KbArticleController.php:18
* @route '/admin/kb'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::index
* @see app/Http/Controllers/Admin/KbArticleController.php:18
* @route '/admin/kb'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::index
* @see app/Http/Controllers/Admin/KbArticleController.php:18
* @route '/admin/kb'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::index
* @see app/Http/Controllers/Admin/KbArticleController.php:18
* @route '/admin/kb'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::index
* @see app/Http/Controllers/Admin/KbArticleController.php:18
* @route '/admin/kb'
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
* @see \App\Http\Controllers\Admin\KbArticleController::store
* @see app/Http/Controllers/Admin/KbArticleController.php:41
* @route '/admin/kb'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/kb',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\KbArticleController::store
* @see app/Http/Controllers/Admin/KbArticleController.php:41
* @route '/admin/kb'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KbArticleController::store
* @see app/Http/Controllers/Admin/KbArticleController.php:41
* @route '/admin/kb'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::store
* @see app/Http/Controllers/Admin/KbArticleController.php:41
* @route '/admin/kb'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::store
* @see app/Http/Controllers/Admin/KbArticleController.php:41
* @route '/admin/kb'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\KbArticleController::update
* @see app/Http/Controllers/Admin/KbArticleController.php:61
* @route '/admin/kb/{kb_article}'
*/
export const update = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/kb/{kb_article}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\KbArticleController::update
* @see app/Http/Controllers/Admin/KbArticleController.php:61
* @route '/admin/kb/{kb_article}'
*/
update.url = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kb_article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kb_article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kb_article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kb_article: typeof args.kb_article === 'object'
        ? args.kb_article.id
        : args.kb_article,
    }

    return update.definition.url
            .replace('{kb_article}', parsedArgs.kb_article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KbArticleController::update
* @see app/Http/Controllers/Admin/KbArticleController.php:61
* @route '/admin/kb/{kb_article}'
*/
update.put = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::update
* @see app/Http/Controllers/Admin/KbArticleController.php:61
* @route '/admin/kb/{kb_article}'
*/
const updateForm = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::update
* @see app/Http/Controllers/Admin/KbArticleController.php:61
* @route '/admin/kb/{kb_article}'
*/
updateForm.put = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\KbArticleController::destroy
* @see app/Http/Controllers/Admin/KbArticleController.php:82
* @route '/admin/kb/{kb_article}'
*/
export const destroy = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/kb/{kb_article}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\KbArticleController::destroy
* @see app/Http/Controllers/Admin/KbArticleController.php:82
* @route '/admin/kb/{kb_article}'
*/
destroy.url = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kb_article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kb_article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kb_article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kb_article: typeof args.kb_article === 'object'
        ? args.kb_article.id
        : args.kb_article,
    }

    return destroy.definition.url
            .replace('{kb_article}', parsedArgs.kb_article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KbArticleController::destroy
* @see app/Http/Controllers/Admin/KbArticleController.php:82
* @route '/admin/kb/{kb_article}'
*/
destroy.delete = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::destroy
* @see app/Http/Controllers/Admin/KbArticleController.php:82
* @route '/admin/kb/{kb_article}'
*/
const destroyForm = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::destroy
* @see app/Http/Controllers/Admin/KbArticleController.php:82
* @route '/admin/kb/{kb_article}'
*/
destroyForm.delete = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\KbArticleController::reindex
* @see app/Http/Controllers/Admin/KbArticleController.php:92
* @route '/admin/kb/{kb_article}/reindex'
*/
export const reindex = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reindex.url(args, options),
    method: 'post',
})

reindex.definition = {
    methods: ["post"],
    url: '/admin/kb/{kb_article}/reindex',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\KbArticleController::reindex
* @see app/Http/Controllers/Admin/KbArticleController.php:92
* @route '/admin/kb/{kb_article}/reindex'
*/
reindex.url = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kb_article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { kb_article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            kb_article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kb_article: typeof args.kb_article === 'object'
        ? args.kb_article.id
        : args.kb_article,
    }

    return reindex.definition.url
            .replace('{kb_article}', parsedArgs.kb_article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KbArticleController::reindex
* @see app/Http/Controllers/Admin/KbArticleController.php:92
* @route '/admin/kb/{kb_article}/reindex'
*/
reindex.post = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reindex.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::reindex
* @see app/Http/Controllers/Admin/KbArticleController.php:92
* @route '/admin/kb/{kb_article}/reindex'
*/
const reindexForm = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reindex.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::reindex
* @see app/Http/Controllers/Admin/KbArticleController.php:92
* @route '/admin/kb/{kb_article}/reindex'
*/
reindexForm.post = (args: { kb_article: number | { id: number } } | [kb_article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reindex.url(args, options),
    method: 'post',
})

reindex.form = reindexForm

/**
* @see \App\Http\Controllers\Admin\KbArticleController::search
* @see app/Http/Controllers/Admin/KbArticleController.php:102
* @route '/admin/kb/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/admin/kb/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\KbArticleController::search
* @see app/Http/Controllers/Admin/KbArticleController.php:102
* @route '/admin/kb/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\KbArticleController::search
* @see app/Http/Controllers/Admin/KbArticleController.php:102
* @route '/admin/kb/search'
*/
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::search
* @see app/Http/Controllers/Admin/KbArticleController.php:102
* @route '/admin/kb/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\KbArticleController::search
* @see app/Http/Controllers/Admin/KbArticleController.php:102
* @route '/admin/kb/search'
*/
searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

search.form = searchForm

const kb = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    reindex: Object.assign(reindex, reindex),
    search: Object.assign(search, search),
}

export default kb