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
            <View
              style={{
                backgroundColor: "#FC6736",
                borderRadius: 100,
                padding: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
              }}
            >
              <FontAwesome size={18} name="plus" color="white" />
            </View>
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
