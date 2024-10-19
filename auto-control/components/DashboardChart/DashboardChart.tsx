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
      textSize={20}
      showTextBackground
      textBackgroundRadius={1}
      showText
      textColor="black"
    />
  )
}
