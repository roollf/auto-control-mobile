import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    display: "flex",
    height: "100%",
    alignItems: "center",
    backgroundColor: "grey",
    // paddingTop: 20,
    // gap: 60,
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
    paddingBottom: 20,
  },
  authLoginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerTextContainer: {
    paddingRight: 20,
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
});

export default styles;
