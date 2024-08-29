import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";

import { useSession } from "../../contexts/ctx";

export default function Layout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    console.log("No session, redirecting to login page...");
    return <Redirect href="/" />;
  }

  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}
