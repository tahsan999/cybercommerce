import React from 'react'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
        </div>

        {/* Name & Email */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            John Doe
          </h2>
          <p className="text-gray-500 text-sm">
            johndoe@email.com
          </p>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Role</span>
            <span className="font-medium text-gray-800">Frontend Developer</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Location</span>
            <span className="font-medium text-gray-800">Bangladesh</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm">
            Edit Profile
          </button>
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg text-sm">
            Logout
          </button>
        </div>

      </div>
    </div>
  )
}

export default Profile
