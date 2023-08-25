export default interface Message {
	id: string
	dateSent: Date
	text: string
	sentBy: string
	read: boolean
}