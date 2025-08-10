import React from 'react'

function Dashboard() {
  return (
    <div>
         <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Revenue</h4>
              <p className="text-3xl font-bold">$12,450</p>
              <p className="text-blue-100 text-sm">+12% from last month</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Orders</h4>
              <p className="text-3xl font-bold">1,234</p>
              <p className="text-green-100 text-sm">+8% from last month</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Customers</h4>
              <p className="text-3xl font-bold">5,678</p>
              <p className="text-purple-100 text-sm">+15% from last month</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard