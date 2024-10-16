import { AxiosResponse } from "axios"
import { apiClient } from "./apiClient"
import { UserData } from "@/types/user/user.type"
import { ExpenseData } from "@/types/expense/expense.type"

export const getUserExpenses = async (
  userId: number,
  userToken: string
): Promise<AxiosResponse<ExpenseData[]>> => {
  return await apiClient.get(`/api/v1/app-expenses/expenses?user${userId}`, {
    headers: {
      Authorization: `Token ${userToken}`,
    },
  })
}

export const createUserExpense = async (
  vehicleId: number,
  typeId: number,
  description: string,
  vehicleName: string,
  date: string,
  value: number,
  expenseName: string,
  userToken: string
): Promise<AxiosResponse<ExpenseData>> => {
  return await apiClient.post(
    `/app-expenses/expenses/`,
    {
      name: expenseName,
      value: value,
      date: date,
      vehicle: vehicleId,
      vehicle_name: vehicleName,
      description: description,
      type: typeId,
    },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  )
}
