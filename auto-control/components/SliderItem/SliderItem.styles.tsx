import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
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
    width: 400,
    height: 400,
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
});

export default styles;
