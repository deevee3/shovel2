import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import invoice from './invoice'
/**
* @see \App\Http\Controllers\BillingController::index
* @see app/Http/Controllers/BillingController.php:15
* @route '/billing'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/billing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BillingController::index
* @see app/Http/Controllers/BillingController.php:15
* @route '/billing'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BillingController::index
* @see app/Http/Controllers/BillingController.php:15
* @route '/billing'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::index
* @see app/Http/Controllers/BillingController.php:15
* @route '/billing'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BillingController::index
* @see app/Http/Controllers/BillingController.php:15
* @route '/billing'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::index
* @see app/Http/Controllers/BillingController.php:15
* @route '/billing'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::index
* @see app/Http/Controllers/BillingController.php:15
* @route '/billing'
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
* @see \App\Http\Controllers\BillingController::plans
* @see app/Http/Controllers/BillingController.php:55
* @route '/billing/plans'
*/
export const plans = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: plans.url(options),
    method: 'get',
})

plans.definition = {
    methods: ["get","head"],
    url: '/billing/plans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BillingController::plans
* @see app/Http/Controllers/BillingController.php:55
* @route '/billing/plans'
*/
plans.url = (options?: RouteQueryOptions) => {
    return plans.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BillingController::plans
* @see app/Http/Controllers/BillingController.php:55
* @route '/billing/plans'
*/
plans.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: plans.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::plans
* @see app/Http/Controllers/BillingController.php:55
* @route '/billing/plans'
*/
plans.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: plans.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BillingController::plans
* @see app/Http/Controllers/BillingController.php:55
* @route '/billing/plans'
*/
const plansForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: plans.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::plans
* @see app/Http/Controllers/BillingController.php:55
* @route '/billing/plans'
*/
plansForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: plans.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::plans
* @see app/Http/Controllers/BillingController.php:55
* @route '/billing/plans'
*/
plansForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: plans.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

plans.form = plansForm

/**
* @see \App\Http\Controllers\BillingController::subscribe
* @see app/Http/Controllers/BillingController.php:75
* @route '/billing/subscribe'
*/
export const subscribe = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subscribe.url(options),
    method: 'post',
})

subscribe.definition = {
    methods: ["post"],
    url: '/billing/subscribe',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BillingController::subscribe
* @see app/Http/Controllers/BillingController.php:75
* @route '/billing/subscribe'
*/
subscribe.url = (options?: RouteQueryOptions) => {
    return subscribe.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BillingController::subscribe
* @see app/Http/Controllers/BillingController.php:75
* @route '/billing/subscribe'
*/
subscribe.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subscribe.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BillingController::subscribe
* @see app/Http/Controllers/BillingController.php:75
* @route '/billing/subscribe'
*/
const subscribeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: subscribe.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BillingController::subscribe
* @see app/Http/Controllers/BillingController.php:75
* @route '/billing/subscribe'
*/
subscribeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: subscribe.url(options),
    method: 'post',
})

subscribe.form = subscribeForm

/**
* @see \App\Http\Controllers\BillingController::paymentMethod
* @see app/Http/Controllers/BillingController.php:97
* @route '/billing/payment-method'
*/
export const paymentMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: paymentMethod.url(options),
    method: 'post',
})

paymentMethod.definition = {
    methods: ["post"],
    url: '/billing/payment-method',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BillingController::paymentMethod
* @see app/Http/Controllers/BillingController.php:97
* @route '/billing/payment-method'
*/
paymentMethod.url = (options?: RouteQueryOptions) => {
    return paymentMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BillingController::paymentMethod
* @see app/Http/Controllers/BillingController.php:97
* @route '/billing/payment-method'
*/
paymentMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: paymentMethod.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BillingController::paymentMethod
* @see app/Http/Controllers/BillingController.php:97
* @route '/billing/payment-method'
*/
const paymentMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: paymentMethod.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BillingController::paymentMethod
* @see app/Http/Controllers/BillingController.php:97
* @route '/billing/payment-method'
*/
paymentMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: paymentMethod.url(options),
    method: 'post',
})

paymentMethod.form = paymentMethodForm

/**
* @see \App\Http\Controllers\BillingController::cancel
* @see app/Http/Controllers/BillingController.php:115
* @route '/billing/cancel'
*/
export const cancel = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/billing/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BillingController::cancel
* @see app/Http/Controllers/BillingController.php:115
* @route '/billing/cancel'
*/
cancel.url = (options?: RouteQueryOptions) => {
    return cancel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BillingController::cancel
* @see app/Http/Controllers/BillingController.php:115
* @route '/billing/cancel'
*/
cancel.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BillingController::cancel
* @see app/Http/Controllers/BillingController.php:115
* @route '/billing/cancel'
*/
const cancelForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BillingController::cancel
* @see app/Http/Controllers/BillingController.php:115
* @route '/billing/cancel'
*/
cancelForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(options),
    method: 'post',
})

cancel.form = cancelForm

/**
* @see \App\Http\Controllers\BillingController::resume
* @see app/Http/Controllers/BillingController.php:135
* @route '/billing/resume'
*/
export const resume = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resume.url(options),
    method: 'post',
})

resume.definition = {
    methods: ["post"],
    url: '/billing/resume',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BillingController::resume
* @see app/Http/Controllers/BillingController.php:135
* @route '/billing/resume'
*/
resume.url = (options?: RouteQueryOptions) => {
    return resume.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BillingController::resume
* @see app/Http/Controllers/BillingController.php:135
* @route '/billing/resume'
*/
resume.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resume.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BillingController::resume
* @see app/Http/Controllers/BillingController.php:135
* @route '/billing/resume'
*/
const resumeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resume.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BillingController::resume
* @see app/Http/Controllers/BillingController.php:135
* @route '/billing/resume'
*/
resumeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resume.url(options),
    method: 'post',
})

resume.form = resumeForm

/**
* @see \App\Http\Controllers\BillingController::invoices
* @see app/Http/Controllers/BillingController.php:155
* @route '/billing/invoices'
*/
export const invoices = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoices.url(options),
    method: 'get',
})

invoices.definition = {
    methods: ["get","head"],
    url: '/billing/invoices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BillingController::invoices
* @see app/Http/Controllers/BillingController.php:155
* @route '/billing/invoices'
*/
invoices.url = (options?: RouteQueryOptions) => {
    return invoices.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BillingController::invoices
* @see app/Http/Controllers/BillingController.php:155
* @route '/billing/invoices'
*/
invoices.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoices.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::invoices
* @see app/Http/Controllers/BillingController.php:155
* @route '/billing/invoices'
*/
invoices.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: invoices.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BillingController::invoices
* @see app/Http/Controllers/BillingController.php:155
* @route '/billing/invoices'
*/
const invoicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: invoices.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::invoices
* @see app/Http/Controllers/BillingController.php:155
* @route '/billing/invoices'
*/
invoicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: invoices.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BillingController::invoices
* @see app/Http/Controllers/BillingController.php:155
* @route '/billing/invoices'
*/
invoicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: invoices.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

invoices.form = invoicesForm

const billing = {
    index: Object.assign(index, index),
    plans: Object.assign(plans, plans),
    subscribe: Object.assign(subscribe, subscribe),
    paymentMethod: Object.assign(paymentMethod, paymentMethod),
    cancel: Object.assign(cancel, cancel),
    resume: Object.assign(resume, resume),
    invoices: Object.assign(invoices, invoices),
    invoice: Object.assign(invoice, invoice),
}

export default billing