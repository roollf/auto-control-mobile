export const Utils = {
  transformToCurrency(value: number) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  },

  transformDate(date: string) {
    const dateObj = new Date(date)
    const day = String(dateObj.getDate()).padStart(2, "0")
    const month = String(dateObj.getMonth() + 1).padStart(2, "0")
    const year = dateObj.getFullYear()
    return `${day}/${month}/${year}`
  },
}
