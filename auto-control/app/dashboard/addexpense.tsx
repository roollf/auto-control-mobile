import { useCallback, useEffect, useState } from "react"
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { ExpenseService } from "@/api/services/expenseService"
import DateTimePicker from "@react-native-community/datetimepicker"
import { useSession } from "@/contexts/ctx"
import { router, useFocusEffect } from "expo-router"
import RNPickerSelect from "react-native-picker-select"
import { ExpenseType } from "@/types/expense/expense.type"
import CurrencyInput from "react-native-currency-input"

interface Vehicle {
  id: number
  name: string
}

export default function AddExpense() {
  const [vehicleId, setVehicleId] = useState<number>(0)
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [typeId, setTypeId] = useState(0)
  const [expenseTypes, setExpenseTypes] = useState<ExpenseType[]>([])
  const [date, setDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [description, setDescription] = useState("")
  const [expenseName, setExpenseName] = useState("")
  const [value, setValue] = useState(0)
  const [formattedDate, setFormattedDate] = useState(formatDateToYYYYMMDD(date))

  const { session } = useSession()

  function formatDateToYYYYMMDD(date: Date): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
  }

  const clearForm = () => {
    setVehicleId(0) // Reset vehicle ID
    setTypeId(0) // Reset expense type
    setDescription("") // Clear description
    setFormattedDate(formatDateToYYYYMMDD(new Date())) // Reset date
    setValue(0) // Reset value
    setExpenseName("") // Clear expense name
  }

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date
    setShowDatePicker(false)
    setDate(currentDate)
    setFormattedDate(formatDateToYYYYMMDD(currentDate))
  }

  const handleSubmit = async () => {
    if (session?.token) {
      const { token: userToken } = session
      try {
        const expenseData = await ExpenseService.createVehicleExpense(
          vehicleId,
          typeId,
          description,
          formattedDate,
          value,
          expenseName,
          userToken
        )
        Alert.alert(
          "Despesa adicionada com sucesso ✅",
          `ID: ${expenseData.id}`
        )

        clearForm()
        router.replace("/dashboard/home")
      } catch (error) {
        console.error(
          "Error creating expense:",
          error.response?.data || error.message
        )
        Alert.alert("Error", "Preencha todos os campos ❌")
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      clearForm()
    }, [])
  )

  useEffect(() => {
    const fetchUserVehicles = async () => {
      if (session?.user_id && session?.token) {
        const { user_id, token } = session
        try {
          const response = await ExpenseService.getUserVehicles(user_id, token)
          console.log("Vehicles:", response)
          setVehicles(response)
        } catch (error) {
          console.error("Failed to get user vehicles", error)
        }
      }
    }
    fetchUserVehicles()
  }, [session])

  useEffect(() => {
    const fetchExpenseTypes = async () => {
      if (session?.token) {
        const { token } = session
        try {
          const response = await ExpenseService.getExpenseTypes(token)
          console.log("Expense Types:", response)
          setExpenseTypes(response)
        } catch (error) {
          console.error("Failed to get expense types", error)
        }
      }
    }
    fetchExpenseTypes()
  }, [session])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          paddingHorizontal: 20,
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <View>
          <View style={{ marginBottom: 40 }}>
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>
              Nova despesa 📝
            </Text>
          </View>
          <Text>Selecione seu veículo</Text>
          <View
            style={{
              backgroundColor: "#eaeff4",
              borderRadius: 8,
              marginTop: 12,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 8,
            }}
          >
            <RNPickerSelect
              style={{ inputAndroid: { fontSize: 16 } }}
              placeholder={{
                label: "Selecione um veículo",
                value: 0,
                color: "gray",
              }}
              value={vehicleId} // Bind value to state
              onValueChange={(value) => setVehicleId(value)}
              items={
                Array.isArray(vehicles)
                  ? vehicles.map((vehicle) => ({
                      label: vehicle.name,
                      value: vehicle.id,
                    }))
                  : []
              }
            />
          </View>
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Título da despesa</Text>
            <TextInput
              maxLength={50}
              placeholder="Título"
              value={expenseName}
              onChangeText={(text) => setExpenseName(text)}
              style={{
                backgroundColor: "#eaeff4",
                height: 40,
                borderRadius: 8,
                padding: 8,
              }}
            />
          </View>
          <Text>Tipo de despesa</Text>
          <View
            style={{
              backgroundColor: "#eaeff4",
              borderRadius: 8,
              marginTop: 12,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 8,
            }}
          >
            <RNPickerSelect
              style={{ inputAndroid: { fontSize: 16 } }}
              placeholder={{
                label: "Selecione um tipo de despesa",
                value: 0,
                color: "gray",
              }}
              value={typeId} // Bind value to state
              onValueChange={(value) => setTypeId(value)}
              items={
                Array.isArray(expenseTypes)
                  ? expenseTypes.map((expenseType) => {
                      let emoji = ""
                      switch (expenseType.name) {
                        case "Multa":
                          emoji = "👮"
                          break
                        case "Imposto":
                          emoji = "💸"
                          break
                        case "Manutenção":
                          emoji = "🔧"
                          break
                        case "Abastecimento":
                          emoji = "⛽"
                          break
                        case "Revisão":
                          emoji = "🛠️"
                          break
                        default:
                          emoji = "💼"
                      }
                      return {
                        label: `${emoji} ${expenseType.name}`,
                        value: expenseType.id,
                      }
                    })
                  : []
              }
            />
          </View>
          <View style={{ backgroundColor: "#eaeff4", borderRadius: 8 }}></View>
          {Platform.OS === "android" ? (
            <>
              <View
                style={{
                  marginTop: 12,
                  gap: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text>Data</Text>
                <Pressable
                  onPress={() => setShowDatePicker(true)}
                  style={{
                    backgroundColor: "#eaeff4",
                    borderRadius: 8,
                    padding: 8,
                  }}
                >
                  <Text>{formattedDate}</Text>
                </Pressable>
              </View>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                  locale="pt-BR"
                />
              )}
            </>
          ) : (
            <>
              <View
                style={{
                  marginTop: 12,
                  gap: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text>Data</Text>
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                  locale="pt-BR"
                />
              </View>
            </>
          )}

          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Descrição da despesa</Text>
            <TextInput
              value={description}
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
          <View style={{ marginTop: 12, gap: 8 }}>
            <Text>Valor</Text>
            <CurrencyInput
              style={{
                backgroundColor: "#eaeff4",
                height: 40,
                borderRadius: 8,
                padding: 8,
              }}
              value={value}
              onChangeValue={setValue}
              prefix="R$ "
              delimiter="."
              separator=","
              precision={2}
              minValue={0}
              maxValue={100000}
            />
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 60,
            }}
          >
            <Pressable
              style={{
                width: "70%",
                height: 55,
                backgroundColor: "#FC6736",
                borderRadius: 40,
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
