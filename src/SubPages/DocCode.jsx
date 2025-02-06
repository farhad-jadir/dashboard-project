import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import MapComponent from "./map";

const DocCode = () => {
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
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      
      {/* Activities Section */}
      <div className="mt-6">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Activities</h2>
          <button className="text-gray-400 underline cursor-pointer">See all</button>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Activity name</h3>
                <p className="text-gray-600">{loc.address} • {loc.lat}, {loc.lon}</p>
                <p className="text-green-600 font-bold">{loc.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Line Bar Between Activities and Documents */}
      <div className="w-full h-1 bg-gray-300 rounded-full my-8 md:my-16"></div>

      {/* Documents Section */}
      <div>
        {/* Section Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Documents</h2>
          <button className="text-gray-400 underline cursor-pointer">See all</button>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Document name</h3>
                <p className="text-gray-600">{loc.address} • {loc.lat}, {loc.lon}</p>
                <p className="text-green-600 font-bold">{loc.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocCode;
