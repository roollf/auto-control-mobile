export interface ExpenseData {
  id?: number;
  name: string;
  value: string;
  date: Date | string;
  vehicle: number;
  vehicle_name?: string;
  description: string;
  type: number;
  type_name?: string;
}

export interface ExpenseType {
  id?: number;
  name: string;
}
