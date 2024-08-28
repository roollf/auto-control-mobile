import { Slot, Stack } from "expo-router";
import { SessionProvider } from "../contexts/ctx";

export default function Layout() {
  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen
          name="landing"
          options={{ headerShown: true, headerTitle: "Welcome" }}
        />
        <Stack.Screen
          name="(app)"
          options={{ headerShown: true, headerTitle: "Autenticado" }}
        />
      </Stack>
    </SessionProvider>
  );
}
