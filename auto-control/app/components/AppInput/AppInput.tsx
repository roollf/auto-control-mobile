import { TextInput } from "react-native";
import styles from "./AppInput.styles";

interface AppInputProps {
  placeholder: string;
}

export default function AppInput({ placeholder }: AppInputProps) {
  return <TextInput style={styles.input} placeholder={placeholder} />;
}
