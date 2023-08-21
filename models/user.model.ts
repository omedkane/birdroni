import { Chat } from "./chat.model"

export default interface User {
	id: string
	firstname: string
	lastname: string
	chats: Chat[]
}