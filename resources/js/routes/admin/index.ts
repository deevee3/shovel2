import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import api from './api'
import users from './users'
import roles from './roles'
import skills from './skills'
import queues from './queues'
import handoffPolicies from './handoff-policies'
import persona from './persona'
import apiKeys from './api-keys'
import webhooks from './webhooks'
import analytics from './analytics'
import auditLogs from './audit-logs'
import kb from './kb'
import organizations from './organizations'
/**
* @see routes/admin.php:23
* @route '/admin'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/admin.php:23
* @route '/admin'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see routes/admin.php:23
* @route '/admin'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/admin.php:23
* @route '/admin'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see routes/admin.php:23
* @route '/admin'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/admin.php:23
* @route '/admin'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/admin.php:23
* @route '/admin'
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

const admin = {
    dashboard: Object.assign(dashboard, dashboard),
    api: Object.assign(api, api),
    users: Object.assign(users, users),
    roles: Object.assign(roles, roles),
    skills: Object.assign(skills, skills),
    queues: Object.assign(queues, queues),
    handoffPolicies: Object.assign(handoffPolicies, handoffPolicies),
    persona: Object.assign(persona, persona),
    apiKeys: Object.assign(apiKeys, apiKeys),
    webhooks: Object.assign(webhooks, webhooks),
    analytics: Object.assign(analytics, analytics),
    auditLogs: Object.assign(auditLogs, auditLogs),
    kb: Object.assign(kb, kb),
    organizations: Object.assign(organizations, organizations),
}

export default admin