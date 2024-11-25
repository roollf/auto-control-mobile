import { VehicleData } from "@/types/vehicle/vehicle.type"
import { AxiosResponse } from "axios"
import { apiClient } from "./apiClient"

export const VehicleService = {
  async createVehicle(vehicleData: VehicleData, userToken: string) {
    try {
      const response: AxiosResponse = await apiClient.post(
        "/api/v1/app-vehicles/vehicles",
        vehicleData,
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      )
      return response.data
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error creating vehicle:", error.message)
      }
    }
  },
}
