import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import users from './users'
import roles from './roles'
import permissions from './permissions'
import skills from './skills'
import queues from './queues'
import handoffPolicies from './handoff-policies'
import apiKeys from './api-keys'
import webhooks from './webhooks'
import analytics from './analytics'
import auditLogs from './audit-logs'
import organizations from './organizations'
/**
* @see routes/admin.php:27
* @route '/admin/api'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/admin.php:27
* @route '/admin/api'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see routes/admin.php:27
* @route '/admin/api'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see routes/admin.php:27
* @route '/admin/api'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see routes/admin.php:27
* @route '/admin/api'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see routes/admin.php:27
* @route '/admin/api'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see routes/admin.php:27
* @route '/admin/api'
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

const api = {
    index: Object.assign(index, index),
    users: Object.assign(users, users),
    roles: Object.assign(roles, roles),
    permissions: Object.assign(permissions, permissions),
    skills: Object.assign(skills, skills),
    queues: Object.assign(queues, queues),
    handoffPolicies: Object.assign(handoffPolicies, handoffPolicies),
    apiKeys: Object.assign(apiKeys, apiKeys),
    webhooks: Object.assign(webhooks, webhooks),
    analytics: Object.assign(analytics, analytics),
    auditLogs: Object.assign(auditLogs, auditLogs),
    organizations: Object.assign(organizations, organizations),
}

export default api