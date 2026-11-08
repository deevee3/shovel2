import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\AgentSession\AgentTokenController::__invoke
* @see app/Http/Controllers/AgentSession/AgentTokenController.php:17
* @route '/agent-session/token'
*/
const AgentTokenController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AgentTokenController.url(options),
    method: 'post',
})

AgentTokenController.definition = {
    methods: ["post"],
    url: '/agent-session/token',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AgentSession\AgentTokenController::__invoke
* @see app/Http/Controllers/AgentSession/AgentTokenController.php:17
* @route '/agent-session/token'
*/
AgentTokenController.url = (options?: RouteQueryOptions) => {
    return AgentTokenController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentSession\AgentTokenController::__invoke
* @see app/Http/Controllers/AgentSession/AgentTokenController.php:17
* @route '/agent-session/token'
*/
AgentTokenController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AgentTokenController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AgentSession\AgentTokenController::__invoke
* @see app/Http/Controllers/AgentSession/AgentTokenController.php:17
* @route '/agent-session/token'
*/
const AgentTokenControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: AgentTokenController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AgentSession\AgentTokenController::__invoke
* @see app/Http/Controllers/AgentSession/AgentTokenController.php:17
* @route '/agent-session/token'
*/
AgentTokenControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: AgentTokenController.url(options),
    method: 'post',
})

AgentTokenController.form = AgentTokenControllerForm

export default AgentTokenController