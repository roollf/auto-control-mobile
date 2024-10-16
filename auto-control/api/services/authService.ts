import { handleApiError } from "../../utils/errorHandler"
import { apiClient } from "./apiClient"
import {
  LoginResponse,
  LoginUserData,
  RegisterUserData,
} from "@/types/user/user.type"

const loginEndpoint = "/login/"
const registerEndpoint = "/api/v1/app-users/register-user/"

export const login = async ({
  username,
  password,
}: LoginUserData): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post<LoginResponse>(loginEndpoint, {
      username,
      password,
    })
    return response.data
  } catch (error) {
    console.error("API login failed", error)
    throw error
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
