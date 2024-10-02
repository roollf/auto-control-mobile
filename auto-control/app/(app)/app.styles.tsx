import { StyleSheet, Dimensions } from "react-native"

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContent: {
    flex: 1,
    backgroundColor: "white",
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
    height: 180,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
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
