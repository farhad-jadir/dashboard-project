import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DocCode from '../SubPages/DocCode';
import { FaSearch } from "react-icons/fa";
import MapComponent from "../SubPages/map";

const Finished = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [position, setPosition] = useState([34.0522, -118.2437]); // Default: Los Angeles
  const locations = [
    {
      name: "Whitechapel Rd.",
      address: "Tulare County, Los Angeles, CA 23415",
      price: "$1,456,654.00",
      image: "fire1.png",
      lat: 34.0505,
      lon: -118.2453,
    },
    {
      name: "Whitechapel Rd.",
      address: "Tulare County, Los Angeles, CA 23415",
      price: "$1,456,654.00",
      image: "fire2.png",
      lat: 34.0510,
      lon: -118.2465,
    },
    {
      name: "Whitechapel Rd.",
      address: "Tulare County, Los Angeles, CA 23415",
      price: "$1,456,654.00",
      image: "fire3.png",
      lat: 34.0510,
      lon: -118.2465,
    },
    {
      name: "Whitechapel Rd.",
      address: "Tulare County, Los Angeles, CA 23415",
      price: "$1,456,654.00",
      image: "fire4.png",
      lat: 34.0510,
      lon: -118.2465,
    },
    
    
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f1f1f3] p-4 md:p-8 rounded-lg shadow-md">
        <div className="flex flex-row gap-2 items-center">
          <img src="cross.png" alt="Close" className="w-6 h-6" />
          <div>
            <p className="text-[#71717A] text-sm md:text-base">Home - Incidents - New Incident</p>
            <h1 className="text-[#030712] text-2xl md:text-4xl font-bold">New Incident</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-[#fafafa] text-[#71717A] text-base md:text-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-800 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/finished")}
            className="px-6 py-2 bg-orange-500 text-white text-base md:text-lg rounded-lg hover:bg-red-800"
          >
            Finished
          </button>
        </div>
        
      </div>

      {/* Main Content - 6 Grid Layout */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Left Section (4/6) */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-lg font-semibold">Location</p>
            <p className="text-gray-600">Tulare County, Los Angeles, CA 23415</p>
            <p className="text-lg font-semibold mt-2">Approx. Cost:</p>
            <p className="text-2xl font-bold text-green-600">$60,607,456.00</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <img src={loc.image} alt={loc.name} className="object-cover rounded-lg" />
                <h2 className="text-lg font-semibold mt-2">{loc.name}</h2>
                <p className="text-gray-600">{loc.address}</p>
                <p className="text-green-600 font-bold">{loc.price}</p>
              </div>
            ))}
          </div>
          <DocCode />
        </div>

        {/* Right Section (2/6) - Map */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold">Incident Map</h2>
          <MapComponent position={position} />
        </div>
      </div>
    </div>
  );
};

export default Finished;