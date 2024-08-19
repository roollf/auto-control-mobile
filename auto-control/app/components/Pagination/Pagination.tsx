import React, { useRef, useEffect } from "react";
import { Animated, View } from "react-native";
import styles from "./Pagination.styles";

const Pagination = ({ Slides, SelectedDot }) => {
  const animatedValues = useRef(
    Slides.map(() => new Animated.Value(10))
  ).current;

  useEffect(() => {
    animatedValues.forEach((value, index) => {
      Animated.timing(value, {
        toValue: SelectedDot === index ? 30 : 10,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  }, [SelectedDot]);

  return (
    <View style={styles.paginationContainer}>
      {Slides.map((slide, index) => (
        <Animated.View
          key={index}
          style={[styles.selectedDot, { width: animatedValues[index] }]}
        />
      ))}
    </View>
  );
};

export default Pagination;
