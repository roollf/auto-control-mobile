// React and React Native Imports
import React, { useRef, useEffect } from "react";
import { Animated, View } from "react-native";

// Project Resources
import styles from "./Pagination.styles";

// Type Imports
import PaginationProps from "./Pagination.types";

const Pagination = ({ Slides, SelectedDot }: PaginationProps) => {
  const animatedValues = useRef(
    Slides.map(() => new Animated.Value(10))
  ).current;

  useEffect(() => {
    animatedValues.forEach(
      (value: Animated.Value | Animated.ValueXY, index: number) => {
        Animated.timing(value, {
          toValue: SelectedDot === index ? 30 : 10,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    );
  }, [SelectedDot]);

  return (
    <View style={styles.paginationContainer}>
      {Slides.map((slide: object, index: number) => (
        <Animated.View
          key={index}
          style={[styles.selectedDot, { width: animatedValues[index] }]}
        />
      ))}
    </View>
  );
};

export default Pagination;
