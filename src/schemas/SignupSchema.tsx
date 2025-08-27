import * as Yup from "yup";


export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(8).required("Please enter the name"),
  email: Yup.string().email().required("Please enter the email"),
  password: Yup.string().min(8).max(12).required("Please enter your password"),
  confirm_password: Yup.string()
  .nullable()
    .oneOf([Yup.ref("password"), null], "Password must be matched!")
    .required("Please confirm your password!"),
});