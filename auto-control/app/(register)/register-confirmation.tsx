import { Text, View } from "react-native"
import LottieView from "lottie-react-native"
import ConfirmationAnimation from "@/assets/images/confirmation-animation.json"

export default function RegisterConfirmation() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        source={ConfirmationAnimation}
        style={{ width: 200, height: 200 }}
        autoPlay
        loop
      />
      <Text>Register Confirmation </Text>
    </View>
  )
}
