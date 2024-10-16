interface UserData {
  name: string
  email: string
  cnh: string
}

interface RegisterUserData extends UserData {
  password: string
}

interface LoginUserData {
  username: string
  password: string
}

interface LoginResponse {
  token: string
  user_id: number
  email: string
  user_name: string
  user_cnh: string
}

export { UserData, RegisterUserData, LoginUserData, LoginResponse }
