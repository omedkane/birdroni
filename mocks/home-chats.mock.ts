import FontAwesome from "@expo/vector-icons/FontAwesome"
import { QuickChatInfo, QuickGroupChatInfo } from "../interfaces/QuickChatInfo"
import { IconButtonProps } from "@expo/vector-icons/build/createIconSet"

export const pinnedGroupChats: QuickGroupChatInfo[] = [
	{
		avatar: require('../assets/images/avatars/avatar11.jpg'),
		name: "Team 7",
		lastMsg: "Guess who is the new hokage...",
		lastMsgDate: "2:33",
		unreadNb: 156,
		lastMsgSender: 'Naruto',
	},
	{
		avatar: require('../assets/images/avatars/avatar8.jpg'),
		name: "Sand diplomats",
		lastMsg: "When is the next meeting...",
		lastMsgDate: "5:52",
		unreadNb: 4,
		lastMsgSender: 'Gaara'
	},
]

export const unpinnedGroupChats: QuickGroupChatInfo[] = [
	{
		avatar: require('../assets/images/avatars/avatar10.jpg'),
		name: "Uchicha Clan",
		lastMsg: "You're kidding right ?",
		lastMsgDate: "1:13",
		unreadNb: 1,
		lastMsgSender: 'Madara',
	},
	{
		avatar: require('../assets/images/avatars/avatar9.jpg'),
		name: "Uzumaki Clan",
		lastMsg: "You're talking to the new hokage 😁",
		lastMsgDate: "1:12",
		unreadNb: 1,
		lastMsgSender: 'Naruto'
	},
]
export const pinnedChats: QuickChatInfo[] = [
	{
		avatar: require('../assets/images/avatars/avatar5.png'),
		name: "Naruto Uzumaki",
		lastMsg: "Guess who is the new hokage...",
		lastMsgDate: "1:21",
		unreadNb: 1,
	},
	{
		avatar: require('../assets/images/avatars/avatar2.png'),
		name: "Madara Uchiha",
		lastMsg: "Next time my plan will work...",
		lastMsgDate: "12:52",
		unreadNb: 4,
	},
]

export const unpinnedChats: QuickChatInfo[] = [
	{
		avatar: require('../assets/images/avatars/avatar4.png'),
		name: "Killer Bee",
		lastMsg: "Yo check out my new rap song...",
		lastMsgDate: "13:40",
		unreadNb: 1,
	},
	{
		avatar: require('../assets/images/avatars/avatar3.png'),
		name: "Tenten",
		lastMsg: "Made a shuriken with bamboo...",
		lastMsgDate: "Just now",
		unreadNb: 4,
	},
	{
		avatar: require('../assets/images/avatars/avatar1.png'),
		name: "The Notorious Panda",
		lastMsg: "Meet you in japan haha 😎",
		lastMsgDate: "Just now",
		unreadNb: 1,
	},
]

interface Section<C extends QuickChatInfo | QuickGroupChatInfo = QuickChatInfo> {
	title: string,
	icon: typeof FontAwesome['Button'] extends React.ComponentClass<IconButtonProps<infer v>> ? v : never,
	data: C[]
}

const pinnedSectionTitle: Omit<Section, 'data'> = {
	title: "Pinned Chats",
	icon: "map-pin",
}
const unpinnedSectionTitle: Omit<Section, 'data'> = {
	title: "Unpinned Chats",
	icon: "address-book",
}

export const chatSections: Section[] = [
	{ ...pinnedSectionTitle, data: pinnedChats },
	{ ...unpinnedSectionTitle, data: unpinnedChats }
]

export const groupSections: Section<QuickGroupChatInfo>[] = [
	{ ...pinnedSectionTitle, data: pinnedGroupChats },
	{ ...unpinnedSectionTitle, data: unpinnedGroupChats }
]

export const allSections: Section[] = [
	{ ...pinnedSectionTitle, data: pinnedChats.concat(pinnedGroupChats) },
	{ ...unpinnedSectionTitle, data: unpinnedChats.concat(unpinnedGroupChats) }
]