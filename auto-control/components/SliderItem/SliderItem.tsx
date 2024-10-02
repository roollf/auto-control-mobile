//React and React Native imports
import React from "react"
import { View, Text } from "react-native"

//Third party Libraries
import LottieView from "lottie-react-native"

//Project Resources
import styles from "./SliderItem.styles"

//Types Imports
import SliderItemProps from "./SliderItem.types"

const SliderItem = ({ item }: SliderItemProps) => {
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
  )
}

export default SliderItem
