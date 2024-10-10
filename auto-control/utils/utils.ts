export const transformToCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

export const transformDate = (date: string) => {
  const dateObj = new Date(date)
  return `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
}
