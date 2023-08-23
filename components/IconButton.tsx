import { Pressable, View } from "react-native"

export default function IconButton(p: { onPress: VoidFunction, color?:string, children?: any, className?: string }) {
	return (
		<View style={{ height: 44, width: 44, borderRadius: 100, overflow: 'hidden', backgroundColor: p.color }}>
			<Pressable style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={p.onPress} android_ripple={{ color: 'grey' }}>
				{p.children}
			</Pressable>
		</View>
	)
}