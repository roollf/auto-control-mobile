import { Text, View } from "react-native"
import LottieView from "lottie-react-native"
import ConfirmationAnimation from "@/assets/images/confirmation-animation.json"
import AppButton from "@/components/appButton/appButton"

export default function RegisterConfirmation() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        source={ConfirmationAnimation}
        style={{ width: 300, height: 300 }}
        autoPlay
        loop={false}
      />
      <Text style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}>
        Sua conta foi criada com sucesso!{" "}
      </Text>
      <Text style={{ marginVertical: 40, opacity: 0.4 }}>
        Aguarde para ser redirecionado para o Login...
      </Text>
      <AppButton label="Ir para o Login" destination={() => {}} />
    </View>
  )
}
