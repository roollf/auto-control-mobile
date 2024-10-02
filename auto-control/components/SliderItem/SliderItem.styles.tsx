import { StyleSheet, Platform } from "react-native"
import { ITEM_WIDTH } from "../Slider/Slider.styles"

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginLeft: 40,
    marginRight: 40,
  },
  imageContainer: {
    alignItems: "center",
    width: "100%",
  },
  textContentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Platform.OS === "ios" ? "100%" : "100%",
    height: 300,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    maxWidth: "80%",
    marginTop: 10,
  },
})

export default styles
