export const handleApiError = (error: any) => {
  console.error("API Error: ", error)
  if (error.response) {
    console.error("API Error Response: ", error.response)
  } else if (error.request) {
    console.error("API Error Request: ", error.request)
  } else {
    console.error("API Error Message: ", error.message)
  }
}
