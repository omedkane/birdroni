import { AntDesign } from "@expo/vector-icons"
import { SafeAreaView, View, Text, StatusBar, Image, ImageBackground } from "react-native"
import IconButton from "../../components/IconButton"
import { router } from "expo-router"

export default function Chat() {
	return (
		<SafeAreaView className="flex flex-1">

			<View className="flex flex-row w-full pl-1 pr-2 py-3 bg-[#26262e] justify-between items-center" style={{ marginTop: StatusBar.currentHeight, elevation: 1 }}>
				<View className="flex flex-row flex-1 items-center">
					<IconButton onPress={router.back}>
						<AntDesign className="m-auto" name="left" color='white' size={22}></AntDesign>
					</IconButton>
					<View>
						<Image
							className=" h-10 w-10 rounded-full"
							source={require('../../assets/images/avatars/avatar5.png')}
						/>
						<View className="absolute bottom-0 right-1 rounded-full bg-green-500 h-2 w-2"></View>
					</View>
					<View className="ml-4 flex items-start">
						<Text className="font-gen-medium text-base text-white">Naruto Uzumaki</Text>
						<View className="flex flex-row items-center">
							<Text className="font-gen-medium text-base text-green-500 text-center">online</Text>
						</View>
					</View>

				</View>

				<View className="flex flex-row">
					<IconButton onPress={() => { }}>
						<AntDesign className="m-auto" name="search1" color='white' size={22}></AntDesign>
					</IconButton>
					<IconButton onPress={() => { }}>
						<AntDesign className="m-auto" name="bars" color='white' size={22}></AntDesign>
					</IconButton>
				</View>
			</View>
			<ImageBackground className="flex-1 py-6 px-4" style={{ rowGap: 12 }} source={require('../../assets/images/wallpaper.jpg')}>
				<Bubble text="This is exactly what I mean, you should make it !" hourSent="1:30 PM" me={false}></Bubble>
				<Bubble text="I don't know man, this is a bit hard for me !" hourSent="11:30 AM" me={true}></Bubble>
			</ImageBackground>
			{/* <SectionList sections={[]}></SectionList> */}
		</SafeAreaView>
	)
}

function Bubble(p: { text: string, hourSent: string, me: boolean }) {
	return (
		<View className="flex w-full justify-start">
			<View className={p.me ? 'self-end' : 'self-start'}>
				<View className={`mt-1 px-3 py-3 ${p.me ? 'bg-violet-800/70' : 'bg-[#26262e]/80'} self-start rounded-full`}>
					<Text className="font-gen-regular text-white text-base">{p.text}</Text>
				</View>
				<Text className="mr-2 self-end text-gray-400 text-xs">{p.hourSent}</Text>
			</View>
		</View>
	)
}