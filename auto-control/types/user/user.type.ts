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

export { UserData, RegisterUserData, LoginUserData }
