import { Button, StyleSheet, Text, View } from "react-native";

import { useSession } from "../../ctx";
import { Link, router } from "expo-router";

export default function TabOneScreen() {
  const { signOut, session } = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text>Welcome, {session}</Text>
      <View style={styles.separator} />
      <Button title="Sign Out" onPress={handleLogout} />
      <Link
        href={{
          pathname: "/(stack)/register",
          params: { session: session },
        }}
      >
        Ir para register.
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
