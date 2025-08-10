import React from 'react'

const User = () => {
  return (
    <>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">👤 User Profile</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
                <p className="text-gray-600">Software Developer</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="font-medium text-gray-700">Email:</span> john.doe@example.com</div>
              <div><span className="font-medium text-gray-700">Location:</span> San Francisco, CA</div>
              <div><span className="font-medium text-gray-700">Experience:</span> 5+ years</div>
              <div><span className="font-medium text-gray-700">Skills:</span> React, Node.js, Python</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default User