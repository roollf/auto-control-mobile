import React from "react";
import { Text, View } from "react-native";

import AppInput from "@/app/components/AppInput/AppInput";
import Mail from "../../../assets/images/mail.svg";

import styles from "./Register.styles";

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Preencha seus dados</Text>
      </View>
      <View style={styles.formContainer}>
        <AppInput placeholder="Nome" icon={Mail} />
        {/* <AppInput placeholder="Email" icon={} />
        <AppInput placeholder="Senha" icon={} />
        <AppInput placeholder="Confirme sua senha" icon={} /> */}
      </View>
    </View>
  );
};

export default Register;
