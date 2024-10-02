// Import React
import React from "react"

// React and React Native Imports
import { Text, TextInput, View, TextInputProps } from "react-native"

// Project Resources
import styles from "./AppInput.styles"

interface AppInputProps extends TextInputProps {
  placeholder: string
  icon?: React.ReactNode
}

export default function AppInput({
  placeholder,
  icon,
  ...props
}: AppInputProps) {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <View style={styles.inputContainer}>
        <TextInput
          style={{ paddingLeft: 10 }}
          placeholder={placeholder}
          {...props}
        />
      </View>
    </View>
  )
}
