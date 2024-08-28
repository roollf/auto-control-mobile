import { Redirect, Stack } from "expo-router";
import { useSession } from "../../contexts/ctx";
import { Text } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, headerTitle: "Authorization" }}
      />
      <Stack.Screen
        name="(stack)"
        options={{ headerShown: true, headerTitle: "Stack" }}
      />
    </Stack>
  );
}
