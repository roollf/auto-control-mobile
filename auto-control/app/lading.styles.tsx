import { StyleSheet } from "react-native";

const whereAmI = {
  borderColor: "red",
  borderWidth: 1,
};

const landingStyles = StyleSheet.create({
  container: {
    ...whereAmI,
    flex: 1,
  },
  upperContent: {},
  middleContent: {},
  bottomContent: {},
});

export default landingStyles;
