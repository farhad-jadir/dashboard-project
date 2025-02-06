import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DocCode from '../SubPages/DocCode';
import { Search } from "lucide-react";
import MapComponent from "../SubPages/map";
import Button from '../ReusableComponents/Button';

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
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f1f1f3] p-4 md:p-8 rounded-lg shadow-md">
        <div className="flex flex-row gap-2 items-center px-2 md:px-8">
          
          <div>
            <p className="text-[#71717A] text-sm md:text-base p-2">Incidents - DR-4699 March 2023 Severe Storms </p>
            <div className="flex flex-row items-center gap-2">
              <img src="tree.png" alt="Close" className="w-6 h-6" />
              <h1 className="text-[#030712] text-xl md:text-3xl font-bold">DR-4699 March 2023 Severe Storms</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-4 px-2 md:px-8 ">
          <div className="relative w-full sm:w-auto flex items-center">
                <Search className="absolute left-3 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search incident"
                    className="bg-[#FAFAFA] font-semibold border border-gray-300 rounded-lg px-3 py-2 text-base md:text-[16px] md:text-base w-full sm:w-64 pl-10"
                  />
                </div>
            <Button className="bg-[#FAFAFA] text-[#71717A] hover:bg-orange-800 hover:text-white w-full sm:w-auto rounded-md">
              Sort By: Date modified
            </Button>
            <Button 
                    className="w-full sm:w-auto hover:bg-orange-800 text-[#FAFAFA] rounded-md flex items-center gap-2" // Added flex, items-center, and gap-2
                    onClick={() => setShowNewIncident(true)} // ✅ ক্লিক করলে শুধু NewIncidents দেখাবে
                  >
                  <img className="" src="plus.png" alt="" />
                  New Location
            </Button>
          
        </div>
        
      </div>

      {/* Main Content - 6 Grid Layout */}
      <div className="mx-2 md:mx-8 mt-6 grid grid-cols-1 md:grid-cols-6 gap-6 p-0 md:p-6">
        {/* Left Section (4/6) */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow space-y-4 md:space-y-8">
            <div className="flex flex-row gap-2">
              <img className="w-8 h-8 md:w-10 md:h-10" src="map.png" alt="" />
            <div>
              <p className="text-base text-[#6B7280]">Location</p>
              <h1 className="text-[#09090B] font-bold text-lg md:text-xl">Tulare County, Los Angeles, CA 23415</h1>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img className="w-8 h-8 md:w-10 md:h-10" src="map.png" alt="" />
              <div>
              <p className="text-base text-[#6B7280]">Approx. Cost:</p>
              <h1 className="text-[#09090B] font-bold text-lg md:text-xl">$60,607,456.00</h1>
              </div>
            </div>
          </div>
          {/* Line Bar Between Activities and Documents */}
      <div className="w-full h-1 bg-gray-300 rounded-full my-16"></div>
          <div>
              <h1 className="text-base leading-[22px] text-[#000000] font-onset text-tight font-bold ">Description</h1>
              <p className="text-base leading-[22px] text-[#71717A] font-onset text-tight font-normal ">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
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
          <div className="flex-1 flex items-center justify-center mx-2 sm:mx-4 my-4 md:my-0">
          <div className="w-full h-1 mt-12 mb-12 bg-gray-200 rounded-full relative">
            
          </div>
        </div>
          <DocCode />
        </div>

        {/* Right Section (2/6) - Map */}
        <div className="md:col-span-2 bg-white p-2 rounded-lg shadow">
          <h2 className="text-xl font-bold">Incident Map</h2>
          <MapComponent position={position} />
        </div>
      </div>
    </div>
  );
};

export default Finished;