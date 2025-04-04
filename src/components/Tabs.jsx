import React from "react";

const Tabs = ({ activeSection, activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b border-gray-700 relative">
      <div
        className={`px-5 py-4 cursor-pointer text-sm relative ${
          activeTab === "Overview"
            ? "text-[#ffffff] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1e88e5]"
            : "text-[#aaaaaa]"
        }`}
        onClick={() => setActiveTab("Overview")}
      >
        Overview
      </div>
      {activeSection === "Analytics" && (
        <div
          className={`px-5 py-4 cursor-pointer text-sm relative ${
            activeTab === "Demographics"
              ? "text-[#ffffff] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1e88e5]"
              : "text-[#aaaaaa]"
          }`}
          onClick={() => setActiveTab("Demographics")}
        >
          Demographics
        </div>
      )}
      {activeSection === "Profile" && (
        <div
          className={`px-5 py-4 cursor-pointer text-sm relative ${
            activeTab === "Portfolio"
              ? "text-[#ffffff] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1e88e5]"
              : "text-[#aaaaaa]"
          }`}
          onClick={() => setActiveTab("Portfolio")}
        >
          Portfolio
        </div>
      )}
      <div className="ml-auto px-5 py-4 cursor-pointer text-sm">More</div>
    </div>
  );
};

export default Tabs;
