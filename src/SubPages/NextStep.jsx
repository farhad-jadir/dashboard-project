import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ReusableComponents/Button";

const NextStep = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f1f1f3] p-4 md:p-8 rounded-lg shadow-md w-full">
        {/* Left: New Incident */}
        <div className="flex flex-row gap-2 items-center px-4 md:px-8 p-2">
          <img src="cross.png" alt="cross" className="w-8 h-8 md:w-10 md:h-10" />
          <div>
            <p className="text-[#71717A] text-xs sm:text-sm md:text-base">
              Home - Incidents - New Incident
            </p>
            <h1 className="text-[#030712] text-xl sm:text-2xl md:text-4xl font-bold">
              New Incident
            </h1>
          </div>
        </div>

        {/* Middle: Progress Line */}
        <div className="flex-1 flex items-center justify-center mx-2 sm:mx-4 my-4 md:my-0">
          <div className="w-48 sm:w-64 md:w-96 h-1.5 bg-gray-200 rounded-full relative">
            <div className="h-full bg-orange-500 rounded-full" style={{ width: "33.33%" }}></div>
          </div>
        </div>

        {/* Right: Back and Next Step Buttons */}
        <div className="flex gap-4 px-4 md:px-8">
          <button
            onClick={() => navigate(-1)}
            className="px-6 md:px-8 lg:px-12 py-2 bg-[#fafafa] text-[#71717A] text-sm sm:text-base md:text-lg rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-800 hover:text-white"
          >
            Back
          </button>
          <Button
            className="px-6 md:px-8 lg:px-12 py-2 bg-orange-500 text-white text-sm sm:text-base md:text-lg rounded-md hover:bg-red-800"
            onClick={() => navigate("/NextStep")}
          >
            Next Step
          </Button>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-md mt-6 max-w-3xl mx-auto w-full">
        {/* Title Input */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
            Let’s give the incident a title?
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Make a title that will easily identify the incidents.
          </p>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none transition duration-200 ease-in-out"
            placeholder="Add title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description Input */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
            Describe what happened during the incident?
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Share some information about the incident. The when, where, how.
          </p>
          <textarea
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-100 h-32 resize-none focus:ring-2 focus:ring-orange-500 focus:outline-none transition duration-200 ease-in-out"
            placeholder="Type here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
