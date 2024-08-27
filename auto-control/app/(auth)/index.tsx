import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Teste() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página Teste LOGADO</Text>
      <Link href={"/(auth)/(stack)/"}>Ir para o index.tsx de (stack)</Link>
    </View>
  );
}
