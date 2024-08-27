import React from "react";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import styles from "./index.styles";

export default function Register() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Página Registro ID: {id}</Text>
    </View>
  );
}
