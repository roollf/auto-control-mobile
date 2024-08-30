// import from react and hooks
import React from "react";

// import from react native and expo
import { View, SafeAreaView, Text, TextInput, Pressable } from "react-native";
import { router } from "expo-router";

// import from custom hooks

// import from context

// import from services

// import from third party libraries

// import from custom components
import { registerStyles } from "./auth.styles";

// import from images and svgs

// color scheme and variables

export default function CreateAccount() {
  const handleSubmit = () => {
    // lógica para realizar o POST do cadastro do usuário e navegar para a tela de login ou para a home logado.
  };

  return (
    <View style={registerStyles.container}>
      <View style={registerStyles.upperContent}>
        <View style={registerStyles.header}>
          <Text>Crie sua conta Autocontrol</Text>
        </View>
      </View>
      <View style={registerStyles.middleContent}>
        <View style={registerStyles.inputContainer}>
          <TextInput placeholder="Nome Completo" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Carteira Nacional de Habilitação" />
          <TextInput placeholder="Senha" />
        </View>
      </View>
      <View style={registerStyles.bottomContent}>
        <View style={registerStyles.buttonContainer}>
          <Pressable onPress={handleSubmit}>
            <Text>Registrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
