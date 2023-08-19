import FontAwesome from "@expo/vector-icons/FontAwesome"
import { IconButtonProps } from "@expo/vector-icons/build/createIconSet"
import { useRef, useState } from "react"
import { Animated, ImageSourcePropType, Pressable, SectionList, TextInput, View } from "react-native"
import { SafeAreaView, Text, Image } from "react-native"

interface QuickChatInfo { name: string, lastMsg: string, unreadNb: number, lastMsgDate: string, avatar: ImageSourcePropType }

const pinnedChats: QuickChatInfo[] = [
  {
    avatar: require('../../assets/images/avatars/avatar5.png'),
    name: "Naruto Uzumaki",
    lastMsg: "Guess who is the new hokage...",
    lastMsgDate: "1:21",
    unreadNb: 1,
  },
  {
    avatar: require('../../assets/images/avatars/avatar2.png'),
    name: "Madara Uchiha",
    lastMsg: "Next time my plan will work...",
    lastMsgDate: "12:52",
    unreadNb: 4,
  },
]

const unpinned: QuickChatInfo[] = [
  {
    avatar: require('../../assets/images/avatars/avatar4.png'),
    name: "Killer Bee",
    lastMsg: "Yo check out my new rap song...",
    lastMsgDate: "13:40",
    unreadNb: 1,
  },
  {
    avatar: require('../../assets/images/avatars/avatar3.png'),
    name: "Tenten",
    lastMsg: "Made a shuriken with bamboo...",
    lastMsgDate: "Just now",
    unreadNb: 4,
  },
  {
    avatar: require('../../assets/images/avatars/avatar1.png'),
    name: "The Notorious Panda",
    lastMsg: "Meet you in japan haha 😎",
    lastMsgDate: "Just now",
    unreadNb: 1,
  },
]

const chatSections:
  {
    title: string,
    icon: typeof FontAwesome['Button'] extends React.ComponentClass<IconButtonProps<infer v>> ? v : never,
    data: QuickChatInfo[]
  }[] = [
    {
      title: "Pinned Chats",
      icon: "map-pin",
      data: pinnedChats
    },
    {
      title: "Unpinned Chats",
      icon: "address-book",
      data: unpinned,
    }
  ]

export default function Layout() {
  const tabs = ['All', 'Chats', 'Groups']

  return <SafeAreaView className="flex flex-1 bg-[#1c1c24]">
    <SectionList
      sections={chatSections}
      StickyHeaderComponent={() => <View className="h-14 w-full bg-white"></View>}
      ListHeaderComponent={() => (
        <View className="px-5 pt-14 mb-5 flex justify-start items-start">
          <View className="flex w-full flex-row items-center justify-between">
            <View className="flex flex-row items-center">
              <Text className="text-2xl font-gen-semibold text-white">Messages</Text>
              <Text className="ml-2 text-lg font-gen-medium text-cyan-500">
                <Text className="font-gen-semibold">48</Text> new</Text>
            </View>
            <FontAwesome name="edit" color={'#06B6D4'} size={20}></FontAwesome>
          </View>

          <View className="mt-5 flex flex-row h-14 px-4 bg-black rounded-xl items-center">
            <TextInput placeholder="Search a chat or a message..." placeholderTextColor={'gray'}
              className="flex-1 text-white text-base">
            </TextInput>
            <FontAwesome name="search" color={'gray'} size={18}></FontAwesome>
          </View>
          <View className="mt-5 self-center">
            <TabSelector tabs={tabs}></TabSelector>
          </View>
        </View>
      )}
      SectionSeparatorComponent={() => <View className="mt-4"></View>}
      renderSectionHeader={(section) => (
        <View className="flex">
          <View className="ml-5 flex flex-row items-center">
            <FontAwesome name={section.section.icon} color={'gray'}></FontAwesome>
            <Text className="ml-3 text-gray-500 uppercase">{section.section.title}</Text>
          </View>
        </View>
      )}
      renderItem={(s) => (
        <ChatSelector
          avatar={s.item.avatar}
          name={s.item.name} lastMsg={s.item.lastMsg} lastMsgDate={s.item.lastMsgDate} unreadNb={s.item.unreadNb} ></ChatSelector>
      )}
    >
    </SectionList>

  </SafeAreaView>
}

function ChatSelector(p: { name: string, lastMsg: string, unreadNb: number, lastMsgDate: string, avatar: ImageSourcePropType }) {
  return (
    <Pressable android_ripple={{ color: 'gray' }}>
      <View className="flex flex-row w-full py-3 px-5">
        <Image className="h-14 w-14 rounded-full shadow-black" source={p.avatar}></Image>

        <View className="flex flex-row flex-1 justify-between items-center">
          <View className="ml-4 flex justify-center">
            <Text className="text-white font-gen-medium text-base">{p.name}</Text>
            <Text className="mt-1 font-gen-regular text-base text-gray-500">{p.lastMsg}</Text>
          </View>
          <View className="flex items-center">
            <View className="h-6 w-6 rounded-full justify-center items-center bg-pink-600">
              <Text className="text-white font-gen-semibold leading-none">{p.unreadNb}</Text>
            </View>
            <Text className="mt-2 text-xs text-gray-500">{p.lastMsgDate}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

function TabSelector(p: { tabs: string[], onTabSelected?: (tabNb: number) => void }) {
  const [currTab, setCurrTab] = useState(0)
  const translation = useRef(new Animated.Value(0)).current

  const slide = (tabNb: number) => {
    setCurrTab(tabNb)
    Animated.timing(translation, {
      toValue: 80 * tabNb,
      duration: 250,
      useNativeDriver: true
    }).start()
  }
  return (
    <View className="flex bg-black rounded-2xl p-1">
      <View className="flex-row relative">
        <Animated.View className="bg-white h-12 w-20 absolute left-0 top-0 rounded-2xl" style={{ transform: [{ translateX: translation }] }}></Animated.View>
        {
          p.tabs.map((t, i) => (
            <View key={i} onTouchStart={() => slide(i)} className="h-12 w-20 flex justify-center items-center rounded-2xl">
              <Text style={{ color: currTab === i ? 'black' : 'gray' }} className="text-black">{t}</Text>
            </View>
          ))
        }
      </View>
    </View>
  )
}