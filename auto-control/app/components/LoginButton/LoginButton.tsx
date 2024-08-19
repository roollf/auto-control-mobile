import { Pressable, Text } from "react-native";
import styles from "./LoginButton.styles";
import { LoginButtonProps } from "./LoginButton.types";

export default function LoginButton({ label, destination }: LoginButtonProps) {
  return (
    <Pressable style={styles.loginButton}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}
