import { View, Text, Button, Pressable } from "react-native"

import { router } from "expo-router"

export default function ChooseAdd() {
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
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Adicionar
        </Text>
      </View>
      <View>
        <View>
          <Text>Escolha o que deseja adicionar</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            gap: 20,
          }}
        >
          <Pressable
            style={{
              width: "60%",
              height: 55,
              backgroundColor: "#FC6736",
              borderRadius: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingHorizontal: 8,
            }}
            onPress={() => router.navigate("/dashboard/(add)/addvehicle")}
          >
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
              Registrar veículo
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: "60%",
              height: 55,
              backgroundColor: "#FC6736",
              borderRadius: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingHorizontal: 8,
            }}
            onPress={() => router.navigate("/dashboard/(add)/addexpense")}
          >
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
              Registrar despesa
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
