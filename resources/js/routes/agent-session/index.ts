import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AgentSession\AgentTokenController::__invoke
* @see app/Http/Controllers/AgentSession/AgentTokenController.php:17
* @route '/agent-session/token'
*/
export const token = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: token.url(options),
    method: 'post',
})

token.definition = {
    methods: ["post"],
    url: '/agent-session/token',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AgentSession\AgentTokenController::__invoke
* @see app/Http/Controllers/AgentSession/AgentTokenController.php:17
* @route '/agent-session/token'
*/
token.url = (options?: RouteQueryOptions) => {
    return token.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentSession\AgentTokenController::__invoke
* @see app/Http/Controllers/AgentSession/AgentTokenController.php:17
* @route '/agent-session/token'
*/
token.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: token.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AgentSession\AgentTokenController::__invoke
* @see app/Http/Controllers/AgentSession/AgentTokenController.php:17
* @route '/agent-session/token'
*/
const tokenForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: token.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AgentSession\AgentTokenController::__invoke
* @see app/Http/Controllers/AgentSession/AgentTokenController.php:17
* @route '/agent-session/token'
*/
tokenForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: token.url(options),
    method: 'post',
})

token.form = tokenForm

const agentSession = {
    token: Object.assign(token, token),
}

export default agentSession