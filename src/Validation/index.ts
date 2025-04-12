import * as yup from "yup"

export const loginSchema = yup
    .object({
    email: yup.string().required("Email is Required!").matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,"Email is not Valid"),
    password: yup.string().required("Password is Required!").min(8,"Password must be at-least 6 characters"),
    })
    .required()

export const scanSchema = yup
    .object({
    scanName: yup.string().required("Scan name is Required!").min(3,"Scan name must be at-least 3 characters"),
    scanTarget: yup.string().required("Scan target is Required!").min(6,"Scan Target must be at-least 6 characters"),
    })
    .required()    

