import { ExpenseData } from "../expense/expense.type"

interface VehicleData {
  id?: number
  name: string
  description?: string
  type: number
  type_name?: string
  brand: number
  brand_name?: string
  year: number
  license_plate: string
  owner: number
  owner_name?: string
  images?: string[]
  expenses?: ExpenseData[]
}

interface VehicleType {
  id?: number
  name: string
}

interface VehicleBrand {
  id?: number
  name: string
}

export { VehicleData, VehicleType, VehicleBrand }
