import { useSession } from "@/contexts/ctx"
import { Picker } from "@react-native-picker/picker"
import { View, Text, TextInput, Pressable } from "react-native"

export default function AddVehicle() {
  const { session } = useSession()

  return (
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
            <Picker>
              <Picker.Item />
            </Picker>
          </View>
        </View>
        {/* Vehicle Name */}
        <View style={{ marginTop: 12, gap: 8 }}>
          <Text>Modelo do Veículo</Text>
          <TextInput
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
          <TextInput
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
            onPress={() => console.log("pressed")}
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
