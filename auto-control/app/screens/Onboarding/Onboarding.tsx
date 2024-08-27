// React and React Native Imports
import React from "react";
import { View } from "react-native";

// Project Components
import Slider from "../../../components/Slider/Slider";

// Project Resources
import styles from "./Onboarding.styles";

const Onboarding = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <Slider />
      </View>
    </View>
  );
};

export default Onboarding;
