import { Text } from "react-native"
import { Tabs } from "expo-router"

import { useSession } from "../../../contexts/ctx"

import { FontAwesome } from "@expo/vector-icons"

import { getUser } from "@/api/services"

import { useState, useEffect } from "react"

export default function TabLayout() {
  const [userInfo, setUserInfo] = useState(null)
  const { session, isLoading } = useSession()

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUser(session?.id)
        setUserInfo(data)
      } catch (error) {
        console.error("Failed to fetch user info:", error)
      }
    }

    if (session) {
      fetchUserInfo()
    }
  }, [session])

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  // if (!session) {
  //   console.log("No session, redirecting to login page...")
  //   return <Redirect href="/" />
  // }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
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
