import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { SessionProvider } from "./ctx";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "/",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Layout />;
}

function Layout() {
  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: true, headerTitle: "Home" }}
        />
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: true, headerTitle: "Testando" }}
        />
      </Stack>
    </SessionProvider>
  );
}
