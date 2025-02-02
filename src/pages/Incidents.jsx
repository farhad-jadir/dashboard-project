import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Button from '../ReusableComponents/Button';
import Hero from "../Components/Hero";
import NewIncidents from "../SubPages/NewIncidents"; // ✅ NewIncident.jsx ইমপোর্ট

const Incidents = () => {
  const [showNewIncident, setShowNewIncident] = useState(false);

  return (
    <div>
      {/* Conditional Rendering: NewIncidents দেখাবে অথবা পুরো Incidents.jsx */}
      {showNewIncident ? (
        <NewIncidents /> // ✅ এখন শুধু NewIncidents.jsx দেখাবে
      ) : (
        <div>
          {/* Incidents Header */}
          <div className="bg-[#f1f1f3] shadow-md p-4 px-2 sm:px-6 md:px-14">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
              {/* Left Side */}
              <div className="flex items-center space-x-8 mb-4 sm:mb-0">
                <Link to="/">
                  <p className="text-[#71717A] text-sm md:text-base">Welcome back</p>
                  <h1 className="text-[#09090B] font-bold text-xl sm:text-2xl md:text-3xl">Dashboard</h1>
                </Link>
              </div>

              {/* Right Side - Search, Sort, and New Incident */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Search Bar */}
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search incident"
                    className="bg-[#FAFAFA] font-semibold border border-gray-300 rounded-lg px-3 py-2 text-lg md:text-base w-full sm:w-64 pl-10"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                </div>

                {/* Sort Button */}
                <Button className="bg-[#FAFAFA] text-[#71717A] hover:bg-gray-100 w-full sm:w-auto rounded-md">
                  Sort By: Date modified
                </Button>

                {/* New Incident Button */}
                <Button 
                  className="w-full sm:w-auto hover:bg-orange-800 text-[#FAFAFA] rounded-md"
                  onClick={() => setShowNewIncident(true)} // ✅ ক্লিক করলে শুধু NewIncidents দেখাবে
                >
                  New Incident
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <Hero />
        </div>
      )}
    </div>
  );
};

export default Incidents;
