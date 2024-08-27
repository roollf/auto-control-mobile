import { Redirect, Stack } from "expo-router";
import { useSession } from "../ctx";
import { Text } from "react-native";

export default function Layout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href={"/"} />;
  }

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
