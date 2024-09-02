// React and React Native imports
import {
  Text,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

// Third party Libraries
import { Image } from "expo-image";
import Checkbox from "expo-checkbox";

// Project Resources
import AppInput from "../../../components/AppInput/AppInput";
import LoginButton from "../../../components/appButton/appButton";
import Google from "../../../assets/images/google.png";
import Facebook from "../../../assets/images/facebook.png";
import User from "../../../assets/images/user.svg";
import styles from "./Login.styles";

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Seja bem-vindo,</Text>
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.userTokenImageContainer}>
              <Image source={User} style={styles.userTokenImage} />
            </View>
            <Text style={styles.loginTitle}>Faça seu Login ou Registre-se</Text>
            <Text style={styles.loginSubtitle}>
              Controle as despesas de seus veículos com AutoControl
            </Text>
          </View>
          <View style={styles.inputsContainer}>
            <AppInput placeholder="E-mail" />
            <AppInput placeholder="Senha" />
          </View>
          <View style={styles.forgotRememberContainer}>
            <View style={styles.saveLoginContainer}>
              <Checkbox />
              <Text>Salvar login</Text>
            </View>
            <Text>Esqueceu sua senha?</Text>
          </View>
          <View style={styles.separatorContainer}>
            <View style={styles.separator}></View>
            <Text style={styles.separatorText}>ou</Text>
            <View style={styles.separator}></View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.socialContainer}>
              <Image source={Google} style={styles.socialImage} />
            </View>
            <View style={styles.socialContainer}>
              <Image source={Facebook} style={styles.socialImage} />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <LoginButton label={"Entrar"} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
