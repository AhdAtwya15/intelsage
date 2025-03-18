import * as yup from "yup"
export const registerSchema = yup

export const loginSchema = yup
    .object({
    email: yup.string().required("Email is Required!").matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,"Email is not Valid"),
    password: yup.string().required("Password is Required!").min(8,"Password must be at-least 6 characters"),
    })
    .required()

