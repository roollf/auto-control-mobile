//React and React Native imports
import { Text, View, Pressable } from "react-native";
import React from "react";

//Project Resources
import OnboardingButtonProps from "./OnboardingButton.types";
import styles from "./OnboardingButton.styles";

const OnboardingButton = ({ onPress, text }: OnboardingButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default OnboardingButton;
