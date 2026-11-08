import ConversationController from './ConversationController'
import ConversationMessageController from './ConversationMessageController'
import ConversationHandoffController from './ConversationHandoffController'
import ConversationResolutionController from './ConversationResolutionController'
import QueueItemController from './QueueItemController'
import BotActiveConversationController from './BotActiveConversationController'
import AssignmentController from './AssignmentController'
import IntegrationController from './IntegrationController'

const Api = {
    ConversationController: Object.assign(ConversationController, ConversationController),
    ConversationMessageController: Object.assign(ConversationMessageController, ConversationMessageController),
    ConversationHandoffController: Object.assign(ConversationHandoffController, ConversationHandoffController),
    ConversationResolutionController: Object.assign(ConversationResolutionController, ConversationResolutionController),
    QueueItemController: Object.assign(QueueItemController, QueueItemController),
    BotActiveConversationController: Object.assign(BotActiveConversationController, BotActiveConversationController),
    AssignmentController: Object.assign(AssignmentController, AssignmentController),
    IntegrationController: Object.assign(IntegrationController, IntegrationController),
}

export default Api