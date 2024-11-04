import { Stack } from "expo-router"

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="chooseAdd" />
      <Stack.Screen name="addexpense" />
      <Stack.Screen name="addvehicle" />
    </Stack>
  )
}
