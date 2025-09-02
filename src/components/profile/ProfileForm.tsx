"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useState } from "react"

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Please enter a valid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
    .nullable(),
})

const ProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Account Info</h1>

      <Formik
        initialValues={{
          firstName: "Mark",
          lastName: "Cole",
          email: "swoo@gmail.com",
          phone: "+1 0231 4554 452",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setIsLoading(true)
          try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            console.log("Form submitted:", values)
          } finally {
            setIsLoading(false)
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <Field
                  name="firstName"
                  type="text"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-colors"
                />
                <ErrorMessage name="firstName" component="p" className="mt-1 text-sm text-red-600" />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <Field
                  name="lastName"
                  type="text"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-colors"
                />
                <ErrorMessage name="lastName" component="p" className="mt-1 text-sm text-red-600" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Field
                name="email"
                type="email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-colors"
              />
              <ErrorMessage name="email" component="p" className="mt-1 text-sm text-red-600" />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-gray-500">(Optional)</span>
              </label>
              <Field
                name="phone"
                type="tel"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-colors"
              />
              <ErrorMessage name="phone" component="p" className="mt-1 text-sm text-red-600" />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="bg-gray-800 hover:bg-gray-900 disabled:bg-gray-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed"
              >
                {isLoading ? "SAVING..." : "SAVE"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ProfileForm
