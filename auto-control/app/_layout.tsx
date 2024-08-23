import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="screens/register/index"
        options={{ title: "Registro" }}
      />
    </Stack>
  );
}
