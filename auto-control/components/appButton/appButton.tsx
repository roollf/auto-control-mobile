//React and React Native imports
import { Pressable, Text, View } from "react-native"

//Project Resources
import buttonStyles from "./appButton.styles"
import { ButtonProps } from "./appButton.types"

export default function AppButton({
  label,
  destination,
  isPrimary = true,
  backgroundColor = "#2282FF",
  ...props
}: ButtonProps) {
  const styles = buttonStyles({ isPrimary, backgroundColor })

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttonContainer}
        onPress={destination}
        {...props}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}
