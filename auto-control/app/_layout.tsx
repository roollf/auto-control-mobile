import { Stack } from "expo-router"
import { SessionProvider } from "../contexts/ctx"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"

export default function Layout() {
  return (
    <SessionProvider>
      <LinearGradient colors={["#2282FF", "#326aee"]} style={{ flex: 1 }}>
        <Stack initialRouteName="(app)">
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
        </Stack>
      </LinearGradient>
    </SessionProvider>
  )
}
