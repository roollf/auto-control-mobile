import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { useSession } from "@/contexts/ctx";
import { loginStyles } from "./auth.styles";
import AppInput from "@/components/AppInput/AppInput";
import Checkbox from "expo-checkbox";
import AppButton from "@/components/appButton/appButton";
import User from "../../assets/images/user.svg";
import Google from "../../assets/images/google.png";
import Facebook from "../../assets/images/facebook.png";
import { FontAwesome5 } from "@expo/vector-icons";

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
          <View style={loginStyles.innerContainer}>
            <View style={loginStyles.welcomeTextContainer}>
              <Text style={loginStyles.welcomeText}>Seja bem-vindo,</Text>
            </View>
            <View style={loginStyles.middleContainer}>
              <View style={loginStyles.userTokenImageContainer}>
                <FontAwesome5 name="user-circle" size={52} color={"#2282FF"} />
              </View>
              <Text style={loginStyles.loginTitle}>
                Faça seu Login ou Registre-se
              </Text>
              <Text style={loginStyles.loginSubtitle}>
                Controle as despesas de seus veículos com AutoControl
              </Text>
            </View>
            <View style={loginStyles.inputsContainer}>
              <AppInput placeholder="E-mail" />
              <AppInput placeholder="Senha" />
            </View>
            <View style={loginStyles.forgotRememberContainer}>
              <View style={loginStyles.saveLoginContainer}>
                <Checkbox />
                <Text>Salvar login</Text>
              </View>
              <Pressable onPress={() => handleNavigate("recover")}>
                <Text>Esqueceu sua senha?</Text>
              </Pressable>
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
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
