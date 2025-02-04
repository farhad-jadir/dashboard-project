import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaSearch } from 'react-icons/fa'; // FontAwesome Search Icon

// Custom Marker Icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Locations = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState([40.7128, -74.006]); // Default: New York City
  const [address, setAddress] = useState("");

  // Handle Map Click
  const handleMapClick = (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f1f1f3] p-4 md:p-8 rounded-lg shadow-md">
        {/* Left: Breadcrumb */}
        <div className="flex flex-row gap-2 items-center">
          <img src="cross.png" alt="Close" className="w-6 h-6" />
          <div>
            <p className="text-[#71717A] text-sm md:text-base">
              Home - Incidents - New Incident
            </p>
            <h1 className="text-[#030712] text-2xl md:text-4xl font-bold">New Incident</h1>
          </div>
        </div>

        {/* Middle: Progress Bar */}
        <div className="flex-1 flex items-center justify-center mx-4 my-4 md:my-0">
          <div className="w-64 md:w-96 h-1.5 bg-gray-200 rounded-full relative">
            <div className="h-full bg-orange-500 rounded-full" style={{ width: "50%" }}></div>
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
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Where’s the incident?
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-4">
          Enter a GPS, address, or pin point on the map. Try to be as accurate as possible, or click: Jurisdiction Wide
        </p>

        {/* Search Inputs with Icons */}
        <div className="flex w-full gap-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter incident address or GPS"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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

        {/* Map */}
        <div className="w-full h-80 rounded-lg overflow-hidden">
          <MapContainer
            center={position}
            zoom={13}
            className="w-full h-full rounded-lg"
            onClick={handleMapClick}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={markerIcon}>
              <Popup>Incident Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Locations;
