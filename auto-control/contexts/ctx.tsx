import { useContext, createContext, useState, useEffect } from "react"
import { login } from "../api/services/authService"
import { LoginResponse, LoginUserData } from "@/types/user/user.type"
import { router } from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { storageService } from "@/api/services"

const AuthContext = createContext<{
  signIn: ({ username, password }: LoginUserData) => Promise<LoginResponse>
  signOut: () => void
  session?: LoginResponse | null
  isLoading: boolean
}>({
  signIn: async () => {
    return {
      token: "",
      user_id: 0,
      email: "",
      user_name: "",
      user_cnh: "",
    }
  },
  signOut: () => null,
  session: null,
  isLoading: false,
})

export function useSession() {
  const value = useContext(AuthContext)
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />")
    }
  }
  return value
}

export function SessionProvider({ children }: React.PropsWithChildren<{}>) {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [session, setSession] = useState<LoginResponse | null>(null)

  useEffect(() => {
    const loadSession = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("user")
        if (jsonValue) {
          setSession(JSON.parse(jsonValue))
        }
      } catch (e) {
        console.error("Failed to load session", e)
      } finally {
        setLoading(false)
      }
    }

    loadSession()
  }, [])

  const signIn = async ({
    username,
    password,
  }: LoginUserData): Promise<LoginResponse> => {
    try {
      const response = await login({ username, password })

      if (response) {
        const loginData: LoginResponse = {
          token: response.token,
          user_id: response.user_id,
          email: response.email,
          user_name: response.user_name,
          user_cnh: response.user_cnh,
        }
        // await storageService.saveItem("user", JSON.stringify(loginData))
        setSession(loginData)
        return loginData
      }
    } catch (error) {
      console.error("Login failed", error)
      throw new Error("Login failed. Please check your credentials.")
    }
    return {
      token: "",
      user_id: 0,
      email: "",
      user_name: "",
      user_cnh: "",
    }
  }

  const signOut = () => {
    console.log("Sign-out executed")
    setSession(null)
    router.replace("/landing/onboarding")
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
