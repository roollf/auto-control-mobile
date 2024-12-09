// import from react and hooks

// import from react native and expo
import { Text, View } from "react-native"

// import from custom hooks

// import from context

// import from services

// import from third party libraries
import LottieView from "lottie-react-native"

// import from custom components
import AppButton from "@/components/appButton/appButton"

// import from types, utils and constants

// import from styles
import { registerConfirmationStyles } from "../../../styles/register.styles"

// import from routes

// import from images and svgs
import ConfirmationAnimation from "@/assets/images/confirmation-animation.json"
import { router } from "expo-router"

// color scheme and variables

export default function RegisterConfirmation() {
  return (
    <View style={registerConfirmationStyles.container}>
      <View style={registerConfirmationStyles.upperContent}>
        <LottieView
          source={ConfirmationAnimation}
          style={registerConfirmationStyles.upLottieView}
          autoPlay={true}
          loop={false}
        />
      </View>
      <View style={registerConfirmationStyles.middleContent}>
        <Text style={registerConfirmationStyles.midLabel}>
          Sua conta foi criada com sucesso!{" "}
        </Text>
        <Text style={registerConfirmationStyles.midSubLabel}>
          Aguarde para ser redirecionado para o Login...
        </Text>
      </View>
      <View style={registerConfirmationStyles.bottomContent}>
        <AppButton label="Ir para o Login" destination={() => router.replace("/auth/login")} />
      </View>
    </View>
  )
}
