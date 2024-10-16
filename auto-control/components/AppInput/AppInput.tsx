// Import React
import React from "react"

// React and React Native Imports
import { Text, TextInput, View, TextInputProps, Pressable } from "react-native"

// Project Resources
import styles from "./AppInput.styles"

import { Entypo } from "@expo/vector-icons"

interface AppInputProps extends TextInputProps {
  placeholder: string
  icon?: React.ReactNode
  handleShowPassword?: () => void
  passwordInput?: boolean
  showPassword?: boolean
}

export default function AppInput({
  placeholder,
  icon,
  passwordInput,
  handleShowPassword,
  showPassword,
  ...props
}: AppInputProps) {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <View style={styles.inputContainer}>
        <TextInput
          style={{ paddingLeft: 10, width: "86%" }}
          placeholder={placeholder}
          {...props}
        />
        <Pressable style={styles.eyeContainer} onPress={handleShowPassword}>
          {passwordInput ? (
            showPassword ? (
              <Entypo
                name="eye-with-line"
                size={20}
                color="rgba(34, 130, 255, 0.7)"
              />
            ) : (
              <Entypo name="eye" size={20} color="rgba(34, 130, 255, 0.7)" />
            )
          ) : null}
        </Pressable>
      </View>
    </View>
  )
}
