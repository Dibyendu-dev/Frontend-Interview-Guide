import React, { useState } from "react";

const Tab = ({ tabData }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-100">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
        {tabData.map((item, index) => {
          const isActive = index === currentTabIndex;
          return (
            <button
              key={index}
              onClick={() => setCurrentTabIndex(index)}
              className={`
                            px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ease-in-out
                            ${
                              isActive
                                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                                : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:shadow-md"
                            }
                        `}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px] p-6 bg-gray-50 rounded-xl border border-gray-100">
        <div className="animate-fadeIn">{tabData[currentTabIndex].content}</div>
      </div>
    </div>
  );
};

export default Tab;
