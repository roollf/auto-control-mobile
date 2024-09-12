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

export const recoverStyles = StyleSheet.create({
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
