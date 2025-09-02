"use client"

import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="px-4 py-4 text-sm text-gray-600">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Shop</span>
        <span className="mx-2">/</span>
        <span className="text-black">Contact</span>
      </div>

      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-black mb-4">READY TO WORK WITH US</h1>
            <p className="text-gray-600">Contact us for all your questions and opinions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
