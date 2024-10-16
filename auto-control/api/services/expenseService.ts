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
    formattedDate: string, // Make sure this is correctly formatted
    value: number,
    expenseName: string,
    userToken: string
  ): Promise<ExpenseData> {
    try {
      // Log the request body before sending
      console.log("Sending the following data:", {
        name: expenseName,
        value: value,
        date: formattedDate, // Should be in YYYY-MM-DD format
        vehicle: vehicleId,
        description: description,
        type: typeId,
      })

      const response: AxiosResponse<ExpenseData> = await apiClient.post(
        `api/v1/app-expenses/expenses/`,
        {
          name: expenseName, // Correct "name" key
          value: value, // Expense value
          date: formattedDate, // "date" field in YYYY-MM-DD format
          vehicle: vehicleId, // Vehicle ID
          description: description, // Description of the expense
          type: typeId, // Type of expense
        },
        {
          headers: {
            Authorization: `Token ${userToken}`, // Bearer token
          },
        }
      )
      return response.data
    } catch (error) {
      console.error(
        "Error creating user expense: ",
        error.response?.data || error.message
      )
      throw error
    }
  },
}
