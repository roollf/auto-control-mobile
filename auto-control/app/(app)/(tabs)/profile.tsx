import { Button, Text, TextInput, View } from "react-native"

import { useSession } from "../../../contexts/ctx"

import { FontAwesome5 } from "@expo/vector-icons"
import { useEffect, useState } from "react"

import { getUser } from "@/api/services"

export default function Profile() {
  const { signOut } = useSession()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cnh, setCnh] = useState("")

  useEffect(() => {}, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: "white",
      }}
    >
      <FontAwesome5 name="user-circle" size={100} color="gray" />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          alignSelf: "flex-start",
          marginLeft: 40,
        }}
      >
        Nome
      </Text>
      <TextInput
        style={{
          fontSize: 20,
          color: "gray",
          borderBottomWidth: 1,
          width: "80%",
        }}
        placeholder="Name"
        value={name}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          alignSelf: "flex-start",
          marginLeft: 40,
        }}
      >
        Email
      </Text>
      <TextInput
        style={{
          fontSize: 16,
          color: "gray",
          borderBottomWidth: 1,
          width: "80%",
        }}
        placeholder="Email"
        value={email}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          alignSelf: "flex-start",
          marginLeft: 40,
        }}
      >
        CNH
      </Text>
      <TextInput
        style={{
          fontSize: 16,
          color: "gray",
          borderBottomWidth: 1,
          width: "80%",
        }}
        placeholder="CNH"
        value={cnh}
      />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  )
}
