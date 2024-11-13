import { AxiosResponse } from "axios"
import { apiClient } from "./apiClient"
import { UserData } from "@/types/user/user.type"

export const UserService = {
  async getUser(userId: number): Promise<UserData> {
    try {
      const response: AxiosResponse = await apiClient.get<UserData>(
        `/users/${userId}`
      )
      return response.data
    } catch (error) {
      console.error("Error fetching user data: ", error)
      throw error
    }
  },

  async updateUser(updateData: Partial<UserData>, userId: number) {
    try {
      const response: AxiosResponse = await apiClient.put(
        `/users/${userId}`,
        updateData
      )
      return response.data
    } catch (error) {
      console.error("Error updating user data: ", error)
      throw error
    }
  },

  async deleteUserAccount(userId: number) {
    try {
      const response: AxiosResponse = await apiClient.delete(`/users/${userId}`)
      return response.data
    } catch (error) {
      console.error("Error deleting user account: ", error)
      throw error
    }
  },
}
