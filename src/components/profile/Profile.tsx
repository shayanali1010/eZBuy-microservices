"use client"

import ProfileSidebar from "./ProfileSidebar"
import ProfileForm from "./ProfileForm"

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
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
          <ProfileSidebar />
          <div className="flex-1">
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
