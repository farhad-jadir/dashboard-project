import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Bell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-[#f1f1f3] shadow-md p-4 px-2 md:px-20 border-b-2 border-[#E4E4E7] relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img src="/Logo.png" alt="Logo" className="h-8" />
          </Link>
        </div>

        {/* Middle Side - Navigation Links */}
        <div className="hidden md:flex space-x-6 relative">
          {[ 
            { to: "/", label: "Dashboard" },
            { to: "/incidents", label: "Incidents" },
            { to: "/locations", label: "Locations" },
            { to: "/activities", label: "Activities" },
            { to: "/documents", label: "Documents" },
            { to: "/cypher-ai", label: "Cypher AI" }
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-medium hover:text-black ${location.pathname === link.to ? 'text-black after:absolute after:bottom-[-24px] after:left-0 after:w-full after:h-[3px] after:bg-black' : 'text-gray-700'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side - Notification & Profile */}
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 bg-[#fafafa] rounded-full flex items-center justify-center">
              <Bell className="text-gray-600" size={24} />
          </div>
          <div className="flex items-center space-x-2">
            <img src="/user-avatar.png" alt="User" className="h-8 w-8 rounded-full border" />
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-800">Usman Zafar</p>
              <p className="text-xs text-gray-500">usmanzafar@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white p-4 shadow-md">
          {[ 
            { to: "/", label: "Dashboard" },
            { to: "/incidents", label: "Incidents" },
            { to: "/locations", label: "Locations" },
            { to: "/activities", label: "Activities" },
            { to: "/documents", label: "Documents" },
            { to: "/cypher-ai", label: "Cypher AI" }
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-2 ${location.pathname === link.to ? 'text-black border-b-2 border-black' : 'text-gray-700'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
