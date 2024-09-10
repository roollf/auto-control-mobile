export interface UserData {
  name: string
  email: string
  cnh: string
}

export interface RegisterUserData extends UserData {
  password: string
}

export interface LoginUserData {
  username: string
  password: string
}
