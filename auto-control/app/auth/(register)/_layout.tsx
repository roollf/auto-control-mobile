import { Stack } from "expo-router"

export default function Layout() {
  return (
    <Stack initialRouteName="register">
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen
        name="register-confirmation"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}
