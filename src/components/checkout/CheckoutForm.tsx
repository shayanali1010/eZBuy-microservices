import { checkoutSchema } from "@/schemas/checkoutSchema";
import { useFormik } from "formik";

interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  companyName?: string;
  country: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  createAccount: boolean;
  orderNotes?: string;
}
export default function CheckoutForm(){
  const initialValues : CheckoutFormValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    country: "United States (US)",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    createAccount: false,
    orderNotes: "",
  };
   const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: checkoutSchema,
      onSubmit: (data) => {
        console.log("Checkout form data:", data);
      },
    });
    return(
         <div className="flex-1">
            <h2 className="text-xl font-bold text-black mb-4">Billing Details</h2>
             <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm text-gray-700 mb-1">First Name *</label>
                  <input
                   id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                  {errors.firstName && touched.firstName && (
              <p className="text-red-600 text-xs">{errors.firstName}</p>
            )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-gray-700 mb-1">Last Name *</label>
                  <input
                   id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                   {errors.lastName && touched.lastName && (
              <p className="text-red-600 text-xs">{errors.lastName}</p>
            )}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Company Name (optional)</label>
                <input
                  id="companyName"
            name="companyName"
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Country / Region *</label>
                <select
                 id="country"
            name="country"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm appearance-none bg-white"
                 
                >
                  <option>United States (US)</option>
            <option>Pakistan</option>
            <option>United Kingdom</option>
                </select>
                {errors.country && touched.country && (
            <p className="text-red-600 text-xs">{errors.country}</p>
          )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Street address *</label>
                <input
                id="streetAddress"
            name="streetAddress"
            value={values.streetAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="House number and street name"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm mb-2"
                />
                {errors.streetAddress && touched.streetAddress && (
            <p className="text-red-600 text-xs">{errors.streetAddress}</p>
          )}
                <input
                    id="apartment"
            name="apartment"
            value={values.apartment}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Apartment, suite, unit etc. (optional)"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Town / City *</label>
                <input
                  id="city"
            name="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
                {errors.city && touched.city && (
            <p className="text-red-600 text-xs">{errors.city}</p>
          )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">State / County *</label>
                <select
                 id="state"
            name="state"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm appearance-none bg-white"
                >
                  <option value="">Select an option...</option>
            <option>California</option>
            <option>New York</option>
            <option>Texas</option>
                </select>
                {errors.state && touched.state && (
            <p className="text-red-600 text-xs">{errors.state}</p>
          )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">ZIP Code *</label>
                <input
                 id="zipCode"
            name="zipCode"
            value={values.zipCode}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
                 {errors.zipCode && touched.zipCode && (
            <p className="text-red-600 text-xs">{errors.zipCode}</p>
          )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Phone *</label>
                <input
                   id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            type="tel"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
                 {errors.phone && touched.phone && (
            <p className="text-red-600 text-xs">{errors.phone}</p>
          )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Email address *</label>
                <input
                  id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
                 {errors.email && touched.email && (
            <p className="text-red-600 text-xs">{errors.email}</p>
          )}
              </div>

          
              <div className="flex items-center">
                <input
                  type="checkbox"
            id="createAccount"
            name="createAccount"
            checked={values.createAccount}
            onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="create-account" className="text-sm text-gray-700">Create an account?</label>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-1">Additional information</h3>
                <label className="block text-sm text-gray-700 mb-1">Order notes (optional)</label>
                <textarea
                 id="orderNotes"
            name="orderNotes"
            value={values.orderNotes}
            onChange={handleChange}
            onBlur={handleBlur}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  rows={4}
                ></textarea>
              </div>
            </form>
          </div>
    )
 }