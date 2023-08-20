import { ImageSourcePropType } from "react-native"

export interface QuickChatInfo {
	id: string,
	name: string
	lastMsg: string
	unreadNb: number
	lastMsgDate: string
	avatar: ImageSourcePropType
}

export interface QuickGroupChatInfo extends QuickChatInfo {
	lastMsgSender: string
}