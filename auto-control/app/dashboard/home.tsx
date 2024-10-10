import { FlatList, ScrollView, Text, View, SectionList } from "react-native"

import { useSession } from "@/contexts/ctx"
import { DashboardChart } from "@/components/DashboardChart/DashboardChart"
import DashboardList from "@/components/DashboardList/DashboardList"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "expo-image"
import Ionicons from "@expo/vector-icons/Ionicons"

import styles from "./styles"

import User from "@/assets/images/user.svg"
import Bell from "@/assets/images/bell.svg"
import Calendar from "@/assets/images/calendar.svg"

import { LinearGradient } from "expo-linear-gradient"

export default function Home() {
  const { signOut } = useSession()

  const dadosHoje = [
    {
      categoria: "Manutenção",
      descricao: "Troce óleo",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Abastecimento",
      descricao: "Gasolina comum",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Abastecimento",
      descricao: "Diesel S10",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Taxas",
      descricao: "IPVA 2024",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Abastecimento",
      descricao: "Etanol",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Seguro",
      descricao: "Seguro anual",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Abastecimento",
      descricao: "Etanol",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Seguro",
      descricao: "Seguro anual",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Abastecimento",
      descricao: "Diesel S10",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Taxas",
      descricao: "IPVA 2024",
      valor: 120.0,
      data: "2024-12-01",
    },
    {
      categoria: "Seguro",
      descricao: "Seguro anual",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Abastecimento",
      descricao: "Diesel S10",
      valor: 100.0,
      data: "2024-12-01",
    },
    {
      categoria: "Taxas",
      descricao: "IPVA 2024",
      valor: 120.0,
      data: "2024-12-01",
    },
  ]

  const dadosOtem = [
    {
      categoria: "Manutenção",
      descricao: "Troce óleo",
      valor: 100.0,
      data: "2024-11-30",
    },
    {
      categoria: "Abastecimento",
      descricao: "Gasolina comum",
      valor: 100.0,
      data: "2024-11-30",
    },
    {
      categoria: "Abastecimento",
      descricao: "Diesel S10",
      valor: 100.0,
      data: "2024-11-30",
    },
    {
      categoria: "Taxas",
      descricao: "IPVA 2024",
      valor: 100.0,
      data: "2024-11-30",
    },
    {
      categoria: "Abastecimento",
      descricao: "Etanol",
      valor: 100.0,
      data: "2024-11-30",
    },
    {
      categoria: "Seguro",
      descricao: "Seguro anual",
      valor: 100.0,
      data: "2024-11-30",
    },
  ]

  const dadosSeteDias = [
    {
      categoria: "Manutenção",
      descricao: "Troce óleo",
      valor: 100.0,
      data: "2024-11-29",
    },
    {
      categoria: "Abastecimento",
      descricao: "Gasolina comum",
      valor: 100.0,
      data: "2024-11-28",
    },
    {
      categoria: "Abastecimento",
      descricao: "Diesel S10",
      valor: 100.0,
      data: "2024-11-28",
    },
    {
      categoria: "Taxas",
      descricao: "IPVA 2024",
      valor: 100.0,
      data: "2024-11-28",
    },
    {
      categoria: "Abastecimento",
      descricao: "Etanol",
      valor: 100.0,
      data: "2024-11-25",
    },
    {
      categoria: "Seguro",
      descricao: "Seguro anual",
      valor: 100.0,
      data: "2024-11-25",
    },
    {
      categoria: "Abastecimento",
      descricao: "Diesel S10",
      valor: 100.0,
      data: "2024-11-24",
    },
    {
      categoria: "Taxas",
      descricao: "IPVA 2024",
      valor: 120.0,
      data: "2024-11-23",
    },
    {
      categoria: "Seguro",
      descricao: "Seguro anual",
      valor: 100.0,
      data: "2024-11-23",
    },
    {
      categoria: "Abastecimento",
      descricao: "Diesel S10",
      valor: 100.0,
      data: "2024-11-22",
    },
    {
      categoria: "Taxas",
      descricao: "IPVA 2024",
      valor: 120.0,
      data: "2024-11-21",
    },
  ]

  const dashboardExpenses = [
    {
      title: "Hoje",
      data: dadosHoje,
    },
    {
      title: "Ontem",
      data: dadosOtem,
    },
    {
      title: "Últimos 7 dias",
      data: dadosSeteDias,
    },
  ]

  const transformToCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  const transformDate = (date: string) => {
    const dateObj = new Date(date)
    return `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
  }

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
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Ionicons
              name="notifications"
              size={26}
              color="black"
              style={{ opacity: 0.8 }}
            />
            <Ionicons
              name="cog"
              size={26}
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
          <Ionicons
            name="calendar"
            size={32}
            color="white"
            style={{ opacity: 0.8 }}
          />
          <View style={{ opacity: 0.8 }}>
            <Text style={{ fontWeight: "bold", opacity: 0.8, color: "white" }}>
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
          <Ionicons
            name="wallet"
            size={32}
            color="white"
            style={{ opacity: 0.8 }}
          />
          <View style={{ opacity: 0.8 }}>
            <Text style={{ fontWeight: "bold", opacity: 0.8, color: "white" }}>
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
