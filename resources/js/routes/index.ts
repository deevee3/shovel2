import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see routes/web.php:12
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:12
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see routes/web.php:12
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:12
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see routes/web.php:12
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:12
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:12
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see routes/web.php:16
* @route '/how-it-works'
*/
export const howItWorks = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: howItWorks.url(options),
    method: 'get',
})

howItWorks.definition = {
    methods: ["get","head"],
    url: '/how-it-works',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:16
* @route '/how-it-works'
*/
howItWorks.url = (options?: RouteQueryOptions) => {
    return howItWorks.definition.url + queryParams(options)
}

/**
* @see routes/web.php:16
* @route '/how-it-works'
*/
howItWorks.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: howItWorks.url(options),
    method: 'get',
})

/**
* @see routes/web.php:16
* @route '/how-it-works'
*/
howItWorks.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: howItWorks.url(options),
    method: 'head',
})

/**
* @see routes/web.php:16
* @route '/how-it-works'
*/
const howItWorksForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: howItWorks.url(options),
    method: 'get',
})

/**
* @see routes/web.php:16
* @route '/how-it-works'
*/
howItWorksForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: howItWorks.url(options),
    method: 'get',
})

/**
* @see routes/web.php:16
* @route '/how-it-works'
*/
howItWorksForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: howItWorks.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

howItWorks.form = howItWorksForm

/**
* @see routes/web.php:20
* @route '/pricing'
*/
export const pricing = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pricing.url(options),
    method: 'get',
})

pricing.definition = {
    methods: ["get","head"],
    url: '/pricing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:20
* @route '/pricing'
*/
pricing.url = (options?: RouteQueryOptions) => {
    return pricing.definition.url + queryParams(options)
}

/**
* @see routes/web.php:20
* @route '/pricing'
*/
pricing.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pricing.url(options),
    method: 'get',
})

/**
* @see routes/web.php:20
* @route '/pricing'
*/
pricing.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pricing.url(options),
    method: 'head',
})

/**
* @see routes/web.php:20
* @route '/pricing'
*/
const pricingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pricing.url(options),
    method: 'get',
})

/**
* @see routes/web.php:20
* @route '/pricing'
*/
pricingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pricing.url(options),
    method: 'get',
})

/**
* @see routes/web.php:20
* @route '/pricing'
*/
pricingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pricing.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pricing.form = pricingForm

/**
* @see routes/web.php:26
* @route '/about'
*/
export const about = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

about.definition = {
    methods: ["get","head"],
    url: '/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:26
* @route '/about'
*/
about.url = (options?: RouteQueryOptions) => {
    return about.definition.url + queryParams(options)
}

/**
* @see routes/web.php:26
* @route '/about'
*/
about.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

/**
* @see routes/web.php:26
* @route '/about'
*/
about.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about.url(options),
    method: 'head',
})

/**
* @see routes/web.php:26
* @route '/about'
*/
const aboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url(options),
    method: 'get',
})

/**
* @see routes/web.php:26
* @route '/about'
*/
aboutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url(options),
    method: 'get',
})

/**
* @see routes/web.php:26
* @route '/about'
*/
aboutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

about.form = aboutForm

/**
* @see routes/web.php:30
* @route '/tandem'
*/
export const tandem = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tandem.url(options),
    method: 'get',
})

tandem.definition = {
    methods: ["get","head"],
    url: '/tandem',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:30
* @route '/tandem'
*/
tandem.url = (options?: RouteQueryOptions) => {
    return tandem.definition.url + queryParams(options)
}

/**
* @see routes/web.php:30
* @route '/tandem'
*/
tandem.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tandem.url(options),
    method: 'get',
})

/**
* @see routes/web.php:30
* @route '/tandem'
*/
tandem.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tandem.url(options),
    method: 'head',
})

/**
* @see routes/web.php:30
* @route '/tandem'
*/
const tandemForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tandem.url(options),
    method: 'get',
})

/**
* @see routes/web.php:30
* @route '/tandem'
*/
tandemForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tandem.url(options),
    method: 'get',
})

/**
* @see routes/web.php:30
* @route '/tandem'
*/
tandemForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tandem.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tandem.form = tandemForm

/**
* @see \App\Http\Controllers\DashboardController::__invoke
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::__invoke
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::__invoke
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::__invoke
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DashboardController::__invoke
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::__invoke
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::__invoke
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
export const inbox = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inbox.url(options),
    method: 'get',
})

inbox.definition = {
    methods: ["get","head"],
    url: '/inbox',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
inbox.url = (options?: RouteQueryOptions) => {
    return inbox.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
inbox.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inbox.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
inbox.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inbox.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
const inboxForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inbox.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
inboxForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inbox.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InboxController::__invoke
* @see app/Http/Controllers/InboxController.php:12
* @route '/inbox'
*/
inboxForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inbox.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

inbox.form = inboxForm

/**
* @see routes/settings.php:18
* @route '/settings/appearance'
*/
export const appearance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appearance.url(options),
    method: 'get',
})

appearance.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/settings.php:18
* @route '/settings/appearance'
*/
appearance.url = (options?: RouteQueryOptions) => {
    return appearance.definition.url + queryParams(options)
}

/**
* @see routes/settings.php:18
* @route '/settings/appearance'
*/
appearance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appearance.url(options),
    method: 'get',
})

/**
* @see routes/settings.php:18
* @route '/settings/appearance'
*/
appearance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: appearance.url(options),
    method: 'head',
})

/**
* @see routes/settings.php:18
* @route '/settings/appearance'
*/
const appearanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appearance.url(options),
    method: 'get',
})

/**
* @see routes/settings.php:18
* @route '/settings/appearance'
*/
appearanceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appearance.url(options),
    method: 'get',
})

/**
* @see routes/settings.php:18
* @route '/settings/appearance'
*/
appearanceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appearance.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

appearance.form = appearanceForm

/**
* @see routes/auth.php:8
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/auth.php:8
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see routes/auth.php:8
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see routes/auth.php:8
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see routes/auth.php:8
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see routes/auth.php:8
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see routes/auth.php:8
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see routes/auth.php:34
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see routes/auth.php:34
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see routes/auth.php:34
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see routes/auth.php:34
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see routes/auth.php:34
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm
