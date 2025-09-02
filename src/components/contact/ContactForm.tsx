"use client"

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik"
import * as Yup from "yup"

interface FormValues {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  subject: string
  message: string
  agreeToTerms: boolean
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "United States (US)",
  subject: "",
  message: "",
  agreeToTerms: false,
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  agreeToTerms: Yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
})

const ContactForm = () => {
  // ✅ FormikHelpers<FormValues> remove karta hai `any` ka error
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert("Message sent successfully!")
      resetForm()
    } catch (error) {
      alert("Failed to send message. Please try again.")
      console.error(error)
    }
  }

  return (
    <Formik<FormValues>  // ✅ yahan generic pass karna zaroori hai
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="firstName"
                className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:border-gray-500"
              />
              <ErrorMessage name="firstName" component="p" className="text-red-500 text-xs mt-1" />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="lastName"
                className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:border-gray-500"
              />
              <ErrorMessage name="lastName" component="p" className="text-red-500 text-xs mt-1" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Field
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:border-gray-500"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Phone Number (Optional)</label>
            <Field
              type="tel"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Country / Region <span className="text-red-500">*</span>
            </label>
            <Field
              as="select"
              name="country"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white"
            >
              <option value="United States (US)">United States (US)</option>
              <option value="United Kingdom (UK)">United Kingdom (UK)</option>
              <option value="Canada (CA)">Canada (CA)</option>
              <option value="Australia (AU)">Australia (AU)</option>
            </Field>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Subject (Optional)</label>
            <Field
              type="text"
              name="subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Message</label>
            <Field
              as="textarea"
              name="message"
              rows={6}
              placeholder="Note about your order, e.g. special note for delivery"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 resize-none"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-2">
            <Field
              type="checkbox"
              name="agreeToTerms"
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="text-sm text-gray-700">
              I want to receive news and updates once in a while. By submitting, I am agreed to the{" "}
              <a href="#" className="text-red-500 underline">
                Terms & Conditions
              </a>
            </label>
          </div>
          <ErrorMessage name="agreeToTerms" component="p" className="text-red-500 text-xs" />

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gray-800 text-white px-6 py-3 text-sm font-medium hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
