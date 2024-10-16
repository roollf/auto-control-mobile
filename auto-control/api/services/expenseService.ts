import { AxiosResponse } from "axios"
import { apiClient } from "./apiClient"
import { ExpenseData } from "@/types/expense/expense.type"
import { VehicleData } from "@/types/vehicle/vehicle.type"

export const ExpenseService = {
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

  async getUserVehicles(
    userId: number,
    userToken: string
  ): Promise<VehicleData[]> {
    try {
      const response: AxiosResponse<VehicleData[]> = await apiClient.get(
        `/api/v1/app-vehicles/vehicles?owner=${userId}`,
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      )
      return response.data
    } catch (error) {
      console.error("Erro fetching user vehicles and expenses")
      throw error
    }
  },

  async createVehicleExpense(
    vehicleId: number,
    typeId: number,
    description: string,
    formattedDate: string,
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
          date: formattedDate,
          vehicle: vehicleId,
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
