"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

const ProfilePage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "Mark",
    lastName: "Cole",
    email: "swoo@gmail.com",
    phone: "+1 0231 4554 452",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (formData.phone && !/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("[v0] Form submitted successfully:", formData)
      // Here you would typically make an API call to save the data
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <span className="hover:text-gray-700 cursor-pointer">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="hover:text-gray-700 cursor-pointer">pages</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-normal">profile</span>
          </nav>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          <div className="xl:w-72 flex-shrink-0">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4">
              <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/favatar.jpg.png"
                  alt="Profile Avatar"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    console.log("[v0] Image failed to load, showing fallback")
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.style.display = "none"
                  }}
                />
              </div>

              {/* Name and Email */}
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Mark Cole</h2>
                <p className="text-gray-600 text-sm">swoo@gmail.com</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Account info - Active */}
              <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between cursor-pointer">
                <span className="font-normal text-sm">Account info</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* My order */}
              <div className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors">
                <span className="text-gray-700 text-sm">My order</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* My address */}
              <div className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors">
                <span className="text-gray-700 text-sm">My address</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Change password */}
              <div className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 text-sm">Change password</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-8">Account Info</h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-colors ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="mt-1 text-sm text-red-600">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-colors ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="mt-1 text-sm text-red-600">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-colors ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-colors ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gray-800 hover:bg-gray-900 disabled:bg-gray-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "SAVING..." : "SAVE"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
