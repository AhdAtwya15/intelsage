import * as yup from "yup"

const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/;
const ipRegex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{6,12}$/;

export const loginSchema = yup
    .object({
    email: yup.string().required("Email is Required!").matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,"Email is not Valid"),
    password: yup.string().required("Password is Required!").min(8,"Password must be at-least 6 characters"),
    })
    .required()

export const scanSchema = yup
    .object({
        scanName: yup
        .string()
        .required("Scan name is Required!")
        .min(3, "Scan name must be at-least 3 characters"),
        scanTarget: yup
        .string()
        .required("Scan target is Required!")
        .test(
        "is-valid-target",
        "Invalid Scan Target",
        (value) => {
            if (!value) return false;
            return (
                domainRegex.test(value) ||
                ipRegex.test(value) ||
                emailRegex.test(value) ||
                phoneRegex.test(value)
            );
        }
    ),
})
.required();  

