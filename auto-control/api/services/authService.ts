import { handleApiError } from "../../utils/errorHandler"
import { apiClient } from "./apiClient"
import { storageService } from "./storageService"

const loginEndpoint = "/login/"

export const login = async (username: string, password: string) => {
  try {
    const response = await apiClient.post(loginEndpoint, {
      username,
      password,
    })
    const { token } = response.data

    await storageService.saveItem("authToken", token)

    console.log("Logged in successfully")

    return response.data
  } catch (error) {
    handleApiError(error)
  }
}
