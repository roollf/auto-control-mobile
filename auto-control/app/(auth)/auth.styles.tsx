import { StyleSheet } from "react-native";

const whereAmI = {
  borderColor: "red",
  borderWidth: 1,
};

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  upperContent: {
    // ...whereAmI,
  },
  header: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: "700",
  },
  middleContent: {
    // ...whereAmI,
    justifyContent: "center",
    gap: 20,
    flex: 2,
  },
  midUpContent: {
    // ...whereAmI,
    alignItems: "center",
    gap: 10,
  },
  midUpTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
  midUpSubtitle: {
    fontSize: 14,
    fontWeight: "300",
  },
  inputContainer: {
    // ...whereAmI,
    alignItems: "center",
    gap: 10,
  },
  midBotContainer: {
    // ...whereAmI,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  midBotText: {
    fontSize: 14,
    fontWeight: "300",
  },
  checkContainer: {
    flexDirection: "row",
    gap: 10,
  },
  checkText: {
    fontSize: 14,
    fontWeight: "300",
  },
  bottomContent: {
    // ...whereAmI,
    justifyContent: "center",
    flex: 1,
    gap: 30,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 40,
  },
  socialImageContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 2,
    borderColor: "#f1f1f1",
    borderWidth: 2,
  },
  socialImage: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    // ...whereAmI,
    alignItems: "center",
    gap: 12,
  },
});

const registerStyles = StyleSheet.create({
  container: {
    // ...whereAmI,
    flex: 1,
  },
  upperContent: {
    // ...whereAmI,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {},
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  middleContent: {
    // ...whereAmI,
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    // ...whereAmI,
    alignItems: "center",
    width: "80%",
    gap: 20,
  },
  bottomContent: {
    // ...whereAmI,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    // ...whereAmI,
    alignItems: "center",
    gap: 16,
  },
});

const recoverStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContent: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  headerSubTitle: {
    fontSize: 14,
    fontWeight: "light",
  },
  middleContent: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    alignItems: "center",
    width: "80%",
    gap: 20,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    gap: 20,
  },
});

export { loginStyles, registerStyles, recoverStyles };
