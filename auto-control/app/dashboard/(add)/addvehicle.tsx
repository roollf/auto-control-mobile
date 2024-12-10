import React from "react"
import { useSession } from "@/contexts/ctx"
import { Picker } from "@react-native-picker/picker"
import { View, Text, TextInput, Pressable, Alert } from "react-native"
import {
  VehicleBrand,
  VehicleData,
  VehicleType,
} from "@/types/vehicle/vehicle.type"
import { VehicleService } from "@/api/services/vehicleService"
import { ScrollView } from "react-native-gesture-handler"
import { router, useFocusEffect } from "expo-router"

const VehicleBrandMock: VehicleBrand[] = [
  { id: 1, name: "Volkswagen" },
  { id: 2, name: "Chevrolet" },
  { id: 3, name: "Fiat" },
  { id: 4, name: "Ford" },
  { id: 5, name: "Toyota" },
  { id: 6, name: "Honda" },
  { id: 7, name: "Hyundai" },
  { id: 8, name: "Renault" },
  { id: 9, name: "Nissan" },
  { id: 10, name: "Jeep" },
  { id: 11, name: "Peugeot" },
  { id: 12, name: "Citroën" },
  { id: 13, name: "Mercedes-Benz" },
  { id: 14, name: "BMW" },
  { id: 15, name: "Audi" },
  { id: 16, name: "Kia" },
  { id: 17, name: "Volvo" },
  { id: 18, name: "Mitsubishi" },
  { id: 19, name: "Land Rover" },
  { id: 20, name: "Jaguar" },
]

const VehicleTypeMock: VehicleType[] = [
  { id: 1, name: "Carro" },
  { id: 2, name: "Moto" },
  { id: 3, name: "Caminhão" },
  { id: 4, name: "Carreta" },
  { id: 5, name: "MotorHome" },
]

export default function AddVehicle() {
  const { session } = useSession()

  const [selectedVehicleBrand, setSelectedVehicleBrand] =
    React.useState<number>()
  const [selectedVhicleType, setSelectedVhicleType] = React.useState<number>()
  const [vehicleName, setVehicleName] = React.useState<string>("")
  const [vehiclePlate, setVehiclePlate] = React.useState<string>("")
  const [vehicleYear, setVehicleYear] = React.useState<number>()
  const [vehicleDescription, setVehicleDescription] = React.useState<string>("")

  useFocusEffect(
    React.useCallback(() => {
      clearForm() // Clear the form when the user navigates to the "Add Expense" tab
    }, [])
  )

  const handleSubmit = async () => {
    if (session?.token && session?.user_id) {
      const { token: userToken, user_id } = session

      try {
        const vehicleData: VehicleData = {
          brand: selectedVehicleBrand ?? 1,
          license_plate: vehiclePlate,
          name: vehicleName,
          type: selectedVhicleType ?? 1,
          year: vehicleYear ?? 2021,
          owner: user_id,
          description: vehicleDescription,
        }

        const response = await VehicleService.createVehicle(
          vehicleData,
          userToken
        )

        Alert.alert("Veículo criado com sucesso!")
        router.replace("/dashboard/home")
        clearForm()
      } catch (error) {
        console.error("Error creating vehicle:", error)
        Alert.alert("Erro", "Falha ao criar veículo")
      }
    }
  }

  const clearForm = () => {
    setSelectedVehicleBrand(1)
    setSelectedVhicleType(1)
    setVehicleName("")
    setVehiclePlate("")
    setVehicleYear(2021)
    setVehicleDescription("")
  }

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          paddingHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <View>
          {/* Novo veículo */}
          <View style={{ marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              Novo veículo
            </Text>
          </View>
        </View>
        <View>
          {/* Vehicle brand picker */}
          <View style={{ gap: 8 }}>
            <Text>Marca do Veículo</Text>
            <View style={{ backgroundColor: "#eaeff4", borderRadius: 8 }}>
              <Picker
                selectedValue={selectedVehicleBrand}
                onValueChange={(itemValue) =>
                  setSelectedVehicleBrand(itemValue)
                }
              >
                {VehicleBrandMock.map(
                  (vehicleBrand: VehicleBrand, index: number) => (
                    <Picker.Item
                      key={index}
                      label={vehicleBrand.name}
                      value={vehicleBrand.id}
                    />
                  )
                )}
              </Picker>
            </View>
          </View>
          {/* Vehicle Type */}
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Modelo do Veículo</Text>
            <View style={{ backgroundColor: "#eaeff4", borderRadius: 8 }}>
              <Picker
                selectedValue={selectedVhicleType}
                onValueChange={(itemValue) => setSelectedVhicleType(itemValue)}
              >
                {VehicleTypeMock.map(
                  (VehicleType: VehicleType, index: number) => (
                    <Picker.Item
                      key={index}
                      label={VehicleType.name}
                      value={VehicleType.id}
                    />
                  )
                )}
              </Picker>
            </View>
          </View>
          {/* Vehicle Name */}
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Nome do Veículo</Text>
            <TextInput
              placeholder="Nome"
              value={vehicleName}
              onChangeText={(vehicleName) => setVehicleName(vehicleName)}
              style={{
                backgroundColor: "#eaeff4",
                height: 40,
                borderRadius: 8,
                padding: 8,
              }}
            />
          </View>
          {/* Vehicle Plate */}
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Placa do Veículo</Text>
            <TextInput
              placeholder="Placa"
              value={vehiclePlate}
              onChangeText={(vehiclePlate) => setVehiclePlate(vehiclePlate)}
              style={{
                backgroundColor: "#eaeff4",
                height: 40,
                borderRadius: 8,
                padding: 8,
              }}
            />
          </View>
          {/* Vehicle Year */}
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Ano do Veículo</Text>
            {/* TODO: adicionar date picker */}
            <TextInput
              placeholder="Ano"
              value={vehicleYear?.toString()}
              onChangeText={(vehicleYear) =>
                setVehicleYear(Number(vehicleYear))
              }
              style={{
                backgroundColor: "#eaeff4",
                height: 40,
                borderRadius: 8,
                padding: 8,
              }}
            />
          </View>
          {/* Description */}
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Descrição</Text>
            <TextInput
              placeholder="Descrição"
              value={vehicleDescription}
              onChangeText={(vehicleDescription) =>
                setVehicleDescription(vehicleDescription)
              }
              style={{
                backgroundColor: "#eaeff4",
                height: 40,
                borderRadius: 8,
                padding: 8,
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Pressable
              style={{
                width: "40%",
                height: 55,
                backgroundColor: "#abd871",
                borderRadius: 8,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                paddingHorizontal: 8,
              }}
              onPress={handleSubmit}
            >
              <Text
                style={{ fontSize: 24, color: "white", fontWeight: "bold" }}
              >
                Registrar
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
