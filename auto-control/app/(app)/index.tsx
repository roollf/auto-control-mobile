import { Text, View } from "react-native";

import { useSession } from "../../contexts/ctx";

export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          console.log("Signing out...");
          signOut();
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
