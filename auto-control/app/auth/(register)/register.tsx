// import from react and hooks
import React, { useState } from "react"

// import from react native and expo
import { View, Text } from "react-native"
import { router } from "expo-router"
import { FontAwesome } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { Octicons } from "@expo/vector-icons"

// import from custom hooks

// import from context

// import from services
import { register } from "@/api/services/authService"

// import from third party libraries
import { Formik } from "formik"

// import from custom components
import AppInput from "@/components/AppInput/AppInput"
import AppButton from "@/components/appButton/appButton"

// import from types, utils and constants
import { RegisterUserData } from "@/types/user/user.type"
import { validationSchema } from "@/utils/formValidation"

// import from styles
import { registerStyles } from "../../../styles/register.styles"

// import from routes

// import from images and svgs

// color scheme and variables

interface CreateAccountProps {
  onRegisterSuccess: () => void
}

export default function CreateAccount({
  onRegisterSuccess,
}: CreateAccountProps) {
  const [formData, setFormData] = useState<RegisterUserData>({
    name: "",
    email: "",
    cnh: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFormSubmit = async () => {
    try {
      await register(formData)
      onRegisterSuccess()
    } catch (error) {
      console.log(error)
    }
  }

  const iconProps: { iconSize: number; iconColor: string } = {
    iconSize: 20,
    iconColor: "rgba(34, 130, 255, 0.7)",
  }

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
          <Formik
            initialValues={{ name: "", email: "", cnh: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            <View style={{ gap: 20 }}>
              <AppInput
                onChangeText={(text) => handleInputChange("name", text)}
                placeholder="Nome Completo"
                icon={
                  <FontAwesome5
                    name="user-circle"
                    size={iconProps.iconSize}
                    color={iconProps.iconColor}
                  />
                }
              />
              <AppInput
                onChangeText={(text) => handleInputChange("email", text)}
                placeholder="Email"
                autoCapitalize="none"
                icon={
                  <Entypo
                    name="email"
                    size={iconProps.iconSize}
                    color={iconProps.iconColor}
                  />
                }
              />
              <AppInput
                onChangeText={(text) => handleInputChange("cnh", text)}
                placeholder="CNH"
                icon={
                  <FontAwesome
                    name="drivers-license"
                    size={iconProps.iconSize}
                    color={iconProps.iconColor}
                  />
                }
              />
              <AppInput
                onChangeText={(text) => handleInputChange("password", text)}
                placeholder="Senha"
                icon={
                  <Octicons
                    name="key"
                    size={iconProps.iconSize}
                    color={iconProps.iconColor}
                  />
                }
              />
            </View>
          </Formik>
        </View>
      </View>
      <View style={registerStyles.bottomContent}>
        <View style={registerStyles.buttonContainer}>
          <AppButton label="Registrar" destination={() => handleFormSubmit()} />
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
