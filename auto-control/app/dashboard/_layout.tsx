import { View } from "react-native"
import { Tabs, useNavigation } from "expo-router"
import { FontAwesome } from "@expo/vector-icons"

export default function TabLayout() {
  const navigation = useNavigation()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FC6736",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: "Expenses",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="list" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(add)"
        options={{
          title: "Expense",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="plus" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  )
}
