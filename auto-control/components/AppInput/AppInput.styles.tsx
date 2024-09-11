import { StyleSheet } from "react-native"

const whereAmI = {
  borderColor: "red",
  borderWidth: 1,
}

const styles = StyleSheet.create({
  container: {
    // ...whereAmI,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
  },
  iconContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    resizeMode: "contain",
    paddingLeft: 10,
  },
  inputContainer: {
    flex: 5,
    height: "100%",
    justifyContent: "center",
    borderColor: "grey",
  },
})

export default styles
