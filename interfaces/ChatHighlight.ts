import { ImageSourcePropType } from "react-native"

export interface ChatHighlight {
	id: string,
	name: string
	lastMsg: string
	unreadNb: number
	lastMsgDate: string
	avatar: ImageSourcePropType
}

export interface GroupChatHighlight extends ChatHighlight {
	lastMsgSender: string
}