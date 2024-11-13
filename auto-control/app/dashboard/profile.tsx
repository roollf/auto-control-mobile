import { Button, Text, TextInput, View } from "react-native"

import { useSession } from "@/contexts/ctx"

import { FontAwesome5 } from "@expo/vector-icons"
import React from "react"

import { UserService } from "@/api/services"

import { UserData } from "@/types/user/user.type"

const UserMock: { id: number; name: string; email: string; cnh: string } = {
  id: 1,
  name: "Rolf Freitas Matela",
  email: "rolf.matela@gmail.com",
  cnh: "123456789",
}

export default function Profile() {
  const { signOut } = useSession()

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [cnh, setCnh] = React.useState("")

  const fetchUserData = async () => {
    try {
      const response: UserData = await UserService.getUser(UserMock.id)
      setName(response.name)
      setEmail(response.email)
      setCnh(response.cnh)
    } catch (error) {
      console.error("Error fetching user data: ", error)
    }
  }

  React.useEffect(() => {
    // fetchUserData()
    setName(UserMock.name)
    setEmail(UserMock.email)
    setCnh(UserMock.cnh)
  }, [])

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
          backgroundColor: "#eaeff4",
          height: 40,
          borderRadius: 8,
          padding: 8,
          width: "80%",
        }}
        placeholder="Nome"
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
          backgroundColor: "#eaeff4",
          height: 40,
          borderRadius: 8,
          padding: 8,
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
          backgroundColor: "#eaeff4",
          height: 40,
          borderRadius: 8,
          padding: 8,
          width: "80%",
        }}
        placeholder="CNH"
        value={cnh}
      />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  )
}
