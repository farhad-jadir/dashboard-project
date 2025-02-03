import { useState } from "react";
import { useNavigate } from "react-router-dom";

const incidentTypes = [
  { name: "Avalanche", icon: "🏔️" },
  { name: "Biological", icon: "🦠" },
  { name: "Blizzard", icon: "❄️" },
  { name: "Cold/Freezing", icon: "🥶" },
  { name: "Drought", icon: "🌵" },
  { name: "Earthquake", icon: "🌍" },
  { name: "Flooding", icon: "🌊" },
  { name: "Heat Wave", icon: "🔥" },
  { name: "Hail", icon: "🌨️" },
  { name: "Lightning", icon: "⚡" },
  { name: "Man Made", icon: "✋" },
  { name: "Mudslide", icon: "🌧️" },
  { name: "Severe Storm", icon: "🌪️" },
  { name: "Strong Wind", icon: "💨" },
  { name: "Tornado", icon: "🌪️" },
  { name: "Tsunami", icon: "🌊" },
  { name: "Volcanic Eruption", icon: "🌋" },
  { name: "Wildfire", icon: "🔥" },
];

const GetStarted = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4"> {/* ✅ পুরো ওয়েবসাইটের ব্যাকগ্রাউন্ড */}
      {/* Header Section */}
      <div className="flex items-center justify-between bg-[#f1f1f3] p-4 rounded-lg shadow-md"> {/* ✅ হেডার bg-white */}
        {/* Left: New Incident */}
        <div className="text-xl font-bold text-gray-800">New Incident</div>

        {/* Middle: Progress Line */}
        <div className="flex-1 mx-4 ">
          <div className="w-150 h-1.5 bg-gray-200 rounded-full relative"> {/* ✅ প্রগ্রেস বার ছোট করা */}
            <div
              className="h-full bg-orange-500 rounded-full"
              style={{ width: "16.67%" }} // 1/6 of the progress line
            ></div>
          </div>
        </div>

        {/* Right: Back and Next Step Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/next-step")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            disabled={!selectedIncident}
          >
            Next Step
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 mt-6 bg-white p-6 rounded-lg shadow-md"> {/* ✅ Body bg-white */}
        {/* Question */}
        <h2 className="text-xl font-semibold text-gray-800">
          Which of these best describes the incident?
        </h2>

        {/* Incident Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {incidentTypes.map((incident) => (
            <button
              key={incident.name}
              className={`flex flex-col items-center justify-center w-32 h-32 rounded-lg text-gray-700 border transition ${
                selectedIncident === incident.name
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedIncident(incident.name)}
            >
              <span className="text-2xl">{incident.icon}</span>
              <span className="mt-2 text-sm text-center">{incident.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
