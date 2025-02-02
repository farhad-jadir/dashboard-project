import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Bell, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f1f1f3] shadow-md  p-4 px-2 md:px-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img src="/Logo.png" alt="Logo" className="h-8" />
          </Link>
        </div>

        {/* Middle Side - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 font-medium hover:text-black">Dashboard</Link>
          <Link to="/incidents" className="text-gray-700 font-medium hover:text-black">Incidents</Link>
          <Link to="/locations" className="text-gray-700 font-medium hover:text-black">Locations</Link>
          <Link to="/activities" className="text-gray-700 font-medium hover:text-black">Activities</Link>
          <Link to="/documents" className="text-gray-700 font-medium hover:text-black">Documents</Link>
          <Link to="/cypher-ai" className="text-gray-700 font-medium hover:text-black">Cypher AI</Link>
        </div>

        {/* Right Side - Notification & Profile */}
        <div className="flex items-center space-x-4">
          <Bell className="text-gray-600 hidden md:block" size={24} />
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
          <Link to="/" className="py-2 text-gray-700" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/incidents" className="py-2 text-gray-700" onClick={() => setIsOpen(false)}>Incidents</Link>
          <Link to="/locations" className="py-2 text-gray-700" onClick={() => setIsOpen(false)}>Locations</Link>
          <Link to="/activities" className="py-2 text-gray-700" onClick={() => setIsOpen(false)}>Activities</Link>
          <Link to="/documents" className="py-2 text-gray-700" onClick={() => setIsOpen(false)}>Documents</Link>
          <Link to="/cypher-ai" className="py-2 text-gray-700" onClick={() => setIsOpen(false)}>Cypher AI</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
