import { AxiosResponse } from "axios"
import { apiClient } from "./apiClient"
import { ExpenseData } from "@/types/expense/expense.type"

export const expenseService = {
  async getUserExpenses(
    userId: number,
    userToken: string
  ): Promise<ExpenseData[]> {
    try {
      const response: AxiosResponse<ExpenseData[]> = await apiClient.get(
        `/api/v1/app-expenses/expenses?user=${userId}`,
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      )
      return response.data
    } catch (error) {
      console.error("Error fetching user expenses: ", error)
      throw error
    }
  },

  async createUserExpense(
    vehicleId: number,
    typeId: number,
    description: string,
    vehicleName: string,
    date: string,
    value: number,
    expenseName: string,
    userToken: string
  ): Promise<ExpenseData> {
    try {
      const response: AxiosResponse<ExpenseData> = await apiClient.post(
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
      return response.data
    } catch (error) {
      console.error("Error creating user expense: ", error)
      throw error
    }
  },
}
