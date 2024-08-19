import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import styles from "../SliderItem/SliderItem.styles";

const SliderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LottieView source={item.image} style={styles.image} autoPlay loop />
      </View>
      <View style={styles.textContentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SliderItem;
