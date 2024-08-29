// React and React Native Imports
import React from "react";
import { View } from "react-native";

// Project Components
import Slider from "../../../components/Slider/Slider";

// Project Resources
import onboardingStyles from "./Onboarding.styles";

const Onboarding = () => {
  return (
    <View style={onboardingStyles.container}>
      <Slider />
    </View>
  );
};

export default Onboarding;
