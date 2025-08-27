import * as Yup from "yup";

export const checkoutSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  companyName: Yup.string().optional(),
  country: Yup.string().required("Country is required"),
  streetAddress: Yup.string().required("Street address is required"),
  apartment: Yup.string().optional(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State / County is required"),
  zipCode: Yup.string()
    .matches(/^\d+$/, "ZIP must be numbers only")
    .required("ZIP code is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Enter a valid phone number")
    .required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  createAccount: Yup.boolean(),
  orderNotes: Yup.string().optional(),
});
