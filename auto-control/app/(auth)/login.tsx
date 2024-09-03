// import from react and hooks

// import from react native and expo
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";
import { FontAwesome5 } from "@expo/vector-icons";

// import from custom hooks

// import from context
import { useSession } from "@/contexts/ctx";

// import from services

// import from third party libraries

// import from custom components
import { loginStyles } from "./auth.styles";
import AppInput from "@/components/AppInput/AppInput";
import AppButton from "@/components/appButton/appButton";

// import from images and svgs
import Google from "../../assets/images/google.png";
import Facebook from "../../assets/images/facebook.png";

// color scheme and variables

export default function Login() {
  const { signIn } = useSession();

  const handleNavigate = (route: "login" | "register" | "recover") => {
    const action: Record<typeof route, () => void> = {
      login: () => {
        signIn();
        router.replace("/(app)/home");
      },
      register: () => router.navigate("/register"),
      recover: () => router.navigate("/recover"),
    };

    action[route]();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={loginStyles.container}>
          <View style={loginStyles.upperContent}>
            <View style={loginStyles.header}>
              <Text style={loginStyles.headerTitle}>Seja bem-vindo,</Text>
            </View>
          </View>
          <View style={loginStyles.middleContent}>
            <View style={loginStyles.midUpContent}>
              <FontAwesome5 name="user-circle" size={52} color={"#2282FF"} />
              <Text>Faça seu Login ou Registre-se</Text>
              <Text>Controle as despesas de seus veículos com AutoControl</Text>
            </View>
            <View style={loginStyles.inputContainer}>
              <AppInput
                placeholder="E-mail"
                icon={
                  <FontAwesome5 name="user-circle" size={28} color="blue" />
                }
              />
              <AppInput
                placeholder="Senha"
                icon={
                  <FontAwesome5 name="user-circle" size={28} color="blue" />
                }
              />
            </View>
            <View style={loginStyles.midBotContainer}>
              <View style={loginStyles.checkContainer}>
                <Checkbox />
                <Text>Salvar login</Text>
              </View>
              <Pressable onPress={() => handleNavigate("recover")}>
                <Text>Esqueceu sua senha?</Text>
              </Pressable>
            </View>
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
              destination={() => handleNavigate("login")}
            />
            <AppButton
              label={"Registrar"}
              destination={() => handleNavigate("register")}
              isPrimary={false}
              backgroundColor="transparent"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
