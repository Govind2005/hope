import { useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import Central from "./components/Central";
import State from "./components/State";
import District from "./components/District";
import Village from "./components/Village";
import Agency from "./components/Agency";

type TabType = "Central" | "State" | "District" | "Village" | "Agency";

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("Central");

  const renderContent = () => {
    switch (activeTab) {
      case "Central": return <Central />;
      case "State": return <State />;
      case "District": return <District />;
      case "Village": return <Village />;
      case "Agency": return <Agency />;
      default: return null;
    }
  };

  return (
    <div className="p-4">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
