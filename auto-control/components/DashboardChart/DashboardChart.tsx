import { View, StyleSheet, Dimensions, Text } from "react-native"

import { PieChart } from "react-native-gifted-charts"

export const DashboardChart = () => {
  const pieData = [
    {
      value: 47,
      color: "#009FFF",
      gradientCenterColor: "#006DFF",
      focused: true,
    },
    { value: 40, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
    { value: 16, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97" },
  ]

  const renderDot = (color) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    )
  }

  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 120,
              marginRight: 20,
            }}
          >
            {renderDot("#006DFF")}
            <Text style={{ color: "black" }}>Manutenção: 47%</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#8F80F3")}
            <Text style={{ color: "black" }}>Abastecimento: 16%</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 120,
              marginRight: 20,
            }}
          >
            {renderDot("#3BE9DE")}
            <Text style={{ color: "black" }}>Financiamento: 40%</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#FF7F97")}
            <Text style={{ color: "black" }}>Taxas: 3%</Text>
          </View>
        </View>
      </>
    )
  }

  return (
    <View
      style={{
        paddingVertical: 100,
        backgroundColor: "transparent",
        flex: 1,
      }}
    >
      <View
        style={{
          margin: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: "transparent",
        }}
      >
        <Text style={{ color: "black", fontSize: 28, fontWeight: "bold" }}>
          Seus Gastos
        </Text>
        <View style={{ padding: 20, alignItems: "center" }}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={"white"}
            centerLabelComponent={() => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{ fontSize: 16, color: "black", fontWeight: "bold" }}
                  >
                    R$14.020,00
                  </Text>
                  <Text style={{ fontSize: 14, color: "black" }}>Total</Text>
                </View>
              )
            }}
          />
        </View>
        {renderLegendComponent()}
      </View>
    </View>
  )
}
