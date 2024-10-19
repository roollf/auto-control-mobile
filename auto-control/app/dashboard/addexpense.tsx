import { useCallback, useEffect, useState } from "react"
import { Alert, Platform, Pressable, Text, TextInput, View } from "react-native"
import { ExpenseService } from "@/api/services/expenseService"
import DateTimePicker from "@react-native-community/datetimepicker"
import { useSession } from "@/contexts/ctx"
import { router, useFocusEffect } from "expo-router"
import RNPickerSelect from "react-native-picker-select"
import { ExpenseType } from "@/types/expense/expense.type"

interface Vehicle {
  id: number
  name: string
}

export default function AddExpense() {
  const [vehicleId, setVehicleId] = useState<number>(1)
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [typeId, setTypeId] = useState(1)
  const [expenseTypes, setExpenseTypes] = useState<ExpenseType[]>([])
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
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
    setVehicleId(1)
    setTypeId(1)
    setDescription("")
    setFormattedDate(formatDateToYYYYMMDD(new Date()))
    setValue(0)
    setExpenseName("")
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
        Alert.alert("Expense created successfully", `ID: ${expenseData.id}`)

        router.replace("/dashboard/home")

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
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingTop: 100,
        backgroundColor: "white",
      }}
    >
      <View>
        <View style={{ marginBottom: 40 }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Nova despesa</Text>
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
            onValueChange={(value) => setTypeId(value)}
            items={
              Array.isArray(expenseTypes)
                ? expenseTypes.map((expenseType) => {
                    let emoji = ""

                    // Add emojis based on the expenseType name
                    switch (expenseType.name) {
                      case "Multa":
                        emoji = "👮" // Traffic fine
                        break
                      case "Imposto":
                        emoji = "💸" // Tax
                        break
                      case "Manutenção":
                        emoji = "🔧" // Maintenance
                        break
                      case "Abastecimento":
                        emoji = "⛽" // Refueling
                        break
                      case "Revisão":
                        emoji = "🛠️" // Revision
                        break
                      default:
                        emoji = "💼" // Default for other types
                    }
                    return {
                      label: `${emoji} ${expenseType.name}`, // Add emoji before the name
                      value: expenseType.id,
                    }
                  })
                : []
            }
          />
        </View>
        <View style={{ backgroundColor: "#eaeff4", borderRadius: 8 }}></View>
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: 135,
              paddingLeft: 0,
            }}
          >
            <DateTimePicker
              style={{ marginLeft: -17 }}
              locale="pt-BR"
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          </View>
        </View>
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
          <TextInput
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
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
              Registrar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
