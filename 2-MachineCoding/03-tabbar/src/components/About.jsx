import React from 'react'

const About = () => {
  return (
    <div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">ℹ️ About Us</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a passionate team dedicated to creating innovative solutions that make a difference. 
              Our mission is to build user-friendly applications that solve real-world problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Our Values</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Innovation and creativity</li>
                  <li>• User-centered design</li>
                  <li>• Quality and reliability</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Contact Info</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>📍 123 Innovation Street, Tech City</p>
                  <p>📧 contact@company.com</p>
                  <p>📞 +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About