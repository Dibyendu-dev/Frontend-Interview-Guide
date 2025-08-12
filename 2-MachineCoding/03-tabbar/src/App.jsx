import "./App.css";
import About from "./components/About";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import Tab from "./components/Tab";
import User from "./components/User";

function App() {
  const tabData = [
    {
      label: "Profile",
      content: <User />,
    },
    {
      label: "Admin",
      content: <Admin />,
    },
    {
      label: "Dashboard",
      content: <Dashboard />,
    },
    {
      label: "About",
      content: <About />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Modern Tab Component
        </h1>
        <p className="text-gray-600">Beautiful and responsive tab interface</p>
      </div>
      <Tab tabData={tabData} />
    </div>
  );
}

export default App;
