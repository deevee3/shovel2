import UserController from './UserController'
import RoleController from './RoleController'
import SkillController from './SkillController'
import QueueController from './QueueController'
import HandoffPolicyController from './HandoffPolicyController'
import ApiKeyController from './ApiKeyController'
import WebhookController from './WebhookController'
import AnalyticsController from './AnalyticsController'
import AuditLogController from './AuditLogController'
import KbArticleController from './KbArticleController'
import OrganizationController from './OrganizationController'

const Admin = {
    UserController: Object.assign(UserController, UserController),
    RoleController: Object.assign(RoleController, RoleController),
    SkillController: Object.assign(SkillController, SkillController),
    QueueController: Object.assign(QueueController, QueueController),
    HandoffPolicyController: Object.assign(HandoffPolicyController, HandoffPolicyController),
    ApiKeyController: Object.assign(ApiKeyController, ApiKeyController),
    WebhookController: Object.assign(WebhookController, WebhookController),
    AnalyticsController: Object.assign(AnalyticsController, AnalyticsController),
    AuditLogController: Object.assign(AuditLogController, AuditLogController),
    KbArticleController: Object.assign(KbArticleController, KbArticleController),
    OrganizationController: Object.assign(OrganizationController, OrganizationController),
}

export default Admin