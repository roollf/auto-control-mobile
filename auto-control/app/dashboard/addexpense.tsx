import { useEffect, useState } from "react"
import { Alert, Platform, Pressable, Text, TextInput, View } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { ExpenseService } from "@/api/services/expenseService"
import DateTimePicker from "@react-native-community/datetimepicker"
import { Image } from "expo-image"
import calendar from "@/assets/images/calendar.svg"
import { useSession } from "@/contexts/ctx"
import { ExpenseData } from "@/types/expense/expense.type"

export default function AddExpense() {
  const [vehicleName, setVehicleName] = useState("")
  const [vehicleId, setVehicleId] = useState<number>(0)
  const [typeId, setTypeId] = useState(1)
  const [typeName, setTypeName] = useState("Multa 👮")
  const [selectVehicle, setSelectedVehicle] = useState()
  const [selectType, setSelectType] = useState()
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [description, setDescription] = useState("")
  const [expenseName, setExpenseName] = useState("")
  const [value, setValue] = useState(0)
  const [formattedDate, setFormattedDate] = useState(
    date.toLocaleDateString("pt-BR")
  )

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === "ios")
    setDate(currentDate)
    setFormattedDate(currentDate.toLocaleDateString("pt-BR"))
  }

  const showDatepicker = () => {
    setShow(true)
  }

  const handleSubmit = async () => {
    const { session } = useSession()
    if (session?.token) {
      const userToken = session.token
      try {
        const expenseData: ExpenseData =
          await ExpenseService.createVehicleExpense(
            vehicleId,
            typeId,
            description,
            formattedDate,
            value,
            expenseName,
            userToken
          )
        Alert.alert("Expense created successfully", `ID: ${expenseData.id}`)
      } catch (error) {
        console.error("Error creating expense", error)
        Alert.alert("Error", "Failed to create expense")
      }
    }
  }

  const { session } = useSession()

  useEffect(() => {
    if (session?.user_id && session?.token) {
      ExpenseService.getUserVehicles(session.user_id, session.token)
        .then((response) => {
          console.log("RESPONSE VEHICLES", response)
          if (response[0]?.name && response[0]?.id) {
            setVehicleName(response[0].name)
            setVehicleId(response[0].id)
          }
        })
        .catch((error) => {
          console.error("Failed to get user vehicles")
        })
    }
  }, [])

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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>Selecione o veículo</Text>
          <Text style={{ paddingBottom: 14, fontSize: 26, marginLeft: 16 }}>
            🚗
          </Text>
        </View>
        <View style={{ backgroundColor: "#eaeff4", borderRadius: 8 }}>
          <Picker
            selectedValue={selectVehicle}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedVehicle(itemValue)
            }
          >
            <Picker.Item label={vehicleName} value={vehicleId} />
          </Picker>
        </View>
        <View style={{ marginTop: 12, gap: 8 }}>
          <Text>Título da despesa</Text>
          <TextInput
            placeholder="Título"
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
        <View style={{ backgroundColor: "#eaeff4", borderRadius: 8 }}>
          <Picker
            selectedValue={selectType}
            onValueChange={(itemValue, itemIndex) => setSelectType(itemValue)}
          >
            <Picker.Item label={typeName} value={typeId} />
          </Picker>
        </View>
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
            {/* <Image
              source={download}
              alt="calendar"
              style={{ width: 24, height: 24 }}
            /> */}
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
              Registrars
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
