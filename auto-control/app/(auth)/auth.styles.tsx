import { StyleSheet } from "react-native"

const whereAmI = {
  borderColor: "red",
  borderWidth: 1,
}

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
    height: "60%",
  },
  loginTextContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
  },
  loginTitle: {
    fontWeight: "bold",
    fontSize: 36,
    textAlign: "left",
  },
  loginSubtitle: {
    textAlign: "left",
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
  },
  socialImage: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  inputsContainer: {
    width: "100%",
    display: "flex",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
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
})

const registerStyles = StyleSheet.create({
  container: {
    // ...whereAmI,
    flex: 1,
    gap: 20,
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  upperContent: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    width: "100%",
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: "light",
    opacity: 0.4,
  },
  middleContent: {
    // ...whereAmI,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  inputContainer: {
    // ...whereAmI,
    alignItems: "center",
    width: "100%",
    gap: 20,
  },
  bottomContent: {
    // ...whereAmI,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    // ...whereAmI,
    alignItems: "center",
    gap: 16,
  },
})

const recoverStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
})

export { loginStyles, registerStyles, recoverStyles }
