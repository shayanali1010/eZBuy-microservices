"use client"

import Image from "next/image"

const ProfileSidebar = () => {
  return (
    <div className="xl:w-72 flex-shrink-0">
      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4">
        <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/avatar.jpg.png"
            alt="Profile Avatar"
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
            onError={(e) => {
              console.log("[v0] Image failed to load, showing fallback")
              e.currentTarget.style.display = "none"
            }}
          />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Mark Cole</h2>
          <p className="text-gray-600 text-sm">swoo@gmail.com</p>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between cursor-pointer">
          <span className="font-normal text-sm">Account info</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {["My order", "My address", "Change password"].map((item, i) => (
          <div
            key={i}
            className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors"
          >
            <span className="text-gray-700 text-sm">{item}</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileSidebar
