import { StyleSheet } from "react-native";

const whereAmI = {
  borderColor: "red",
  borderWidth: 1,
};

const styles = StyleSheet.create({
  container: {
    // ...whereAmI,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 300,
  },
  iconContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputContainer: {
    flex: 5,
    height: "100%",
    justifyContent: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default styles;
