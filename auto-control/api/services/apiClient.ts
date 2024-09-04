import axios from "axios"
import { API_URL } from "@env"

class ApiClient {
  private static instance: ApiClient
  public client = axios.create({
    baseURL: API_URL,
  })

  private constructor() {}

  static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }
}

export const apiClient = ApiClient.getInstance().client
