// React and React Native Imports
import { Text, TextInput, View } from "react-native";
import { Image } from "expo-image";

// Project Resources
import styles from "./AppInput.styles";

// Type Imports
import AppInputProps from "./AppInput.types";

export default function AppInput({ placeholder, icon }: AppInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text>
          teste.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={{ paddingLeft: 5 }} placeholder={placeholder} />
      </View>
    </View>
  );
}
