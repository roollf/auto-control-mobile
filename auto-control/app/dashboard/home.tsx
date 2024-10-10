import { FlatList, Text, View } from "react-native"

import Ionicons from "@expo/vector-icons/Ionicons"

import styles from "../../styles/styles"
import { transformDate, transformToCurrency } from "@/utils/utils"
import { dadosHoje } from "@/utils/mock"

export default function Home() {
  const renderItem = ({ item }) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: "#d8e7f8",
            borderRadius: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>
            {item.categoria == "Seguro"
              ? "🔐"
              : item.categoria === "Abastecimento"
              ? "⛽️"
              : item.categoria === "Taxas"
              ? "🏦"
              : item.categoria === "Manutenção"
              ? "🛠️"
              : ""}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {item.categoria}
          </Text>
          <Text style={{ fontSize: 12, opacity: 0.5 }}>{item.descricao}</Text>
        </View>
      </View>
      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {transformToCurrency(item.valor)}
        </Text>
        <Text style={{ fontSize: 12, opacity: 0.5, alignSelf: "flex-end" }}>
          {transformDate(item.data)}
        </Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>
            Olá, Fernando!
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Ionicons
              name="notifications"
              size={32}
              color="black"
              style={{ opacity: 0.8 }}
            />
          </View>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "semibold", opacity: 0.5 }}>
          Despesas do mês
        </Text>
        <Text style={{ fontSize: 38, fontWeight: "bold" }}>R$1.432,11</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          marginVertical: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            height: 175,
            width: 175,
            borderRadius: 28,
            backgroundColor: "#234e86",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Ionicons name="calendar" size={32} color="white" />
          <View>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Próxima despesa
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              03/12/2024
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 175,
            width: 175,
            borderRadius: 28,
            backgroundColor: "#234e86",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Ionicons name="wallet" size={32} color="white" />
          <View>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Economias
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              R$ 132,33
            </Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 30, marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", opacity: 0.8 }}>
          Últimas despesas
        </Text>
      </View>
      <FlatList
        style={{
          display: "flex",
          zIndex: 1,
          position: "relative",
          paddingHorizontal: 20,
        }}
        data={dadosHoje}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}
