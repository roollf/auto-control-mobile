import { StyleSheet } from "react-native";

const whereAmI = {
  borderColor: "red",
  borderWidth: 1,
};

const loginStyles = StyleSheet.create({
  container: {
    ...whereAmI,
    display: "flex",
    flex: 1,
  },
  upperContent: {},
  upperContentTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  middleContent: {},
  middleContentInput: {},
  bottomContent: {},
});

const registerStyles = StyleSheet.create({
  container: {
    ...whereAmI,
    display: "flex",
    flex: 1,
  },
  header: {
    display: "flex",
    flex: 1,
  },
  upperContent: {},
  middleContent: {},
  inputContainer: {},
  bottomContent: {},
  buttonContainer: {},
});

const recoverStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  upperContent: {},
  middleContent: {},
  bottomContent: {},
});

export { loginStyles, registerStyles, recoverStyles };
