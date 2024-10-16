import { useEffect, useState } from "react"
import { Platform, Pressable, Text, TextInput, View } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { expenseService } from "@/api/services/expenseService"
import AppInput from "@/components/AppInput/AppInput"
import DateTimePicker from "@react-native-community/datetimepicker"
import { Image } from "expo-image"
import calendar from "@/assets/images/calendar.svg"

export default function AddExpense() {
  const [selectVehicle, setSelectedVehicle] = useState()
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === "ios")
    setDate(currentDate)
  }

  const showDatepicker = () => {
    setShow(true)
  }

  useEffect(() => {
    expenseService.getUserExpenses
  })

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
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={{ marginTop: 12, gap: 8 }}>
          <Text>Título da despesa</Text>
          <TextInput
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
              paddingHorizontal: 8,
            }}
            onPress={showDatepicker}
          >
            <Image
              source={calendar}
              alt="calendar"
              style={{ width: 20, height: 20 }}
            />
            <Text>Escolha a data</Text>
          </Pressable>

          {show && (
            <DateTimePicker
              value={date}
              mode="date" // You can change this to "time" or "datetime"
              display="default" // Other options: "spinner", "calendar", "clock"
              onChange={onChange} // The function to handle the date change
            />
          )}
        </View>
        <View style={{ marginTop: 12, gap: 8 }}>
          <Text>Descrição da despesa</Text>
          <TextInput
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
            onPress={showDatepicker}
          >
            {/* <Image
              source={download}
              alt="calendar"
              style={{ width: 24, height: 24 }}
            /> */}
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
              Registrar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
