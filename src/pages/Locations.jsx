import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import axios from "axios";
import MapComponent from "../SubPages/map"; // MapComponent 
import Button from "../ReusableComponents/Button";

const Locations = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState([23.8103, 90.4125]); // Default: Dhaka
  const [address, setAddress] = useState("");
  const [pinpoint, setPinpoint] = useState(""); // Separate state for pinpoint input
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch location suggestions with debounce effect
  const handleSearch = async (query) => {
    setAddress(query);
    if (query.length > 2) {
      setLoading(true);
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
      }
      setLoading(false);
    } else {
      setSuggestions([]);
    }
  };

  // Select a suggested location
  const handleSelectLocation = (lat, lon, displayName) => {
    const newPosition = [parseFloat(lat), parseFloat(lon)];
    setPosition(newPosition);
    setAddress(displayName);
    setSuggestions([]); // Hide suggestions
  };

  // Handle Enter key press
  const handleKeyPress = async (event) => {
    if (event.key === "Enter" && address.length > 2) {
      setLoading(true);
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
        if (response.data.length > 0) {
          const { lat, lon, display_name } = response.data[0];
          handleSelectLocation(lat, lon, display_name);
        } else {
          alert("No location found!");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f1f1f3] p-4 md:p-8 rounded-lg shadow-md">
        <div className="flex flex-row gap-2 items-center p-2 px-0 md:px-8">
          <img src="cross.png" alt="Close" className="w-8 h-8 md:w-10 md:h-10" />
          <div>
            <p className="text-[#71717A] text-sm md:text-base">Home - Incidents - New Incident</p>
            <h1 className="text-[#030712] text-2xl md:text-4xl font-bold">New Incident</h1>
          </div>
        </div>
        <div className="flex gap-4 px-4 md:px-8">
          <button
            onClick={() => navigate(-1)}
            className="px-6 md:px-8 lg:px-12 py-2 bg-[#fafafa] text-[#71717A] text-sm sm:text-base md:text-lg rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-800 hover:text-white"
          >
            Back
          </button>
          <Button
            onClick={() => navigate("/finished")}
            className="px-6 md:px-8 lg:px-12 py-2 bg-orange-500 text-white text-sm sm:text-base md:text-lg rounded-md hover:bg-red-800"
          >
            Finished
          </Button>
        </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-lg shadow-md mt-6 max-w-3xl mx-auto w-full">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Where’s the incident?</h2>
        <p className="text-[#71717A] text-sm md:text-base mb-4">Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>

        <div className="relative mb-4">
          {/* First Input Field with Search Icon */}
          <div className="flex items-center mb-4">
            <div className="relative flex-grow">
              <input
                type="text"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter incident address or GPS"
                value={address}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Second Input Field with Search Icon */}
          <div className="flex items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Pinpoint damage"
                value={pinpoint}
                onChange={(e) => setPinpoint(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {loading && <p className="text-gray-500">Loading location...</p>}
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelectLocation(suggestion.lat, suggestion.lon, suggestion.display_name)}
                >
                  {suggestion.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <MapComponent position={position} address={address} />
      </div>
    </div>
  );
};

export default Locations;