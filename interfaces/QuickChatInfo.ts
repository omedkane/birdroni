import { ImageSourcePropType } from "react-native"

export default interface QuickChatInfo {
	name: string
	lastMsg: string
	unreadNb: number
	lastMsgDate: string
	avatar: ImageSourcePropType
}
