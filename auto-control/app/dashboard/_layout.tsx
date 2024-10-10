import { Text, View } from "react-native"
import { Tabs, useNavigation } from "expo-router"
import { FontAwesome } from "@expo/vector-icons"
import { useEffect } from "react"

export default function TabLayout() {
  const navigation = useNavigation()
  useEffect(() => {
    console.log(navigation.getState().routes) // This logs all generated routes
  }, [])

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
        name="addexpense"
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
                width: 60,
                height: 60,
                transform: [{ translateY: -20 }],
              }}
            >
              <FontAwesome size={28} name="plus" color="white" />
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
