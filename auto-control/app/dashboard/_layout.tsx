import { Text, View } from "react-native"
import { Tabs } from "expo-router"

import { useSession } from "@/contexts/ctx"

import { FontAwesome } from "@expo/vector-icons"

import { getUser } from "@/api/services"

import { useState, useEffect } from "react"

export default function TabLayout() {
  const [userInfo, setUserInfo] = useState(null)
  const { session, isLoading } = useSession()

  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     try {
  //       const data = await getUser(session?.id)
  //       setUserInfo(data)
  //     } catch (error) {
  //       console.error("Failed to fetch user info:", error)
  //     }
  //   }

  //   if (session) {
  //     fetchUserInfo()
  //   }
  // }, [session])

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  // if (!session) {
  //   console.log("No session, redirecting to login page...")
  //   return <Redirect href="/" />
  // }

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
            <FontAwesome size={28} name="user" color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  )
}
