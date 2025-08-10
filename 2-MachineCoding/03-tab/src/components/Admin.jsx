import React from 'react'

function Admin() {
  return (
    <div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">⚙️ Admin Panel</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">User Management</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Total Users:</span> <span className="font-medium text-blue-600">1,234</span></div>
                <div className="flex justify-between"><span>Active Users:</span> <span className="font-medium text-green-600">987</span></div>
                <div className="flex justify-between"><span>New Users:</span> <span className="font-medium text-orange-600">45</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">System Status</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Server Status:</span> <span className="text-green-600 font-medium">Online</span></div>
                <div className="flex justify-between"><span>Database:</span> <span className="text-green-600 font-medium">Connected</span></div>
                <div className="flex justify-between"><span>Last Backup:</span> <span className="text-gray-600">2 hours ago</span></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Admin