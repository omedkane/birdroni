import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'

import "../global.css"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'gen-bold': require('../assets/fonts/gen-sans/GeneralSans-Bold.otf'),
    'gen-light': require('../assets/fonts/gen-sans/GeneralSans-Light.otf'),
    'gen-medium': require('../assets/fonts/gen-sans/GeneralSans-Medium.otf'),
    'gen-regular': require('../assets/fonts/gen-sans/GeneralSans-Regular.otf'),
    'gen-semibold': require('../assets/fonts/gen-sans/GeneralSans-Semibold.otf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#1c1c24' }, animation: 'fade_from_bottom' }}>
      <Stack.Screen name="index" />
    </Stack>
  )
}
