import { AxiosResponse } from "axios"
import { apiClient } from "./apiClient"
import { ExpenseData, ExpenseType } from "@/types/expense/expense.type"
import { VehicleData, VehicleListType } from "@/types/vehicle/vehicle.type"

//  `/api/v1/app-expenses/expenses?user=${userId}/`,
//         {
//           headers: {
//             Authorization: `Token ${userToken}`,
//           },
//         }
//       )

export const ExpenseService = {
  async getUserExpenses(
    userId: number,
    userToken: string
  ): Promise<ExpenseData[]> {
    const api = `/api/v1/app-expenses/expenses/?user=${userId}`

    try {
      const response: AxiosResponse<ExpenseData[]> = await apiClient.request({
        method: "get",
        url: api,
        headers: { Authorization: "Token " + userToken },
      })

      return response.data
    } catch (error) {
      console.error("Error fetching user expenses: ", userId, userToken, error)
      throw error
    }
  },

  async getUserVehicles(
    userId: number,
    userToken: string
  ): Promise<VehicleListType[]> {
    try {
      const response: AxiosResponse<VehicleListType[]> = await apiClient.get(
        `/api/v1/app-vehicles/vehicles/?owner=${userId}`,
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

  async getExpenseTypes(userToken: string): Promise<ExpenseType[]> {
    try {
      const response: AxiosResponse<ExpenseType[]> = await apiClient.get(
        `/api/v1/app-expenses/type-expenses/`,
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      )
      return response.data
    } catch (error) {
      console.error("Error fetching expense types: ", error)
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
      // Log the request body before sending
      console.log("Sending the following data:", {
        name: expenseName,
        value: value,
        date: formattedDate,
        vehicle: vehicleId,
        description: description,
        type: typeId,
      })

      const response: AxiosResponse<ExpenseData> = await apiClient.post(
        `api/v1/app-expenses/expenses/`,
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
            Authorization: `Token ${userToken}`,
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
