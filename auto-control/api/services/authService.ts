import { useAuth } from "@/app/contexts/authContext"
import { handleApiError } from "../../utils/errorHandler"
import { apiClient } from "./apiClient"
import { storageService } from "./storageService"
import { LoginUserData, RegisterUserData } from "@/types/user/user.type"

const loginEndpoint = "/login/"
const registerEndpoint = "/api/v1/app-users/register-user/"

export const login = async ({ username, password }: LoginUserData) => {
  try {
    const { setAuthData } = useAuth()

    const response = await apiClient.post(loginEndpoint, {
      username,
      password,
    })

    const { token, user_id, email, user_name, user_cnh } = response.data

    setAuthData({
      token,
      user_id,
      email,
      user_name,
      user_cnh,
    })

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
