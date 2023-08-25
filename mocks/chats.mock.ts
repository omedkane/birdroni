import { Chat } from "../models/chat.model"
import { messages } from "./messages.mock"
import { users } from "./users.mock"

export const chats : Chat[] = [
	{
		id: 'naruto-lee',
		chatMate: users.find(u => u.id === 'user8')!,
		messages: messages['naruto-lee'],
		lastMsg: messages['naruto-lee'].at(-1)!,
		unreadNb: 1,
	},
	{
		id: 'naruto-madara',
		chatMate: users.find(u => u.id === 'user98')!,
		messages: messages['naruto-madara'],
		lastMsg: messages['naruto-madara'].at(-1)!,
		unreadNb: 1,
	},
]