import { ImageSourcePropType } from "react-native"

export interface QuickChatInfo {
	name: string
	lastMsg: string
	unreadNb: number
	lastMsgDate: string
	avatar: ImageSourcePropType
}

export interface QuickGroupChatInfo extends QuickChatInfo {
	lastMsgSender: string
}