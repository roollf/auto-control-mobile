import { StyleSheet, Dimensions } from "react-native"

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "white",
  },
  upperContent: {
    position: "relative",
    display: "flex",
    paddingHorizontal: 30,
    paddingTop: 80,
    zIndex: 1,
  },
  userIcon: {
    width: 50,
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 100,
    padding: 2,
    borderWidth: 2,
    borderColor: "white",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
    paddingTop: 40,
    height: "100%",
    zIndex: 1,
    position: "relative",
  },

  userGreeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  userWelcome: {
    fontSize: 14,
    color: "white",
  },

  bellContainer: {},

  userAndGreeting: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    gap: 10,
    position: "relative",
  },
})

export default appStyles
