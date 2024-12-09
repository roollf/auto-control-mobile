import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { SessionProvider } from "../contexts/ctx"

export default function RootLayout() {
  return (
    <SessionProvider>
      <GestureHandlerRootView>
        <StatusBar style="light" />
        <SafeAreaView />
        <Stack screenOptions={{ headerShown: false }} />
      </GestureHandlerRootView>
    </SessionProvider>
  )
}
