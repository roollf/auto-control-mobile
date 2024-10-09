import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { Stack } from "expo-router"

import { SessionProvider } from "../contexts/ctx"

export default function RootLayout() {
  return (
    <SessionProvider>
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}> */}
      <StatusBar style="light" />
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName="dashboard"
      />
      {/* </SafeAreaView> */}
    </SessionProvider>
  )
}
