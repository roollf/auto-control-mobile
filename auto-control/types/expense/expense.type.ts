interface ExpenseData {
  id: number
  name: string
  user: number
  value: string
  date: string
  vehicle: number
  vehicle_name: string
  description: string
  type: number
  type_name: string
  file: string | null
  created_at: string
}

interface ExpenseType {
  id?: number
  name: string
}

export { ExpenseData, ExpenseType }
