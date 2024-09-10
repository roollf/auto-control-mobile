// import from react and hooks
import React from "react"

// import from react native and expo
import { View, Text } from "react-native"
import { router } from "expo-router"

// import from custom hooks

// import from context

// import from services

// import from third party libraries

// import from custom components
import { registerStyles } from "./auth.styles"
import AppInput from "@/components/AppInput/AppInput"
import AppButton from "@/components/appButton/appButton"
import { FontAwesome5 } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { Octicons } from "@expo/vector-icons"

// import from images and svgs
import User from "../../assets/images/user.svg"

// color scheme and variables

export default function CreateAccount() {
  const handleSubmit = () => {
    // lógica para realizar o POST do cadastro do usuário e navegar para a tela de login ou para a home logado.
  }

  const iconSize = 20

  return (
    <View style={registerStyles.container}>
      <View style={registerStyles.upperContent}>
        <View style={registerStyles.headerContainer}>
          <Text style={registerStyles.headerTitle}>Registrar Conta 📝</Text>
          <Text style={registerStyles.headerSubtitle}>
            Registre-se agora e comece a utilizar tudo que o AutoControl tem a
            oferecer!
          </Text>
        </View>
      </View>
      <View style={registerStyles.middleContent}>
        <View style={registerStyles.inputContainer}>
          <AppInput
            placeholder="Nome Completo"
            icon={
              <FontAwesome5
                name="user-circle"
                size={iconSize}
                color="rgba(34, 130, 255, 0.7)"
              />
            }
          />
          <AppInput
            placeholder="Email"
            icon={
              <Entypo
                name="email"
                size={iconSize}
                color="rgba(34, 130, 255, 0.7)"
              />
            }
          />
          <AppInput
            placeholder="CNH"
            icon={
              <FontAwesome
                name="drivers-license"
                size={iconSize}
                color="rgba(34, 130, 255, 0.7)"
              />
            }
          />
          <AppInput
            placeholder="Senha"
            icon={
              <Octicons
                name="key"
                size={iconSize}
                color="rgba(34, 130, 255, 0.7)"
              />
            }
          />
        </View>
      </View>
      <View style={registerStyles.bottomContent}>
        <View style={registerStyles.buttonContainer}>
          <AppButton label="Registrar" destination={() => handleSubmit()} />
          <AppButton
            label="Voltar"
            isPrimary={false}
            backgroundColor="transparent"
            destination={() => {
              router.canGoBack()
                ? router.back()
                : router.replace("/(auth)/login")
            }}
          />
        </View>
      </View>
    </View>
  )
}
