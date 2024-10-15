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
    borderRightWidth: 0,
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
    justifyContent: "space-between",
    borderColor: "grey",
    display: "flex",
    flexDirection: "row",
    borderRadius: 8,
  },
  eyeContainer: {
    height: 38,
    justifyContent: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: "lightgray",
    borderWidth: 1,
    borderLeftWidth: 0,
    paddingRight: 12,
    borderRightWidth: 1,
  },
})

export default styles
