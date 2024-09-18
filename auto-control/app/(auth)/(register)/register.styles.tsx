import { StyleSheet } from "react-native"

const whereAmI = {
  borderColor: "red",
  borderWidth: 1,
}

export const registerStyles = StyleSheet.create({
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
    marginVertical: 20,
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

export const registerConfirmationStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  upperContent: {},
  upLottieView: {
    width: 300,
    height: 300,
  },
  middleContent: {},
  midLabel: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  midSubLabel: {
    marginVertical: 40,
    opacity: 0.4,
  },
  bottomContent: {},
})
