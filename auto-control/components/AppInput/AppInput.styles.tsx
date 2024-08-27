import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    // backgroundColor: "#f1f1f1",
    backgroundColor: "green",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: "90%",
    height: 40,
    paddingLeft: 10,
  },
  iconContainer: {
    backgroundColor: "blue",
    width: "10%",
    height: 40,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    opacity: 0.5,
  },
});

export default styles;
