import { useCallback, useEffect, useState } from "react"
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native"
import { Picker } from "@react-native-picker/picker"
import { ExpenseService } from "@/api/services/expenseService"
import DateTimePicker from "@react-native-community/datetimepicker"
import { Image } from "expo-image"
import calendar from "@/assets/images/calendar.svg"
import { useSession } from "@/contexts/ctx"
import { router, useFocusEffect } from "expo-router"

const ExpenseTypes = [
  { name: "Multa 👮" },
  { name: "Imposto 🔐" },
  { name: "Manutenção 🛠️" },
  { name: "Abastecimento ⛽" },
  { name: "Revisão 🛠️" },
]

export default function AddExpense() {
  const [vehicles, setVehicles] = useState([])
  const [vehicleId, setVehicleId] = useState<number>(1)
  const [typeId, setTypeId] = useState(1)
  const [typeName, setTypeName] = useState([])
  const [selectVehicle, setSelectedVehicle] = useState()
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [description, setDescription] = useState("")
  const [expenseName, setExpenseName] = useState("")
  const [value, setValue] = useState(0)
  const [formattedDate, setFormattedDate] = useState(formatDateToYYYYMMDD(date))

  const { session } = useSession() // Extract session context onc

  function formatDateToYYYYMMDD(date: Date): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0") // Add 1 to month since getMonth() is 0-indexed
    const day = String(date.getDate()).padStart(2, "0") // Pad with zero if day is a single digit

    return `${year}-${month}-${day}`
  }

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === "ios")
    setDate(currentDate)
    setFormattedDate(formatDateToYYYYMMDD(currentDate))
  }

  const showDatepicker = () => {
    setShow(true)
  }

  // Clear the form when the component (tab) is focused
  useFocusEffect(
    useCallback(() => {
      clearForm() // Clear the form when the user navigates to the "Add Expense" tab
    }, [])
  )

  const handleSubmit = async () => {
    if (session?.token) {
      const { token: userToken } = session

      // Log the details before making the request
      console.log({
        vehicleId,
        typeId,
        description,
        formattedDate, // Ensure it's formatted as YYYY-MM-DD
        value,
        expenseName,
        userToken,
      })

      try {
        const expenseData = await ExpenseService.createVehicleExpense(
          vehicleId, // Vehicle ID
          typeId, // Type of expense
          description, // Description
          formattedDate, // Ensure this is in "YYYY-MM-DD"
          value, // Expense value
          expenseName, // Name of the expense
          userToken // Bearer token
        )
        Alert.alert("Despesa adicionada com sucesso.")

        // Navigate to the home screen after submitting
        router.replace("/dashboard/home")

        // Clear the form after successful submission
        clearForm()
      } catch (error) {
        console.error(
          "Error creating expense:",
          error.response?.data || error.message
        )
        Alert.alert("Error", "Failed to create expense")
      }
    }
  }

  const clearForm = () => {
    setVehicleId(1)
    setTypeId(1)
    setDescription("")
    setFormattedDate(formatDateToYYYYMMDD(new Date())) // Reset to current date
    setValue(0)
    setExpenseName("")
  }

  useEffect(() => {
    if (session?.user_id && session?.token) {
      const { user_id, token } = session

      ExpenseService.getUserVehicles(user_id, token)
        .then((response) => {
          setVehicles(response)
        })
        .catch((error) => {
          console.error("Failed to get user vehicles", error)
        })
    }
    setTypeName(ExpenseTypes)
  }, [session])

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
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>
              Nova despesa
            </Text>
          </View>
          {/* Vehicle Picker */}
          <View style={{ gap: 8 }}>
            <Text>Veículo</Text>
            <View style={{ backgroundColor: "#eaeff4", borderRadius: 8 }}>
              <Picker
                selectedValue={selectVehicle}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedVehicle(itemValue)
                }
              >
                {vehicles.map((vehicle) => (
                  <Picker.Item
                    key={vehicle.id}
                    label={vehicle.name}
                    value={vehicle.id}
                  />
                ))}
              </Picker>
            </View>
          </View>
          {/* Expense Name */}
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Título da despesa</Text>
            <TextInput
              placeholder="Título"
              value={expenseName} // Controlled input
              onChangeText={(text) => setExpenseName(text)}
              style={{
                backgroundColor: "#eaeff4",
                height: 40,
                borderRadius: 8,
                padding: 8,
              }}
            />
          </View>
          {/* Expense Type Picker */}
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Tipo de despesa</Text>
            <View style={{ backgroundColor: "#eaeff4", borderRadius: 8 }}>
              <Picker
                selectedValue={typeId}
                onValueChange={(itemValue, itemIndex) => {
                  // console.log("tipo", itemValue)
                  setTypeId(itemValue)
                }}
              >
                {typeName.map((type, index) => (
                  <Picker.Item
                    key={index}
                    label={type.name}
                    value={index + 1}
                  />
                ))}
              </Picker>
            </View>
          </View>
          {/* Date Picker */}
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Data</Text>
            <Pressable
              style={{
                width: "40%",
                height: 40,
                backgroundColor: "#eaeff4",
                borderRadius: 8,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                paddingHorizontal: 14,
              }}
              onPress={showDatepicker}
            >
              <Image
                source={calendar}
                alt="calendar"
                style={{ width: 20, height: 20 }}
              />
              <Text>{date.toLocaleDateString("pt-BR")}</Text>
            </Pressable>

            {show && (
              <DateTimePicker
                locale="pt-BR"
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}
          </View>
          {/* Description */}
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Descrição da despesa</Text>
            <TextInput
              value={description} // Controlled input
              onChangeText={(text) => setDescription(text)}
              placeholder="Descrição"
              style={{
                backgroundColor: "#eaeff4",
                height: 40,
                borderRadius: 8,
                padding: 8,
              }}
            />
          </View>
          {/* Value */}
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Valor</Text>
            <TextInput
              value={value.toString()} // Convert number to string
              onChangeText={(text) => setValue(Number(text))}
              inputMode="numeric"
              placeholder="Valor R$"
              style={{
                backgroundColor: "#eaeff4",
                height: 40,
                borderRadius: 8,
                padding: 8,
              }}
            />
          </View>
          {/* Submit Button */}
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
