import FontAwesome from "@expo/vector-icons/FontAwesome"
import { ImageSourcePropType, StatusBar, TextInput, View } from "react-native"
import { SafeAreaView, Text, Image } from "react-native"

export default function Layout() {
  const sbH = StatusBar.currentHeight
  return <SafeAreaView className="flex flex-1 justify-start items-start bg-[#1c1c24] px-6 py-8">
    <View style={{ height: sbH }}></View>

    <View className="flex w-full flex-row items-center justify-between">
      <View className="flex flex-row items-center">
        <Text className="text-2xl font-gen-semibold text-white">Messages</Text>
        <Text className="ml-2 text-lg font-gen-medium text-cyan-500">48 new</Text>
      </View>
      <FontAwesome name="edit" color={'#06B6D4'} size={20}></FontAwesome>
    </View>

    <View className="mt-5 flex flex-row h-14 px-4 bg-black rounded-xl items-center">
      <TextInput placeholder="Search a chat or a message..." placeholderTextColor={'gray'}
        className="flex-1 text-white">
      </TextInput>
      <FontAwesome name="search" color={'gray'} size={18}></FontAwesome>
    </View>

    <View className="mt-4 flex flex-row flex-none self-center bg-black rounded-2xl p-2">
      <View className="h-12 w-20 flex justify-center items-center bg-white rounded-2xl">
        <Text className="text-black">All</Text>
      </View>
      <View className="h-12 w-20 flex justify-center items-center rounded-2xl">
        <Text className="text-gray-500">Chats</Text>
      </View>
      <View className="h-12 w-20 flex justify-center items-center rounded-2xl">
        <Text className="text-gray-500">Groups</Text>
      </View>
    </View>

    <View className="mt-4 flex">
      <View className="mt-5 flex flex-row items-center">
        <FontAwesome name="map-pin" color={'gray'}></FontAwesome>
        <Text className="ml-4 text-gray-500 uppercase">Pinned chats</Text>
      </View>
    </View>

    <View className="mt-7" style={{rowGap: 24}}>
      <ChatSelector
        avatar={require('../../assets/images/avatars/avatar5.png')}
        name="Naruto Uzumaki" lastMsg="Guess who is the new hokage..." lastMsgDate="1:21" unreadNb={1} ></ChatSelector>
      <ChatSelector
        avatar={require('../../assets/images/avatars/avatar2.png')}
        name="Madara Uchiha" lastMsg="Next time my plan will work..." lastMsgDate="12:52" unreadNb={4} ></ChatSelector>
    </View>

  </SafeAreaView>
}

function ChatSelector(p: { name: string, lastMsg: string, unreadNb: number, lastMsgDate: string, avatar: ImageSourcePropType }) {
  return <View className="flex flex-row w-full">
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
}