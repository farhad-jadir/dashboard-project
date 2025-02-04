import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ReusableComponents/Button";

const incidentTypes = [
  { name: "Avalanche", "image": "/step1.png" },
  { name: "Biological", "image": "/step2.png" },
  { name: "Blizzard", "image": "/step3.png" },
  { name: "Cold/Freezing", "image": "/step4.png" },
  { name: "Drought", "image": "/step5.png"},
  { name: "Earthquake", "image": "/step6.png" },
  { name: "Flooding", "image": "/step7.png" },
  { name: "Heat Wave", "image": "/step8.png" },
  { name: "Hail", "image": "/step9.png" },
  { name: "Lightning", "image": "/step10.png" },
  { name: "Man Made", "image": "/step11.png" },
  { name: "Mudslide", "image": "/step12.png" },
  { name: "Severe Storm", "image": "/step13.png" },
  { name: "Strong Wind", "image": "/step14.png" },
  { name: "Tornado", "image": "/step15.png"},
  { name: "Tsunami", "image": "/step16.png" },
  { name: "Volcanic Eruption", "image": "/step17.png" },
  { name: "Wildfire", "image": "/step18.png" },
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
            className="px-8 md:px-12 py-2 bg-[#fafafa] text-[#71717A] text-base md:text-lg rounded-lgtransition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-800 rounded-md hover:text-white"
          >
            Back
          </button>
          <Button
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-red-800"
            onClick={() => navigate("/NextStep")}
          >
            Next Step
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 bg-white p-4 md:p-6 rounded-lg shadow-md mt-4">
        {/* Question */}
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 text-center">
          Which of these best describes the incident?
        </h2>

        {/* Incident Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {incidentTypes.map((incident) => (
            <button
              key={incident.name}
              className={`flex flex-row items-center justify-start p-4 rounded-lg text-gray-700 border transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
                selectedIncident === incident.name
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedIncident(incident.name)}
            >
              <div className="flex flex-row items-center gap-2">
                <img src={incident.image} className="object-cover rounded-lg" />
                <span className="text-base">{incident.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;