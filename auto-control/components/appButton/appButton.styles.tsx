import { StyleSheet } from "react-native"

interface StyleProps {
  isPrimary: boolean | undefined
  backgroundColor?: string
}

const whereAmI = {
  borderColor: "red",
  borderWidth: 1,
}

const buttonStyles = ({ isPrimary, backgroundColor }: StyleProps) =>
  StyleSheet.create({
    container: {
      // ...whereAmI,
      height: isPrimary ? 60 : 20,
      width: isPrimary ? 250 : 150,
    },
    buttonContainer: {
      // ...whereAmI,
      flex: 1,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isPrimary ? "#2282FF" : backgroundColor,
    },
    buttonLabel: {
      fontWeight: isPrimary ? "bold" : "light",
      fontSize: isPrimary ? 16 : 14,
      color: isPrimary ? "white" : "grey",
    },
  })

export default buttonStyles
