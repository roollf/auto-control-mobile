import React, { createContext, useState, useEffect, useContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface AuthContextType {
  authToken: string | null
  user: {
    user_id: number | null
    email: string | null
    user_name: string | null
    user_cnh: string | null
  }
  setAuthData: (data: {
    token: string
    user_id: number
    email: string
    user_name: string
    user_cnh: string
  }) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(null)
  const [user, setUser] = useState<{
    user_id: number | null
    email: string | null
    user_name: string | null
    user_cnh: string | null
  }>({
    user_id: null,
    email: null,
    user_name: null,
    user_cnh: null,
  })

  // Load token and user data from AsyncStorage when the app starts
  useEffect(() => {
    const loadAuthData = async () => {
      const storedToken = await AsyncStorage.getItem("authToken")
      const storedUser = await AsyncStorage.getItem("user")

      if (storedToken) {
        setAuthToken(storedToken)
      }

      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }

    loadAuthData()
  }, [])

  const setAuthData = async (data: {
    token: string
    user_id: number
    email: string
    user_name: string
    user_cnh: string
  }) => {
    const { token, user_id, email, user_name, user_cnh } = data
    setAuthToken(token)
    setUser({ user_id, email, user_name, user_cnh })

    await AsyncStorage.setItem("authToken", token)
    await AsyncStorage.setItem(
      "user",
      JSON.stringify({ user_id, email, user_name, user_cnh })
    )
  }

  const logout = async () => {
    await AsyncStorage.removeItem("authToken")
    await AsyncStorage.removeItem("user")
    setAuthToken(null)
    setUser({ user_id: null, email: null, user_name: null, user_cnh: null })
  }

  return (
    <AuthContext.Provider value={{ authToken, user, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
