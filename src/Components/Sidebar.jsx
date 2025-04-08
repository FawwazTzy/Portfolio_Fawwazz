import { useState } from "react";
import { FaBook, FaHome, FaBars, FaChevronDown, FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-800 text-white fixed top-3 left-4 z-50 rounded-md shadow-lg"
      >
        <FaBars />
      </button>

      {/* Floating Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen w-64 fixed top-9 left-0 p-5 transition-transform duration-300 ease-in-out shadow-xl
          ${isOpen ? "translate-x-0" : "-translate-x-64"}`}
      >
        <h2 className="text-xl font-bold mb-5">Wiki Sidebar</h2>
        <ul className="space-y-3">
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <FaHome /> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <FaHome /> <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <FaHome /> <span>Server</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <FaHome /> <span>Language</span>
            </a>
          </li>

          {/* Documentation Category */}
          <li>
            <button onClick={() => toggleMenu("docs")} className="flex items-center justify-between w-full text-left hover:text-gray-300">
              <div className="flex items-center space-x-2">
                <FaBook /> <span>Documentation</span>
              </div>
              {openMenu === "docs" ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            {openMenu === "docs" && (
              <ul className="ml-6 mt-2 space-y-2">
                <li><a href="#" className="block hover:text-gray-300">• Getting Started</a></li>
                <li><a href="#" className="block hover:text-gray-300">• API Reference</a></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;