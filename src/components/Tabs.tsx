type TabType = "Central" | "State" | "District" | "Village" | "Agency";

interface TabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs: TabType[] = [
    "Central",
    "State",
    "District",
    "Village",
    "Agency"
  ];

  return (
    <div className="flex gap-4 justify-center">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-md transition 
            ${activeTab === tab 
              ? "bg-blue-600 text-white" 
              : "bg-gray-200 hover:bg-gray-300"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
