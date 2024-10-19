import { Alert, FlatList, Text, View } from "react-native"

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
import { DashboardChart } from "@/components/DashboardChart/DashboardChart"

export default function Home() {
  const [userExpenses, setUserExpenses] = useState<ExpenseData[]>([])
  const [myToken, setMyToken] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  const { session } = useSession()

  useFocusEffect(
    useCallback(() => {
      if (session?.user_id && session?.token) {
        ExpenseService.getUserExpenses(session.user_id, session.token)
          .then((response) => {
            setUserExpenses(sortExpensesByDate(response))
          })
          .catch((error) => {
            console.error("Failed to fetch expenses:", error)
          })
      }
    }, [])
  )

  useEffect(() => {
    if (session?.user_id && session?.token) {
      setMyToken(session.token)
      ExpenseService.getUserExpenses(session.user_id, session.token)
        .then((response) => {
          setUserExpenses(sortExpensesByDate(response))
          setIsLoading(false)
        })
        .catch((error) => {
          console.error("Failed to fetch expenses:", error)
          setIsLoading(false)
        })
    }
  }, [session])

  function sortExpensesByDate(expenses: ExpenseData[]) {
    return expenses.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }

  function currentMonthExpensesSum(expenses: ExpenseData[]) {
    const currentMonth = new Date().getMonth()
    return expenses
      .filter((expense) => new Date(expense.date).getMonth() === currentMonth)
      .reduce((acc, expense) => acc + parseFloat(expense.value), 0)
  }

  function totalValuePerType(expenses: ExpenseData[]) {
    const result = expenses.reduce((acc, expense) => {
      if (acc[expense.type_name]) {
        acc[expense.type_name] += parseFloat(expense.value)
      } else {
        acc[expense.type_name] = parseFloat(expense.value)
      }
      return acc
    }, {})

    // Now transform the result into an array of objects for the chart
    const formattedResult = Object.keys(result).map((type) => {
      let color = ""
      let gradientCenterColor = ""

      // Assign colors based on the type
      switch (type) {
        case "Multa":
          color = "#FFA500"
          gradientCenterColor = "#FF4500"
          break
        case "Manutenção":
          color = "#00FF00"
          gradientCenterColor = "#008000"
          break
        // Add more types as needed
        default:
          color = "#CCCCCC"
          gradientCenterColor = "#AAAAAA"
      }

      return {
        type: type,
        value: result[type], // The total value for this type
        color: color,
        gradientCenterColor: gradientCenterColor,
      }
    })
    console.log("Formatted Result for Chart: ", formattedResult)

    return formattedResult
  }

  const chartData = totalValuePerType(userExpenses)

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
            {item.type_name == "Revisão"
              ? "🛠️"
              : item.type_name === "Abastecimento"
              ? "⛽️"
              : item.type_name === "Imposto"
              ? "💸"
              : item.type_name === "Manutenção"
              ? "🔧"
              : item.type_name === "Multa"
              ? "👮"
              : ""}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {item.type_name}
          </Text>
          <Text style={{ fontSize: 12, opacity: 0.5 }}>{item.description}</Text>
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
            marginBottom: 40,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>
            Olá, {session?.user_name}!
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
        <Text style={{ fontSize: 38, fontWeight: "bold" }}>
          R$
          {userExpenses.length == 0
            ? "0"
            : `${currentMonthExpensesSum(userExpenses)}`}
        </Text>
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
            borderWidth: 1,
            borderColor: "rgba(35, 78, 134, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Ionicons name="calendar" size={32} color="#234e86" />
          <View>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              Próxima despesa
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
              03/12/2024
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 175,
            width: 175,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {isLoading ? (
            <View>
              <Text>Loading Chart</Text>
            </View>
          ) : (
            <DashboardChart data={chartData} />
          )}
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
          data={userExpenses}
          keyExtractor={(item) => item.id}
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
