import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ headerShown: true, headerTitle: "Login" }}
      />
      {/* <Stack.Screen
        name="register"
        options={{ headerShown: true, headerTitle: "Register" }}
      />
      <Stack.Screen
        name="recover"
        options={{ headerShown: true, headerTitle: "Recover" }}
      /> */}
    </Stack>
  );
}
