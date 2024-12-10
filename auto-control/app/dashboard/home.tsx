import { FlatList, Text, View } from "react-native"

import Ionicons from "@expo/vector-icons/Ionicons"

import styles from "../../styles/styles"
import { Utils } from "@/utils/utils"
import { useCallback, useEffect, useState } from "react"
import { ExpenseService } from "@/api/services/expenseService"
import { ExpenseData } from "@/types/expense/expense.type"
import { Image } from "expo-image"
import Document from "@/assets/images/signdocument.png"
import { useSession } from "@/contexts/ctx"
import { useFocusEffect } from "expo-router"

export default function Home() {
  const [userExpenses, setUserExpenses] = useState<ExpenseData[]>([])

  const { session } = useSession()

  // console.log("aqui paizão", session);

  // NOTE: acontece sempre que o usuário navega para essa tela (focus muda para essa tela) (feito para lidar com a navegação)

  useFocusEffect(
    useCallback(() => {
      if (session?.user_id && session?.token) {
        ExpenseService.getUserExpenses(session.user_id, session.token)
          .then((response) => {
            // console.log(response, "RESPONSE")
            // Ordenar as despesas pela data (mais recentes primeiro)
            const sortedExpenses = response.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            setUserExpenses(sortedExpenses)
          })
          .catch((error) => {
            console.error("Failed to fetch expenses:", error)
          })
      }
    }, [])
  )

  // NOTE: acontece sempre que o componente é montado (ou quando a dependência muda, nesse caso, session)

  useEffect(() => {
    if (session?.user_id && session?.token) {
      ExpenseService.getUserExpenses(session.user_id, session.token)
        .then((response) => {
          // console.log(response, "RESPONSE")
          // Ordenar as despesas pela data (mais recentes primeiro)
          const sortedExpenses = response.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          setUserExpenses(sortedExpenses)
        })
        .catch((error) => {
          console.error("Failed to fetch expenses:", error)
        })
    }
  }, [session])

  const monthToDateExpenses = () => {
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()

    const monthExpenses = userExpenses.filter(
      (expense) =>
        new Date(expense.date).getMonth() + 1 === month &&
        new Date(expense.date).getFullYear() === year
    )

    // Corrigindo a soma
    const total = monthExpenses.reduce(
      (acc, expense) => acc + parseFloat(expense.value), // Converte o value para número
      0
    )

    return Utils.transformToCurrency(total)
  }

  const getMonthWithHighestExpense = () => {
    const monthlyExpenses: { [key: string]: number } = {}

    userExpenses.forEach((expense) => {
      const date = new Date(expense.date)
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`

      if (!monthlyExpenses[monthKey]) {
        monthlyExpenses[monthKey] = 0
      }

      monthlyExpenses[monthKey] += parseFloat(expense.value)
    })

    const highestMonth = Object.entries(monthlyExpenses).reduce(
      (max, current) => (current[1] > max[1] ? current : max),
      ["", 0]
    )

    const [yearMonth, total] = highestMonth
    const [year, month] = yearMonth.split("-")

    return {
      month: Utils.getMonthName(parseInt(month)), // Crie uma função para retornar o nome do mês
      year,
      total: Utils.transformToCurrency(total),
    }
  }

  const getMostFrequentExpenseType = () => {
    const typeCounts: { [key: string]: number } = {}

    userExpenses.forEach((expense) => {
      if (!typeCounts[expense.type_name]) {
        typeCounts[expense.type_name] = 0
      }
      typeCounts[expense.type_name] += 1
    })

    const mostFrequent = Object.entries(typeCounts).reduce(
      (max, current) => (current[1] > max[1] ? current : max),
      ["", 0]
    )

    return mostFrequent[0] // Retorna o tipo de despesa mais frequente
  }

  const renderItem = ({ item }: { item: any }) => (
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
            {item.type_name == "Seguro"
              ? "🔐"
              : item.type_name === "Abastecimento"
              ? "⛽️"
              : item.type_name === "Taxas"
              ? "🏦"
              : item.type_name === "Manutenção"
              ? "🛠️"
              : item.type_name === "Multa"
              ? "👮"
              : ""}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {item.type_name}
          </Text>
          <View
            style={{
              display: "flex",
              width: "80%",
            }}
          >
            <Text style={{ fontSize: 12, opacity: 0.5 }}>
              {item.description}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ gap: 8 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {Utils.transformToCurrency(parseFloat(item.value))}
        </Text>
        <Text style={{ fontSize: 12, opacity: 0.5, alignSelf: "flex-end" }}>
          {Utils.transformDate(item.date)}
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
            marginBottom: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              width: "80%",
            }}
          >
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>
              Olá, {session?.user_name}!
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            {/* <Ionicons
              name="notifications"
              size={32}
              color="black"
              style={{ opacity: 0.8 }}
            /> */}
          </View>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "semibold", opacity: 0.5 }}>
          Despesas do mês
        </Text>
        <Text style={{ fontSize: 38, fontWeight: "bold" }}>
          {userExpenses.length == 0 ? "---" : monthToDateExpenses()}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
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
              Mês crítico
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              {getMonthWithHighestExpense().month} - {" "}
              {getMonthWithHighestExpense().year}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              {getMonthWithHighestExpense().total}
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
          <Ionicons name="trending-up" size={32} color="white" />
          <View>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Tipo mais frequente
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              {getMostFrequentExpenseType() || "---"}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 30, marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", opacity: 0.8 }}>
          Últimas despesas
        </Text>
      </View>
      {userExpenses.length > 0 ? (
        <FlatList
          style={{
            display: "flex",
            zIndex: 1,
            position: "relative",
            paddingHorizontal: 20,
          }}
          data={userExpenses.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )} // Ordenar novamente antes de renderizar
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <View
          style={{
            height: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            opacity: 0.5,
            marginTop: 20,
          }}
        >
          <Image
            source={Document}
            alt="document"
            style={{ width: 96, height: 96 }}
          />
          <Text style={{ fontWeight: 500, textAlign: "center", width: "50%" }}>
            Você ainda não possui despesas registradas, registre uma despesa no
            botão + abaixo
          </Text>
        </View>
      )}
    </View>
  )
}
