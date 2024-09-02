import { Stack } from "expo-router";
import { SessionProvider } from "../contexts/ctx";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SessionProvider>
      <SafeAreaView style={{ display: "flex", flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SessionProvider>
  );
}
