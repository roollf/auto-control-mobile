// React and React Native Imports
import { Text, TextInput, View } from "react-native";

// Project Resources
import styles from "./AppInput.styles";

// Type Imports
import AppInputProps from "./AppInput.types";

export default function AppInput({ placeholder, icon }: AppInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.inputContainer}>
        <TextInput style={{ paddingLeft: 10 }} placeholder={placeholder} />
      </View>
    </View>
  );
}
