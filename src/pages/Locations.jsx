import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaSearch } from 'react-icons/fa';
import axios from "axios";

// Custom Marker Icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Map View Update Component
const ChangeMapView = ({ position }) => {
  const map = useMap();
  map.setView(position, 13); // নতুন লোকেশন পেলে ম্যাপ সেট করবে
  return null;
};

const Locations = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState([23.8103, 90.4125]); // Default: Dhaka
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch location suggestions
  const handleSearch = async (query) => {
    setAddress(query);
    if (query.length > 2) {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
      }
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
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
        if (response.data.length > 0) {
          const { lat, lon, display_name } = response.data[0];
          handleSelectLocation(lat, lon, display_name);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f1f1f3] p-4 md:p-8 rounded-lg shadow-md">
        <div className="flex flex-row gap-2 items-center">
          <img src="cross.png" alt="Close" className="w-6 h-6" />
          <div>
            <p className="text-[#71717A] text-sm md:text-base">
              Home - Incidents - New Incident
            </p>
            <h1 className="text-[#030712] text-2xl md:text-4xl font-bold">New Incident</h1>
          </div>
        </div>

        {/* Right: Navigation Buttons */}
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

      {/* Form Section */}
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-md mt-6 max-w-3xl mx-auto w-full">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Where’s the incident?
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-4">
          Enter a GPS, address, or pin point on the map. Try to be as accurate as possible, or click: Jurisdiction Wide
        </p>

        {/* Search Input with Suggestions */}
        <div className="relative mb-4">
          <div className="flex">
            <div className="flex-1 relative">
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
            <button
              className="px-6 py-3 border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => alert("Pinpoint damage feature coming soon!")}
            >
              Pinpoint damage
            </button>
          </div>

          {/* Suggestions Dropdown */}
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

        {/* Map */}
        <div className="w-full h-80 rounded-lg overflow-hidden">
          <MapContainer
            center={position}
            zoom={13}
            className="w-full h-full rounded-lg"
          >
            <ChangeMapView position={position} />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={markerIcon}>
              <Popup>{address || "Incident Location"}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Locations;
