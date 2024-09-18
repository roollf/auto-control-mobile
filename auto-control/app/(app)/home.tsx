import { Text, View } from "react-native"

import { useSession } from "../../contexts/ctx"
import { DashboardChart } from "@/components/DashboardChart/DashboardChart"
import DashboardList from "@/components/DashboardList/DashboardList"

export default function Home() {
  const { signOut } = useSession()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text
        onPress={() => {
          console.log("Signing out...");
          signOut();
        }}
      >
        Sign Out
      </Text> */}
      <DashboardChart />
      {/* <DashboardList /> */}
    </View>
  )
}
