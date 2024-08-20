import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  paginationContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  selectedDot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    opacity: 0.5,
  },
  paginationDot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    opacity: 0.2,
  },
});

export default styles;
