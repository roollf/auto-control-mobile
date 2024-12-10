import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native"
import { LineChart } from "react-native-chart-kit"
import {
  parseISO,
  isWithinInterval,
  subMonths,
  subYears,
  format,
} from "date-fns"
import { ExpenseData } from "@/types/expense/expense.type"
import { pt } from "date-fns/locale"
import { useSession } from "@/contexts/ctx"
import { ExpenseService } from "@/api/services/expenseService"
import { router, useFocusEffect } from "expo-router"

const screenWidth = Dimensions.get("window").width

const calculateSummary = (expenses: ExpenseData[]) => {
  const today = new Date()

  const parsedExpenses = expenses.map((expense) => ({
    ...expense,
    value: parseFloat(expense.value.replace(",", ".")), // Corrige separador decimal
    date: parseISO(expense.date),
  }))

  const totalExpenses = parsedExpenses.reduce(
    (acc, expense) => acc + expense.value,
    0
  )

  const monthsCovered = new Set(
    parsedExpenses.map(
      (e) => `${e.date.getFullYear()}-${e.date.getMonth() + 1}`
    )
  ).size

  const averageMonthly = monthsCovered > 0 ? totalExpenses / monthsCovered : 0 // Evita divisão por zero

  const totalLast6Months = parsedExpenses
    .filter((expense) =>
      isWithinInterval(expense.date, { start: subMonths(today, 6), end: today })
    )
    .reduce((acc, expense) => acc + expense.value, 0)

  const totalLastYear = parsedExpenses
    .filter((expense) =>
      isWithinInterval(expense.date, { start: subYears(today, 1), end: today })
    )
    .reduce((acc, expense) => acc + expense.value, 0)

  return {
    averageMonthly: `R$ ${averageMonthly.toFixed(2).replace(".", ",")}`,
    totalLast6Months: `R$ ${totalLast6Months.toFixed(2).replace(".", ",")}`,
    totalLastYear: `R$ ${totalLastYear.toFixed(2).replace(".", ",")}`,
  }
}

// const SummaryCard = () => {
//   const { averageMonthly, totalLast6Months, totalLastYear } =
//     calculateSummary(expensesData)

//   return (
//     <View style={styles.summaryCard}>
//       <Text style={styles.summaryItem}>
//         <Text style={styles.summaryLabel}>Valor Médio Mensal: </Text>
//         <Text style={styles.summaryValue}>{averageMonthly}</Text>
//       </Text>
//       <Text style={styles.summaryItem}>
//         <Text style={styles.summaryLabel}>
//           Total Gasto Nos Últimos 6 Meses:{" "}
//         </Text>
//         <Text style={styles.summaryValue}>{totalLast6Months}</Text>
//       </Text>
//       <Text style={styles.summaryItem}>
//         <Text style={styles.summaryLabel}>Total Gasto No Último Ano: </Text>
//         <Text style={styles.summaryValue}>{totalLastYear}</Text>
//       </Text>
//     </View>
//   )
// }

