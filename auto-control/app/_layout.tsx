import { Stack } from "expo-router";
import { SessionProvider } from "../contexts/ctx";

export default function Layout() {
  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </SessionProvider>
  );
}
