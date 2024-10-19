import { PieChart } from "react-native-gifted-charts"

export const DashboardChart = ({ data }) => {
  return (
    <PieChart
      data={data}
      donut
      showGradient
      sectionAutoFocus
      radius={70}
      innerRadius={40}
      innerCircleColor={"white"}
    />
  )
}
