import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\BillingController::download
* @see app/Http/Controllers/BillingController.php:172
* @route '/billing/invoice/{invoiceId}'
*/
export const download = (args: { invoiceId: string | number } | [invoiceId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/billing/invoice/{invoiceId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BillingController::download
* @see app/Http/Controllers/BillingController.php:172
* @route '/billing/invoice/{invoiceId}'
*/
download.url = (args: { invoiceId: string | number } | [invoiceId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { invoiceId: args }
    }

    if (Array.isArray(args)) {
        args = {
            invoiceId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        invoiceId: args.invoiceId,
    }

    return download.definition.url
            .replace('{invoiceId}', parsedArgs.invoiceId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BillingController::download
* @see app/Http/Controllers/BillingController.php:172
* @route '/billing/invoice/{invoiceId}'
*/
download.get = (args: { invoiceId: string | number } | [invoiceId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::download
* @see app/Http/Controllers/BillingController.php:172
* @route '/billing/invoice/{invoiceId}'
*/
download.head = (args: { invoiceId: string | number } | [invoiceId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BillingController::download
* @see app/Http/Controllers/BillingController.php:172
* @route '/billing/invoice/{invoiceId}'
*/
const downloadForm = (args: { invoiceId: string | number } | [invoiceId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::download
* @see app/Http/Controllers/BillingController.php:172
* @route '/billing/invoice/{invoiceId}'
*/
downloadForm.get = (args: { invoiceId: string | number } | [invoiceId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::download
* @see app/Http/Controllers/BillingController.php:172
* @route '/billing/invoice/{invoiceId}'
*/
downloadForm.head = (args: { invoiceId: string | number } | [invoiceId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

const invoice = {
    download: Object.assign(download, download),
}

export default invoice