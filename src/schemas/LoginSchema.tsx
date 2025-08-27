import * as Yup from "yup";


export const LoginSchema = Yup.object({

  email: Yup.string().email().required("Please enter the email"),

  password: Yup.string().min(8).max(12).required("Please enter your password"),
 
});