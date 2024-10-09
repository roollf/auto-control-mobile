import { FlatList, ScrollView, Text, View } from "react-native"

import { useSession } from "@/contexts/ctx"
import { DashboardChart } from "@/components/DashboardChart/DashboardChart"
import DashboardList from "@/components/DashboardList/DashboardList"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "expo-image"

import styles from "./styles"

import User from "@/assets/images/user.svg"
import Bell from "@/assets/images/bell.svg"
import Calendar from "@/assets/images/calendar.svg"

import { LinearGradient } from "expo-linear-gradient"

export default function Home() {
  const { signOut } = useSession()

  const data = [
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

  const renderItem = ({ item }) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.1)",
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
            height: 30,
            width: 30,
            backgroundColor: "gray",
            borderRadius: 100,
          }}
        />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {item.categoria}
          </Text>
          <Text style={{ fontSize: 12, opacity: 0.5 }}>{item.descricao}</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.valor}</Text>
        <Text style={{ fontSize: 12, opacity: 0.5 }}>{item.data}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={["#100c30", "#1a165d"]}
          style={styles.userInfo}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.userAndGreeting}>
              <View style={styles.userIcon}>
                <Image
                  source={User}
                  style={{ width: 25, height: 25 }}
                  alt="user"
                />
              </View>
              <View>
                <Text style={styles.userGreeting}>Olá, Emanuel</Text>
                <Text style={styles.userWelcome}>Bem vindo!</Text>
              </View>
            </View>
            <View style={styles.bellContainer}>
              <Image
                source={Bell}
                style={{ width: 30, height: 30 }}
                alt="user"
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              position: "absolute",
              bottom: -100,
              alignSelf: "center",
              width: "90%",
              borderRadius: 8,
              padding: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 5,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.1)",
              zIndex: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", opacity: 0.5 }}>
              DESPESAS TOTAIS
            </Text>
            <Text style={{ fontSize: 24 }}>R$ 9.812,12</Text>
            <View>
              <Text style={{ fontWeight: "bold", opacity: 0.5 }}>
                PROXIMAS DESPESAS
              </Text>
              <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <Image
                  source={Calendar}
                  style={{ width: 30, height: 30 }}
                  alt="user"
                />
                <Text style={{ fontSize: 24 }}>01/12/2024</Text>
              </View>
            </View>
            <Text style={{ fontWeight: "bold", opacity: 0.5 }}>
              DESPESAS FUTURAS
            </Text>
            <Text style={{ fontSize: 24 }}>R$ 9.812,12</Text>
          </View>
        </LinearGradient>
      </View>
      <FlatList
        style={{
          marginTop: 120,
          display: "flex",
          zIndex: 1,
          position: "relative",
          paddingHorizontal: 20,
        }}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}
