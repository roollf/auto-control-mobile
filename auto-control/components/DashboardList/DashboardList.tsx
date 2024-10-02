import { View, StyleSheet, Text, FlatList } from "react-native"

const carExpenses = [
  {
    id: "1",
    descricao: "Troca de óleo",
    valor: "R$ 150,00",
    data: "12/09/2024",
  },
  {
    id: "2",
    descricao: "Manutenção dos freios",
    valor: "R$ 300,00",
    data: "10/09/2024",
  },
  {
    id: "3",
    descricao: "Abastecimento",
    valor: "R$ 250,00",
    data: "08/09/2024",
  },
  {
    id: "4",
    descricao: "Troca de pneus",
    valor: "R$ 1200,00",
    data: "01/09/2024",
  },
  {
    id: "5",
    descricao: "Seguro",
    valor: "R$ 1200,00",
    data: "05/08/2024",
  },
]

const CarExpenseItem = ({ descricao, valor, data }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.descricao}>{descricao}</Text>
    <Text style={styles.valor}>{valor}</Text>
    <Text style={styles.data}>{data}</Text>
  </View>
)

const DashboardList = () => {
  return (
    <FlatList
      data={carExpenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CarExpenseItem
          descricao={item.descricao}
          valor={item.valor}
          data={item.data}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  descricao: {
    fontSize: 18,
    fontWeight: "bold",
  },
  valor: {
    fontSize: 16,
    color: "#ff6347",
  },
  data: {
    fontSize: 14,
    color: "#888",
  },
})

export default DashboardList
