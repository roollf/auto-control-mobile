// import from react and hooks
import React from "react";

// import from react native and expo
import { View, Text, TextInput, Pressable } from "react-native";
import { router } from "expo-router";

// import from custom hooks

// import from context

// import from services

// import from third party libraries

// import from custom components
import { registerStyles } from "./auth.styles";
import AppInput from "@/components/AppInput/AppInput";
import AppButton from "@/components/appButton/appButton";

// import from images and svgs
import User from "../../assets/images/user.svg";

// color scheme and variables

export default function CreateAccount() {
  const handleSubmit = () => {
    // lógica para realizar o POST do cadastro do usuário e navegar para a tela de login ou para a home logado.
  };

  return (
    <View style={registerStyles.container}>
      <View style={registerStyles.upperContent}>
        <View style={registerStyles.headerContainer}>
          <Text style={registerStyles.headerTitle}>
            Crie sua conta Autocontrol
          </Text>
        </View>
      </View>
      <View style={registerStyles.middleContent}>
        <View style={registerStyles.inputContainer}>
          <AppInput placeholder="Nome Completo" />
          <AppInput placeholder="Email" />
          <AppInput placeholder="CNH" />
          <AppInput placeholder="Senha" />
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
              router.back();
            }}
          />
        </View>
      </View>
    </View>
  );
}
