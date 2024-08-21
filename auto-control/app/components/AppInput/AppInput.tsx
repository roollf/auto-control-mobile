// React and React Native Imports
import { TextInput, View } from "react-native";
import { Image } from "expo-image";

// Project Resources
import styles from "./AppInput.styles";

// Type Imports
import AppInputProps from "./AppInput.types";

export default function AppInput({ placeholder, icon }: AppInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
}
