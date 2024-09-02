import { StyleSheet } from "react-native";

const whereAmI = {
  borderColor: "red",
  borderWidth: 1,
};

const loginStyles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    width: "40%",
    backgroundColor: "black",
    opacity: 0.4,
    height: 1,
    marginTop: 40,
  },
  reference: {
    backgroundColor: "gray",
    borderRadius: 10,
    height: 6,
    width: "10%",
  },
  referenceFilled: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 6,
    width: "10%",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40%",
  },
  middleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "50%",
  },
  userTokenImageContainer: {
    marginBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  userTokenImage: {
    width: 30,
    height: 30,
  },
  loginTitle: {
    fontWeight: "semibold",
    fontSize: 24,
    textAlign: "center",
  },
  loginSubtitle: {
    opacity: 0.4,
    textAlign: "center",
    color: "#000000",
    marginTop: 20,
  },
  forgotRememberContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    opacity: 0.5,
  },
  separatorContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0.3,
  },
  separatorText: {
    paddingTop: 34,
    opacity: 0.4,
  },
  bottomContainer: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    marginTop: 40,
  },
  socialContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 100,
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 2,
    borderColor: "#f1f1f1",
    borderWidth: 2,
    marginBottom: 30,
  },
  socialImage: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    // ...whereAmI,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },
  inputsContainer: {
    marginTop: 20,
    width: "100%",
    gap: 20,
  },
  saveLoginContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "semibold",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 40,
    height: 50,
  },
  welcomeTextContainer: {
    paddingTop: 40,
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "flex-end",
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
