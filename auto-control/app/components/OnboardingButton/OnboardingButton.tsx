import { Text, View, Pressable } from "react-native";
import React from "react";
import styles from "./OnboardingButton.styles";
import OnboardingButtonProps from "./OnboardingButton.types";

const OnboardingButton = ({ onPress, text }: OnboardingButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default OnboardingButton;
