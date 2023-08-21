import Message from "./message.model"
import User from "./user.model"

export default interface Group {
	id: string
	members: User[]
	messages: Message[]
}