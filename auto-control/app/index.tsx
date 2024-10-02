// import from react and hooks

// import from react native and expo
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { View } from "react-native"

// import from custom hooks

// import from context

// import from services

// import from third party libraries
import { LinearGradient } from "expo-linear-gradient"

// import from custom components
import Slider from "@/components/Slider/Slider"

// import from types, utils and constants

// import from styles
import landingStyles from "./lading.styles"

// import from routes

// import from images and svgs

// color scheme and variables

export default function Landing() {
  return (
    <>
      <GestureHandlerRootView>
        <View style={landingStyles.container}>
          <LinearGradient
            colors={["#2282FF", "#326aee"]}
            style={landingStyles.linearGradientContainer}
          >
            <Slider />
          </LinearGradient>
        </View>
      </GestureHandlerRootView>
    </>
  )
}
