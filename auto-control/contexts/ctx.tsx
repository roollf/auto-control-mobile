import { useContext, createContext, type PropsWithChildren } from "react"
import { useStorageState } from "../hooks/useStorageState"

import { login } from "../api/services/authService"
import { LoginUserData } from "@/types/user/user.type"

const AuthContext = createContext<{
  signIn: ({ username, password }: LoginUserData) => Promise<void>
  signOut: () => void
  session?: string | null
  isLoading: boolean
}>({
  signIn: async () => {},
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

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session")

  const signIn = async ({ username, password }: LoginUserData) => {
    try {
      const success = await login({ username, password })
      if (success) {
        console.log("Login successful, setting session")
        setSession(username)
      }
    } catch (error) {
      console.error("Login failed", error)
      throw new Error("Login failed. Please check your credentials.")
    }
  }

  const signOut = () => {
    console.log("Sign-out executed")
    setSession(null)
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
