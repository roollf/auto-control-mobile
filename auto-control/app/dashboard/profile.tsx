import { Button, Text, TextInput, View, ScrollView } from "react-native"

import { useSession } from "@/contexts/ctx"

import { FontAwesome5 } from "@expo/vector-icons"
import React from "react"

import { UserService } from "@/api/services"

import { UserData } from "@/types/user/user.type"
import { VehicleService } from "@/api/services/vehicleService"

import AppInput from "@/components/AppInput/AppInput"

const UserMock: { id: number; name: string; email: string; cnh: string } = {
  id: 1,
  name: "Rolf Freitas Matela",
  email: "rolf.matela@gmail.com",
  cnh: "123456789",
}

const VehicleMock = [
  {
    id: 1,
    brand: "Volkswagen",
    model: "Gol",
    year: 2019,
    plate: "ABC-1234",
  },
  {
    id: 2,
    brand: "Chevrolet",
    model: "Onix",
    year: 2020,
    plate: "DEF-5678",
  },
  {
    id: 3,
    brand: "Ford",
    model: "Ka",
    year: 2018,
    plate: "GHI-9101",
  },
]

export default function Profile() {
  const { session, signOut } = useSession()

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [cnh, setCnh] = React.useState("")
  const [vehicles, setVehicles] = React.useState<
    {
      id: number
      brand: string
      model: string
      year: number
      plate: string
    }[]
  >([])

  // chamada para a API

  const fetchUserData = async () => {
    if (session?.user_id) {
      const { user_id } = session
      try {
        const response: UserData = await UserService.getUser(user_id)
        setName(response.name)
        setEmail(response.email)
        setCnh(response.cnh)
      } catch (error) {
        console.error("Error fetching user data: ", error)
      }
    }
  }

  const fetchVehicleData = async () => {
    if (session?.token) {
      const { token: userToken } = session
      try {
        const response = await VehicleService.getVehicles(userToken)
        setVehicles(response)
      } catch (error) {
        console.error("Error fetching vehicle data: ", error)
      }
    }
  }

  React.useEffect(() => {
    // fetchUserData()
    // fetchVehicleData()
    setName(UserMock.name)
    setEmail(UserMock.email)
    setCnh(UserMock.cnh)
    setVehicles(VehicleMock)
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: "white",
      }}
    >
      <FontAwesome5 name="user-circle" size={100} color="gray" />
      <View
        style={{
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <AppInput
          icon={
            <FontAwesome5
              name="user-circle"
              size={20}
              color="rgba(34, 130, 255, 0.7)"
            />
          }
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View
        style={{
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <AppInput
          icon={
            <FontAwesome5 name="at" size={20} color="rgba(34, 130, 255, 0.7)" />
          }
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View
        style={{
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <AppInput
          icon={
            <FontAwesome5
              name="id-badge"
              size={20}
              color="rgba(34, 130, 255, 0.7)"
            />
          }
          placeholder="CNH"
          value={cnh}
          onChangeText={setCnh}
        />
      </View>
      <View
        style={{
          width: "80%",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Veículos
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          alignItems: "flex-start",
          justifyContent: "center",
          alignSelf: "center",
          borderColor: "lightgrey",
          borderWidth: 1,
          padding: 10,
        }}
      >
        {vehicles.map((vehicle, index) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: 2,
            }}
          >
            <FontAwesome5
              name="car"
              size={20}
              color="rgba(34, 130, 255, 0.7)"
            />
            <Text>
              {vehicle.model} {vehicle.brand} - {vehicle.plate}
            </Text>
          </View>
        ))}
      </View>
      <Button title="Logout" onPress={signOut} />
    </ScrollView>
  )
}
