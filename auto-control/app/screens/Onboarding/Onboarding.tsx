import React from "react";
import { View } from "react-native";

import Slider from "../../components/Slider/Slider";

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
