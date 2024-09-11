import axios from "axios"

export const handleApiError = (error: any) => {
  console.error("API Error: ", error)

  if (axios.isAxiosError(error)) {
    if (error.response) {
      const { status, data } = error.response
      console.error(`API Error Response [${status}]: `, data)

      switch (status) {
        case 400:
          console.error("Client error (400): Invalid email or password.")
          throw new Error(
            "Credenciais inválidas. Certifique-se de que o email e a senha estão corretos."
          )
        case 500:
          console.error("Server error (500): Internal server error.")
          throw new Error(
            "Erro no servidor. Por favor, tente novamente mais tarde."
          )
        default:
          console.error("Unhandled status code")
          throw new Error(
            "Ocorreu um erro inesperado. Por favor, tente novamente."
          )
      }
    } else if (error.request) {
      console.error("No response received, error request: ", error.request)
      throw new Error("Não foi possível obter uma resposta do servidor.")
    } else {
      console.error("Error Message: ", error.message)
      throw new Error("Ocorreu um erro inesperado. Por favor, tente novamente.")
    }
  } else {
    console.error("Non-Axios Error: ", error)
    throw new Error("Ocorreu um erro desconhecido.")
  }
}
