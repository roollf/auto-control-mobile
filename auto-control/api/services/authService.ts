import { apiClient } from "./apiClient"
import { storageService } from "./storageService"

export const login = async (email: string, password: string) => {
  const response = await apiClient.post("/auth/login", { email, password })
  const { token } = response.data

  await storageService.saveItem("authToken", token)

  return response.data
}

export const logout = async () => {
  await storageService.removeItem("authToken")
}

export const refreshToken = async () => {
  const response = await apiClient.post("/auth/refresh-token")
  const { token } = response.data

  await storageService.saveItem("authToken", token)

  return response.data
}

export const requestPasswordReset = async (email: string) => {
  return await apiClient.post("/auth/reset-password", { email })
}
