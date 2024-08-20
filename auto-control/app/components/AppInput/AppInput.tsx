// React and React Native Imports
import { TextInput } from "react-native";

// Project Resources
import styles from "./AppInput.styles";

// Type Imports
import AppInputProps from "./AppInput.types";

export default function AppInput({ placeholder }: AppInputProps) {
  return <TextInput style={styles.input} placeholder={placeholder} />;
}
