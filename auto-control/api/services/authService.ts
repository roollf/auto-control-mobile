import { handleApiError } from "../../utils/errorHandler"
import { apiClient } from "./apiClient"
import { storageService } from "./storageService"
import { LoginUserData, RegisterUserData } from "@/types/user/user.type"

const loginEndpoint = "/login/"
const registerEndpoint = "/api/v1/app-users/register-user/"

export const login = async ({ username, password }: LoginUserData) => {
  try {
    const response = await apiClient.post(loginEndpoint, {
      username,
      password,
    })

    const { token } = response.data

    await storageService.saveItem("authToken", token)

    return true
  } catch (error) {
    handleApiError(error)
    return false
  }
}

export const register = async ({
  name,
  password,
  email,
  cnh,
}: RegisterUserData) => {
  try {
    await apiClient.post(registerEndpoint, {
      name,
      password,
      email,
      cnh,
    })
    return true
  } catch (error) {
    handleApiError(error)
    return false
  }
}
