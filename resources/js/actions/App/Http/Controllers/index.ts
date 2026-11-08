import Api from './Api'
import ChatController from './ChatController'
import InvitationController from './InvitationController'
import BillingController from './BillingController'
import DashboardController from './DashboardController'
import InboxController from './InboxController'
import ConversationController from './ConversationController'
import AgentSession from './AgentSession'
import Settings from './Settings'
import Admin from './Admin'

const Controllers = {
    Api: Object.assign(Api, Api),
    ChatController: Object.assign(ChatController, ChatController),
    InvitationController: Object.assign(InvitationController, InvitationController),
    BillingController: Object.assign(BillingController, BillingController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    InboxController: Object.assign(InboxController, InboxController),
    ConversationController: Object.assign(ConversationController, ConversationController),
    AgentSession: Object.assign(AgentSession, AgentSession),
    Settings: Object.assign(Settings, Settings),
    Admin: Object.assign(Admin, Admin),
}

export default Controllers