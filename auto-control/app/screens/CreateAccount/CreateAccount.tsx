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
import styles from "./CreateAccount.styles";

// import from images and svgs

// color scheme and variables

export default function CreateAccount() {
  const handleSubmit = () => {
    // router.navigate("/login");
  };

  return (
      <View style={styles.container}>
        <View style={styles.upperContent}>
          <View style={styles.header}>
            <Text>Crie sua conta Autocontrol</Text>
          </View>
        </View>
        <View style={styles.middleContent}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Nome Completo" />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Carteira Nacional de Habilitação" />
            <TextInput placeholder="Senha" />
          </View>
        </View>
        <View style={styles.bottomContent}>
          <View style={styles.buttonContainer}>
            <Pressable onPress={handleSubmit}>
              <Text>Registrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
  );
}
