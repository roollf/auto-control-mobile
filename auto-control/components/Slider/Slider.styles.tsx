import { StyleSheet, Dimensions } from "react-native"

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get("window")
export const ITEM_WIDTH = screenWidth * 0.8 // Each item takes 80% of the screen width
export const SPACER_WIDTH = (screenWidth - ITEM_WIDTH) / 2 // Calculate padding on each side

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  list: {
    alignItems: "center",
  },
  authContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 20,
    paddingBottom: 60,
  },
  authLoginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerTextContainer: {
    paddingRight: 20,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    minHeight: 20,
  },
  headerText: {
    color: "white",
    textAlign: "right",
    fontWeight: "600",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  separator: {
    paddingBottom: screenHeight <= 640 ? 50 : 100,
  },
})

export default styles
