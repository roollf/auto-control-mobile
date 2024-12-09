import axios from "axios"

// const API_URL = process.env.EXPO_PUBLIC_API_URL
const API_URL = "http://192.168.0.24:8000/"

class ApiClient {
  private static instance: ApiClient
  public client = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
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
