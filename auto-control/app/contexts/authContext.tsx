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
    user_id: number | null
    email: string | null
    user_name: string | null
    user_cnh: string | null
  }) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

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
    token: string | null
    user_id: number | null
    email: string | null
    user_name: string | null
    user_cnh: string | null
  }) => {
    const { user_id, user_name, user_cnh, email, token } = data
    setAuthToken(token)
    setUser({ user_id, user_name, user_cnh, email })
    if (token !== null) {
      await AsyncStorage.setItem("authToken", token)
    }
    await AsyncStorage.setItem(
      "user",
      JSON.stringify({ user_id, user_name, user_cnh, email })
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
