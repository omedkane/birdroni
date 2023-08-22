import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { SafeAreaView, SectionList, View, Text, StatusBar, Image } from "react-native"
import IconButton from "../../components/IconButton"
import { router } from "expo-router"

export default function Chat() {
	return (
		<SafeAreaView className="flex flex-1">
			<SectionList
				sections={[]}
				ListHeaderComponent={
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
				}></SectionList>
		</SafeAreaView>
	)
}

function Bubble() {
	return (
		<View className="px-3 py-2">
			<Text className="text-white text-base"></Text>
		</View>
	)
}