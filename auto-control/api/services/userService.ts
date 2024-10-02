import { AxiosResponse } from "axios"
import { apiClient } from "./apiClient"
import { UserData } from "@/types/user/user.type"

export const getUser = async (
  userId: number
): Promise<AxiosResponse<UserData>> => {
  return await apiClient.get(`/users/${userId}`)
}

export const updateUser = async (
  updatedData: Partial<UserData>,
  userId: number
): Promise<UserData> => {
  const response = await apiClient.put(`/users/${userId}`, updatedData)
  return response.data
}

export const deleteUserAccount = async (userId: number) => {
  return await apiClient.delete(`/users/${userId}`)
}
