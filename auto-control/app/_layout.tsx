// import from react and hooks

// import from react native and expo
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { Stack } from "expo-router"

// import from custom hooks

// import from context
import { SessionProvider } from "../contexts/ctx"

// import from services

// import from third party libraries

// import from custom components

// import from types, utils and constants

// import from styles

// import from routes

// import from images and svgs

// color scheme and variables

export default function Layout() {
  return (
    <SessionProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar style="dark" />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SessionProvider>
  )
}
