import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Required"),
  password: Yup.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Required"),
  cnh: Yup.string().min(6, "CNH deve ter 6 dígitos"),
  name: Yup.string().required("Required"),
})
