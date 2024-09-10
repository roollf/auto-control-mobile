// React and React Native imports
import { useState } from "react"
import { Text, View, Keyboard, TouchableWithoutFeedback } from "react-native"

// Third party Libraries
import { Image } from "expo-image"
import Checkbox from "expo-checkbox"
import { Formik } from "formik"

// Project Resources
import AppInput from "../../components/AppInput/AppInput"
import AppButton from "../../components/appButton/appButton"
import Google from "../../assets/images/google.png"
import Facebook from "../../assets/images/facebook.png"
import { loginStyles } from "./auth.styles"
import { Entypo } from "@expo/vector-icons"
import { Octicons } from "@expo/vector-icons"
import { validationSchema } from "@/utils/formValidation"
import { login } from "@/api/services"
import { LoginUserData } from "@/types/user/user.type"

const iconSize = 20

export default function Login() {
  const [formData, setFormData] = useState<LoginUserData>({
    username: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    console.log(field, value)
    setFormData({ ...formData, [field]: value })
  }

  const handleFormSubmit = () => {
    login(formData.username, formData.password)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={loginStyles.container}>
        <View style={loginStyles.innerContainer}>
          <View style={loginStyles.middleContainer}>
            <View style={loginStyles.loginTextContainer}>
              <Text style={loginStyles.loginTitle}>Faça seu Login 🚗</Text>
              <Text style={loginStyles.loginSubtitle}>
                <Text style={{ opacity: 0.4 }}>
                  Controle as despesas de seus veículos com o
                </Text>{" "}
                <Text style={{ fontWeight: "bold", opacity: 0.4 }}>
                  AutoControl
                </Text>{" "}
              </Text>
            </View>
          </View>
          <View style={loginStyles.inputsContainer}>
            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              <View style={{ gap: 20 }}>
                <AppInput
                  autoCapitalize="none"
                  onChangeText={(text) => handleInputChange("username", text)}
                  placeholder="Usuário"
                  icon={
                    <Entypo
                      name="email"
                      size={iconSize}
                      color="rgba(34, 130, 255, 0.7)"
                    />
                  }
                />
                <AppInput
                  onChangeText={(text) => handleInputChange("password", text)}
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
            </Formik>
          </View>
          <View style={loginStyles.forgotRememberContainer}>
            <View style={loginStyles.saveLoginContainer}>
              <Checkbox />
              <Text>Salvar login</Text>
            </View>
            <Text>Esqueceu sua senha?</Text>
          </View>
          <View style={loginStyles.separatorContainer}>
            <View style={loginStyles.separator}></View>
            <Text style={loginStyles.separatorText}>ou</Text>
            <View style={loginStyles.separator}></View>
          </View>
          <View style={loginStyles.bottomContainer}>
            <View style={loginStyles.socialContainer}>
              <Image source={Google} style={loginStyles.socialImage} />
            </View>
            <View style={loginStyles.socialContainer}>
              <Image source={Facebook} style={loginStyles.socialImage} />
            </View>
          </View>
          <View style={loginStyles.buttonContainer}>
            <AppButton
              label={"Entrar"}
              onPress={handleFormSubmit}
              destination={() => console.log("enviado")}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
