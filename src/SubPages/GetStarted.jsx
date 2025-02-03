import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ReusableComponents/Button";

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
    <div className="min-h-screen flex flex-col bg-white p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f1f1f3] p-4 md:p-8 rounded-lg shadow-md">
        {/* Left: New Incident */}
        <div className="flex flex-row gap-2 items-center">
          <img src="cross.png" alt="cross" className="w-6 h-6" />
          <div>
            <p className="text-[#71717A] text-sm md:text-base">
              Home - Incidents - New Incident
            </p>
            <h1 className="text-[#030712] text-2xl md:text-4xl">New Incident</h1>
          </div>
        </div>

        {/* Middle: Progress Line */}
        <div className="flex-1 flex items-center justify-center mx-4 my-4 md:my-0">
          <div className="w-64 md:w-96 h-1.5 bg-gray-200 rounded-full relative">
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
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Back
          </button>
          <Button
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            onClick={() => navigate("/GetStarted")}
          >
            Next Step
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 bg-white p-4 md:p-6 rounded-lg shadow-md mt-4">
        {/* Question */}
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Which of these best describes the incident?
        </h2>

        {/* Incident Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 w-full max-w-6xl">
          {incidentTypes.map((incident) => (
            <button
              key={incident.name}
              className={`flex flex-row items-center justify-start p-4 rounded-lg text-gray-700 border transition ${
                selectedIncident === incident.name
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedIncident(incident.name)}
            >
              <span className="text-2xl mr-2">{incident.icon}</span>
              <span className="text-sm">{incident.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;