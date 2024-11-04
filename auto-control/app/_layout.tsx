import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { Stack } from "expo-router"

import { SessionProvider } from "../contexts/ctx"

export default function RootLayout() {
  return (
    <SessionProvider>
      <StatusBar style="light" />
      <SafeAreaView />
      <Stack screenOptions={{ headerShown: false }} />
    </SessionProvider>
  )
}
