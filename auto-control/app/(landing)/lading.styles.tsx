import { StyleSheet, Dimensions } from "react-native"

const height = Dimensions.get("window").height

console.log(height, "height")

const whereAmI = {
  borderColor: "red",
  borderWidth: 1,
}

const landingStyles = StyleSheet.create({
  container: {
    // ...whereAmI,
    flex: 1,
  },
  linearGradientContainer: { paddingTop: height <= 640 ? 10 : 20 },
  upperContent: {},
  middleContent: {},
  bottomContent: {},
})

export default landingStyles
