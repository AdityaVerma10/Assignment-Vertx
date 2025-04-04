import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import VisitorsChart from "./components/VisitorsChart";
import InsightsSection from "./components/InsightsSection";
import DemographicsSection from "./components/DemographicsSection";
import ProfileSection from "./components/ProfileSection";
import MobileNav from "./components/MobileNav";

function App() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeSection, setActiveSection] = useState("Analytics");

  return (
    <div className="flex min-h-screen">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="flex-1 overflow-y-auto">
        <Header activeSection={activeSection} />
        <Tabs
          activeSection={activeSection}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className={`${activeSection !== "Profile" ? "p-5" : ""}`}>
          {activeSection === "Analytics" && (
            <>
              <h2 className="text-2xl font-semibold mb-5">{activeTab}</h2>

              {activeTab === "Overview" && (
                <>
                  <div className="lg:flex gap-4">
                    <VisitorsChart />
                    <InsightsSection />
                  </div>
                  <DemographicsSection />
                </>
              )}

              {activeTab === "Demographics" && <DemographicsSection />}
            </>
          )}

          {activeSection === "Profile" && <ProfileSection />}
        </div>
      </div>

      <MobileNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

export default App;
