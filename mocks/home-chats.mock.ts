import QuickChatInfo from "../interfaces/QuickChatInfo"

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