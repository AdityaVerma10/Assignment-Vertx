import React from "react";
import { FaThLarge, FaChartLine, FaGlobe, FaBell, FaCog } from "react-icons/fa";

const MobileNav = ({ activeSection, setActiveSection }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 py-2.5 bg-black z-50 md:hidden flex">
      <div
        className={`flex flex-col cursor-pointer items-center flex-1 py-2 ${
          activeSection === "Dashboard" ? "text-[#ffffff]" : "text-[#aaaaaa]"
        }`}
        onClick={() => setActiveSection("Dashboard")}
      >
        <FaThLarge className="text-lg mb-1" />
        <span className="text-xs">Dashboard</span>
      </div>
      <div
        className={`flex flex-col cursor-pointer items-center flex-1 py-2 ${
          activeSection === "Analytics" ? "text-[#ffffff]" : "text-[#aaaaaa]"
        }`}
        onClick={() => setActiveSection("Analytics")}
      >
        <FaChartLine className="text-lg mb-1" />
        <span className="text-xs">Analytics</span>
      </div>
      <div
        className={`flex flex-col cursor-pointer items-center flex-1 py-2 ${
          activeSection === "Connect" ? "text-[#ffffff]" : "text-[#aaaaaa]"
        }`}
        onClick={() => setActiveSection("Connect")}
      >
        <FaGlobe className="text-lg mb-1" />
        <span className="text-xs">Connect</span>
      </div>
      <div
        className={`flex flex-col cursor-pointer items-center flex-1 py-2 ${
          activeSection === "Activity" ? "text-[#ffffff]" : "text-[#aaaaaa]"
        }`}
        onClick={() => setActiveSection("Activity")}
      >
        <FaBell className="text-lg mb-1" />
        <span className="text-xs">Activity</span>
      </div>
      <div
        className={`flex flex-col cursor-pointer items-center flex-1 py-2 ${
          activeSection === "Profile" ? "text-[#ffffff]" : "text-[#aaaaaa]"
        }`}
        onClick={() => setActiveSection("Profile")}
      >
        <FaCog className="text-lg mb-1" />
        <span className="text-xs">Profile</span>
      </div>
    </div>
  );
};

export default MobileNav;
