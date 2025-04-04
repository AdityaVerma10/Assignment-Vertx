import React from "react";
import {
  FaChartLine,
  FaChartBar,
  FaPlug,
  FaComments,
  FaUser,
  FaCog,
  FaPlus,
} from "react-icons/fa";

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="w-60 bg-[#000] py-5 flex flex-col relative border-r border-gray-700 hidden md:flex">
      <div className="flex items-center px-5 mb-8">
        <div className="w-6 h-6 mr-2.5">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <span>Vertxlabs, Inc</span>
      </div>

      <div className="flex-1">
        <div
          className={`flex items-center px-5 py-3 cursor-pointer ${
            activeSection === "Dashboard"
              ? "[#ffffff] bg-opacity-5 border-l-3 border-[#1e88e5]"
              : "text-[#aaaaaa] hover:text-[#ffffff]"
          }`}
          onClick={() => setActiveSection("Dashboard")}
        >
          <FaChartLine className="mr-4 text-lg" />
          <span>Dashboard</span>
        </div>
        <div
          className={`flex items-center px-5 py-3 cursor-pointer ${
            activeSection === "Analytics"
              ? "text-[#ffffff] bg-opacity-5 border-l-3 border-[#1e88e5]"
              : "text-[#aaaaaa] hover:text-[#ffffff]"
          }`}
          onClick={() => setActiveSection("Analytics")}
        >
          <FaChartBar className="mr-4 text-lg" />
          <span>Analytics</span>
        </div>
        <div
          className={`flex items-center px-5 py-3 cursor-pointer ${
            activeSection === "Connect"
              ? "text-[#ffffff] bg-opacity-5 border-l-3 border-[#1e88e5]"
              : "text-[#aaaaaa] hover:text-[#ffffff]"
          }`}
          onClick={() => setActiveSection("Connect")}
        >
          <FaPlug className="mr-4 text-lg" />
          <span>Connect</span>
        </div>
        <div
          className={`flex items-center px-5 py-3 cursor-pointer ${
            activeSection === "Dealroom"
              ? "text-[#ffffff] bg-opacity-5 border-l-3 border-[#1e88e5]"
              : "text-[#aaaaaa] hover:text-[#ffffff]"
          }`}
          onClick={() => setActiveSection("Dealroom")}
        >
          <FaComments className="mr-4 text-lg" />
          <span>Dealroom</span>
        </div>
        <div
          className={`flex items-center px-5 py-3 cursor-pointer ${
            activeSection === "Profile"
              ? "text-[#ffffff] bg-opacity-5  border-l-3 border-[#1e88e5]"
              : "text-[#aaaaaa] hover:text-[#ffffff]"
          }`}
          onClick={() => setActiveSection("Profile")}
        >
          <FaUser className="mr-4 text-lg" />
          <span>Profile</span>
        </div>
        <div
          className={`flex items-center px-5 py-3 cursor-pointer ${
            activeSection === "Settings"
              ? "text-[#ffffff] bg-opacity-5 border-l-3 border-[#1e88e5]"
              : "text-[#aaaaaa] hover:text-[#ffffff]"
          }`}
          onClick={() => setActiveSection("Settings")}
        >
          <FaCog className="mr-4 text-lg" />
          <span>Settings</span>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 w-10 h-10 bg-[#1e88e5] rounded-full flex items-center justify-center cursor-pointer">
        <FaPlus />
      </div>
    </div>
  );
};

export default Sidebar;