const Expenses = () => {
  const { session } = useSession()

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  )
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false)
  const [showMoreCategories, setShowMoreCategories] = React.useState(false)
  const [showMoreLastExpenses, setShowMoreLastExpenses] = React.useState(false)
  const [expensesDataApi, setExpensesDataApi] = React.useState<ExpenseData[]>(
    []
  )

  const { averageMonthly, totalLast6Months, totalLastYear } =
    calculateSummary(expensesDataApi)

  const filteredExpenses =
    selectedCategory && expensesDataApi.length > 0
      ? expensesDataApi.filter(
          (expense) => expense.type_name === selectedCategory
        )
      : expensesDataApi

  const calculateChartData = (expenses: ExpenseData[]) => {
    const parsedExpenses = expenses.map((expense) => ({
      ...expense,
      value: parseFloat(expense.value.replace(",", ".")), // Corrige o uso do separador decimal
      date: parseISO(expense.date),
    }))

    const groupedByMonth = parsedExpenses.reduce((acc, expense) => {
      const month = `${expense.date.getFullYear()}-${
        expense.date.getMonth() + 1
      }`
      if (!acc[month]) {
        acc[month] = 0
      }
      acc[month] += expense.value
      return acc
    }, {} as Record<string, number>)

    const labels = Object.keys(groupedByMonth).map((month) => {
      const firstExpenseDate = parsedExpenses.find(
        (expense) =>
          `${expense.date.getFullYear()}-${expense.date.getMonth() + 1}` ===
          month
      )?.date

      return firstExpenseDate
        ? format(firstExpenseDate, "MMM", { locale: pt })
        : ""
    })

    const data = Object.values(groupedByMonth).map(
      (value) => (isNaN(value) || !isFinite(value) ? 0 : value) // Substituir valores inválidos por zero
    )

    return { labels, data }
  }

  const { labels, data } = calculateChartData(filteredExpenses)

  const maxItems = 3

  const limitedCategories = showMoreCategories
    ? filteredExpenses
    : filteredExpenses.slice(0, maxItems)

  const limitedLastExpenses = showMoreLastExpenses
    ? expensesDataApi
    : expensesDataApi.slice(0, maxItems)

  useFocusEffect(
    React.useCallback(() => {
      if (session?.user_id && session?.token) {
        const fetchExpensesDataApi = async () => {
          try {
            const response = await ExpenseService.getUserExpenses(
              session?.user_id,
              session?.token
            )
            console.log("Resposta da API", response)
            setExpensesDataApi(response)
          } catch (error) {
            console.error("Failed to fetch expenses:", error)
          }
        }
        fetchExpensesDataApi()
      }
    }, [])
  )

  React.useEffect(() => {
    if (session?.user_id && session?.token) {
      const fetchExpensesDataApi = async () => {
        try {
          const response = await ExpenseService.getUserExpenses(
            session?.user_id,
            session?.token
          )
          console.log("Resposta da API", response)
          setExpensesDataApi(response)
        } catch (error) {
          console.error("Failed to fetch expenses:", error)
        }
      }
      fetchExpensesDataApi()
    }
  }, [])

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            Despesas
          </Text>
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.filterButtonText}>Filtrar Despesas</Text>
        </TouchableOpacity>

        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Escolha o Tipo de Despesa</Text>
              <Button
                title="Abastecimento"
                onPress={() => {
                  setSelectedCategory("Abastecimento")
                  setModalVisible(false)
                }}
              />
              <Button
                title="Taxas"
                onPress={() => {
                  setSelectedCategory("Taxas")
                  setModalVisible(false)
                }}
              />
              <Button
                title="Manutenção"
                onPress={() => {
                  setSelectedCategory("Manutenção")
                  setModalVisible(false)
                }}
              />
              <Button
                title="Seguro"
                onPress={() => {
                  setSelectedCategory("Seguro")
                  setModalVisible(false)
                }}
              />
              <Button
                title="Multa"
                onPress={() => {
                  setSelectedCategory("Multa")
                  setModalVisible(false)
                }}
              />
              <Button
                title="Mostrar Todos"
                onPress={() => {
                  setSelectedCategory(null)
                  setModalVisible(false)
                }}
              />
            </View>
          </View>
        </Modal>

        <Text style={styles.header}>Despesas Totais</Text>
        <LineChart
          data={{
            labels: labels.length > 0 ? labels : ["Sem Dados"],
            datasets: [
              {
                data: data.length > 0 ? data : [0], // Substituir por valores padrão
                color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
                strokeWidth: 2,
              },
            ],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
          }}
          bezier
          style={styles.chart}
        />

        <View style={styles.summaryCard}>
          <Text style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Valor Médio Mensal: </Text>
            <Text style={styles.summaryValue}>{averageMonthly}</Text>
          </Text>
          <Text style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>
              Total Gasto Nos Últimos 6 Meses:{" "}
            </Text>
            <Text style={styles.summaryValue}>{totalLast6Months}</Text>
          </Text>
          <Text style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Total Gasto No Último Ano: </Text>
            <Text style={styles.summaryValue}>{totalLastYear}</Text>
          </Text>
        </View>

        <Text style={styles.subHeader}>Despesas por Categoria</Text>
        <ScrollView style={styles.categoryList}>
          {limitedCategories.map((item) => (
            <View
              key={item.id}
              style={[
                styles.categoryItem,
                { backgroundColor: getCategoryColor(item.type_name) },
              ]}
            >
              <Text style={styles.categoryName}>{item.name}</Text>
              <Text style={styles.lastExpenseDetails}>
                {format(parseISO(item.date), "dd 'de' MMMM 'de' yyyy", {
                  locale: pt,
                })}
              </Text>
              <Text style={styles.categoryAmount}>{`R$ ${parseFloat(item.value)
                .toFixed(2)
                .replace(".", ",")}`}</Text>
            </View>
          ))}
          {limitedCategories.length === 0 && (
            <Text style={styles.noExpensesText}>
              Não há despesas desse tipo ainda
            </Text>
          )}
        </ScrollView>
        {filteredExpenses.length > maxItems && (
          <TouchableOpacity
            style={styles.showMoreButton}
            onPress={() => setShowMoreCategories(!showMoreCategories)}
          >
            <Text style={styles.showMoreText}>
              {showMoreCategories ? "Mostrar Menos" : "Mostrar Mais"}
            </Text>
          </TouchableOpacity>
        )}

        <Text style={styles.subHeader}>Últimas Despesas</Text>
        <ScrollView style={styles.lastExpenseList}>
          {limitedLastExpenses.map((item) => (
            <View key={item.id} style={styles.lastExpenseItem}>
              <Text style={styles.lastExpenseName}>{item.name}</Text>
              <Text style={styles.lastExpenseDetails}>{item.description}</Text>
              <Text style={styles.lastExpenseDetails}>{item.vehicle_name}</Text>
              <Text style={styles.lastExpenseAmount}>{`R$ ${parseFloat(
                item.value
              )
                .toFixed(2)
                .replace(".", ",")}`}</Text>
            </View>
          ))}
        </ScrollView>
        {expensesDataApi.length > maxItems && (
          <TouchableOpacity
            style={styles.showMoreButton}
            onPress={() => setShowMoreLastExpenses(!showMoreLastExpenses)}
          >
            <Text style={styles.showMoreText}>
              {showMoreLastExpenses ? "Mostrar Menos" : "Mostrar Mais"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  )
}

const getCategoryColor = (typeName: string) => {
  switch (typeName) {
    case "Abastecimento":
      return "#FFE5E5"
    case "Taxas":
      return "#E5E5FF"
    case "Manutenção":
      return "#FFFFE5"
    case "Seguro":
      return "#E5FFE5"
    case "Multa":
      return "#FFE5FF"
    default:
      return "#FFF"
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  categoryList: {
    maxHeight: 279,
  },
  lastExpenseList: {
    maxHeight: 324,
  },
  categoryItem: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  categoryAmount: {
    fontSize: 16,
    marginTop: 5,
  },
  showMoreButton: {
    marginVertical: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
  },
  showMoreText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  lastExpenseItem: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    marginBottom: 10,
  },
  lastExpenseName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastExpenseDetails: {
    fontSize: 14,
    color: "#555",
  },
  lastExpenseAmount: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  filterButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  summaryCard: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  summaryItem: {
    fontSize: 13,
    marginBottom: 10,
  },
  summaryLabel: {
    fontWeight: "bold",
  },
  summaryValue: {
    fontWeight: "normal",
  },
  chart: {
    marginBottom: 20,
  },
  noExpensesText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
})

export default Expenses
