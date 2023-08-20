import FontAwesome from "@expo/vector-icons/FontAwesome"
import { useCallback, useEffect, useRef, useState } from "react"
import { Animated, ImageSourcePropType, Pressable, SectionList, TextInput, View } from "react-native"
import { SafeAreaView, Text, Image } from "react-native"
import { allSections, chatSections, groupSections } from "../../mocks/home-chats.mock"


type Tab = 'All' | 'Chats' | 'Group'
const tabsData = {
  All: allSections,
  Chats: chatSections,
  Group: groupSections,
}

const tabs = Object.keys(tabsData)

export default function Layout() {
  const [currentSection, setCurrentSection] = useState(allSections)
  const onTabSelected = useCallback((index: number) => setCurrentSection(tabsData[tabs[index] as Tab]), [])

  return <SafeAreaView className="flex flex-1 bg-[#1c1c24]">
    <SectionList
      sections={currentSection}

      ListHeaderComponent={
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
            <TabSelector tabs={tabs} onTabSelected={onTabSelected}></TabSelector>
          </View>
        </View>
      }

      SectionSeparatorComponent={() => <View className="mt-4"></View>}

      renderSectionHeader={(section) => (
        <View className="flex">
          <View className="ml-5 flex flex-row items-center">
            <FontAwesome name={section.section.icon} color={'gray'}></FontAwesome>
            <Text className="ml-3 text-gray-500 uppercase">{section.section.title}</Text>
          </View>
        </View>
      )}
      keyExtractor={i => i.id}
      initialNumToRender={1}
      renderItem={(s) => (
        <ChatSelector
          avatar={s.item.avatar}
          name={s.item.name}
          lastMsg={s.item.lastMsg} lastMsgDate={s.item.lastMsgDate} lastMsgSender={(s.item as any).lastMsgSender}
          unreadNb={s.item.unreadNb} ></ChatSelector>
      )}
    >
    </SectionList>

  </SafeAreaView>
}

function ChatSelector(p: { name: string, lastMsg: string, unreadNb: number, lastMsgDate: string, lastMsgSender?: string, avatar: ImageSourcePropType }) {
  return (
    <Pressable android_ripple={{ color: 'gray' }}>
      <View className="flex flex-row w-full py-3 px-5">
        <Image className="h-14 w-14 rounded-full shadow-black" source={p.avatar}></Image>

        <View className="flex flex-row flex-1 justify-between items-center">
          <View className="ml-4 flex justify-center">
            <Text className="text-white font-gen-medium text-base">{p.name}</Text>
            <View className="mt-1 flex flex-row items-center">
              {p.lastMsgSender ? <Text className="font-gen-regular text-cyan-500">{p.lastMsgSender} : </Text> : null}
              <Text className="font-gen-regular text-base text-gray-500">{p.lastMsg}</Text>
            </View>
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
  let animating = false

  const slide = useCallback((tabNb: number) => {
    if (animating || tabNb === currTab) return;
    animating = true
    Animated.timing(translation, {
      toValue: 80 * tabNb,
      duration: 250,
      useNativeDriver: true
    }).start(() => {
      setCurrTab(tabNb)
      if (p.onTabSelected !== undefined)
        p.onTabSelected(tabNb)
      animating = false
    })
  }, [])
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