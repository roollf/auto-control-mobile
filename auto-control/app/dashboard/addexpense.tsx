import { useCallback, useEffect, useState } from "react"
import { Alert, Platform, Pressable, Text, TextInput, View } from "react-native"
import { ExpenseService } from "@/api/services/expenseService"
import DateTimePicker from "@react-native-community/datetimepicker"
import { Image } from "expo-image"
import calendar from "@/assets/images/calendar.svg"
import { useSession } from "@/contexts/ctx"
import { router, useFocusEffect } from "expo-router"
import RNPickerSelect from "react-native-picker-select"

export default function AddExpense() {
  const [vehicleName, setVehicleName] = useState("")
  const [vehicleId, setVehicleId] = useState<number>(1)
  const [typeId, setTypeId] = useState(1)
  const [typeName, setTypeName] = useState("Multa 👮")
  const [selectVehicle, setSelectedVehicle] = useState()
  const [selectType, setSelectType] = useState()
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

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === "ios")
    setDate(currentDate)
    setFormattedDate(formatDateToYYYYMMDD(currentDate))
  }

  const showDatepicker = () => {
    setShow(true)
  }

  useFocusEffect(
    useCallback(() => {
      clearForm()
    }, [])
  )

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

  const clearForm = () => {
    setVehicleId(1)
    setTypeId(1)
    setDescription("")
    setFormattedDate(formatDateToYYYYMMDD(new Date()))
    setValue(0)
    setExpenseName("")
  }

  useEffect(() => {
    if (session?.user_id && session?.token) {
      const { user_id, token } = session
      console.log(token, "token sent")

      ExpenseService.getUserVehicles(user_id, token)
        .then((response) => {
          console.log("RESPONSE VEHICLES", response)
          if (response[0]?.name && response[0]?.id) {
            setVehicleName(response[0].name)
            setVehicleId(response[0].id)
          }
        })
        .catch((error) => {
          console.error("Failed to get user vehicles", error)
        })
    }
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
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Football", value: "football" },
              { label: "Baseball", value: "baseball" },
              { label: "Hockey", value: "hockey" },
            ]}
          />
        </View>
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
        <View style={{ marginTop: 12, gap: 8 }}>
          <Text>Tipo de despesa</Text>
        </View>
        <View style={{ backgroundColor: "#eaeff4", borderRadius: 8 }}></View>
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
