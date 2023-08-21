import Message from "./message.model"
import User from "./user.model"

interface ChatBase {
	id: string
	chatMate: User
	unreadNb: number
	messages: Message[]

}
export interface Chat extends ChatBase {
	lastMsg: Message
}

export interface GroupChat extends ChatBase {
	lastMsgSender: User
}