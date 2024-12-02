import React from "react"
import {
  View,
  Text,
  FlatList,
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

const screenWidth = Dimensions.get("window").width

const expensesByCategory: ExpenseData[] = [
  {
    id: 1,
    name: "Combustível",
    user: 1,
    value: "R$ 250,40",
    date: "2024-11-01",
    vehicle: 1,
    vehicle_name: "Uno",
    description: "Abastecimento com gasolina",
    type: 1,
    type_name: "Combustível",
    file: null,
    created_at: "2024-11-01T12:00:00",
  },
  {
    id: 2,
    name: "Impostos",
    user: 1,
    value: "R$ 860,00",
    date: "2024-10-01",
    vehicle: 2,
    vehicle_name: "Onix",
    description: "Despesa relacionada ao IPVA",
    type: 2,
    type_name: "Impostos",
    file: null,
    created_at: "2024-10-01T12:00:00",
  },
  {
    id: 3,
    name: "Manutenção",
    user: 1,
    value: "R$ 550,90",
    date: "2024-09-01",
    vehicle: 3,
    vehicle_name: "Sandero",
    description: "Reparo do freio",
    type: 3,
    type_name: "Manutenção",
    file: null,
    created_at: "2024-09-01T12:00:00",
  },
  {
    id: 4,
    name: "Combustível",
    user: 1,
    value: "R$ 300,00",
    date: "2024-08-15",
    vehicle: 4,
    vehicle_name: "Civic",
    description: "Abastecimento com gasolina",
    type: 1,
    type_name: "Combustível",
    file: null,
    created_at: "2024-08-15T12:00:00",
  },
  {
    id: 5,
    name: "Impostos",
    user: 1,
    value: "R$ 980,00",
    date: "2024-07-01",
    vehicle: 5,
    vehicle_name: "Corolla",
    description: "Pagamento de IPVA",
    type: 2,
    type_name: "Impostos",
    file: null,
    created_at: "2024-07-01T12:00:00",
  },
  {
    id: 6,
    name: "Manutenção",
    user: 1,
    value: "R$ 400,00",
    date: "2024-06-12",
    vehicle: 6,
    vehicle_name: "Fit",
    description: "Troca de óleo e filtros",
    type: 3,
    type_name: "Manutenção",
    file: null,
    created_at: "2024-06-12T12:00:00",
  },
  {
    id: 7,
    name: "Combustível",
    user: 1,
    value: "R$ 250,40",
    date: "2024-05-01",
    vehicle: 7,
    vehicle_name: "Palio",
    description: "Abastecimento com gasolina",
    type: 1,
    type_name: "Combustível",
    file: null,
    created_at: "2024-05-01T12:00:00",
  },
  {
    id: 8,
    name: "Impostos",
    user: 1,
    value: "R$ 600,00",
    date: "2024-04-01",
    vehicle: 8,
    vehicle_name: "Fiesta",
    description: "Pagamento de Licenciamento",
    type: 2,
    type_name: "Impostos",
    file: null,
    created_at: "2024-04-01T12:00:00",
  },
  {
    id: 9,
    name: "Manutenção",
    user: 1,
    value: "R$ 150,00",
    date: "2024-03-01",
    vehicle: 9,
    vehicle_name: "Vectra",
    description: "Reparo do motor",
    type: 3,
    type_name: "Manutenção",
    file: null,
    created_at: "2024-03-01T12:00:00",
  },
  {
    id: 10,
    name: "Combustível",
    user: 1,
    value: "R$ 350,00",
    date: "2024-02-01",
    vehicle: 10,
    vehicle_name: "Hilux",
    description: "Abastecimento com diesel",
    type: 1,
    type_name: "Combustível",
    file: null,
    created_at: "2024-02-01T12:00:00",
  },
  {
    id: 11,
    name: "Impostos",
    user: 1,
    value: "R$ 900,00",
    date: "2024-01-01",
    vehicle: 11,
    vehicle_name: "Tucson",
    description: "Pagamento de IPVA",
    type: 2,
    type_name: "Impostos",
    file: null,
    created_at: "2024-01-01T12:00:00",
  },
  {
    id: 12,
    name: "Manutenção",
    user: 1,
    value: "R$ 700,00",
    date: "2023-12-01",
    vehicle: 12,
    vehicle_name: "Kia Sportage",
    description: "Troca de pneus",
    type: 3,
    type_name: "Manutenção",
    file: null,
    created_at: "2023-12-01T12:00:00",
  },
]

const calculateSummary = (expenses: ExpenseData[]) => {
  const today = new Date()

  const parsedExpenses = expenses.map((expense) => ({
    ...expense,
    value: parseFloat(expense.value.replace("R$", "").replace(".", "")),
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
  const averageMonthly = totalExpenses / (monthsCovered || 1)

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

const SummaryCard = () => {
  const { averageMonthly, totalLast6Months, totalLastYear } =
    calculateSummary(expensesByCategory)

  return (
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
  )
}

const Expenses = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  )
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false)
  const [showMoreCategories, setShowMoreCategories] = React.useState(false)
  const [showMoreLastExpenses, setShowMoreLastExpenses] = React.useState(false)

  const filteredExpenses = selectedCategory
    ? expensesByCategory.filter(
        (expense) => expense.type_name === selectedCategory
      )
    : expensesByCategory

  const calculateChartData = (expenses: ExpenseData[]) => {
    const parsedExpenses = expenses.map((expense) => ({
      ...expense,
      value: parseFloat(expense.value.replace("R$", "").replace(".", "")),
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
    }, {})

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
    const data = Object.values(groupedByMonth)

    return { labels, data }
  }

  const { labels, data } = calculateChartData(filteredExpenses)

  const maxItems = 3

  const limitedCategories = showMoreCategories
    ? filteredExpenses
    : filteredExpenses.slice(0, maxItems)

  const limitedLastExpenses = showMoreLastExpenses
    ? expensesByCategory
    : expensesByCategory.slice(0, maxItems)

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
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
                title="Combustível"
                onPress={() => {
                  setSelectedCategory("Combustível")
                  setModalVisible(false)
                }}
              />
              <Button
                title="Impostos"
                onPress={() => {
                  setSelectedCategory("Impostos")
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
            labels,
            datasets: [
              {
                data,
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

        <SummaryCard />

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
              <Text style={styles.lastExpenseDetails}>{format(parseISO(item.date), "dd 'de' MMMM 'de' yyyy", { locale: pt })}</Text>
              <Text style={styles.categoryAmount}>{item.value}</Text>
            </View>
          ))}
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
              <Text style={styles.lastExpenseAmount}>{item.value}</Text>
            </View>
          ))}
        </ScrollView>
        {expensesByCategory.length > maxItems && (
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
    case "Combustível":
      return "#FFE5E5"
    case "Impostos":
      return "#E5E5FF"
    case "Manutenção":
      return "#FFFFE5"
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
    maxHeight: 278,
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
})

export default Expenses
