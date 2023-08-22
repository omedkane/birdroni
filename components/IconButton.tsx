import { Pressable, View } from "react-native"

export default function IconButton(p: { onPress: VoidFunction, children?: any }) {
	return (
		<View style={{ height: 44, width: 44, borderRadius: 100, overflow: 'hidden' }}>
			<Pressable style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={p.onPress} android_ripple={{ color: 'grey' }}>
				{p.children}
			</Pressable>
		</View>
	)
}