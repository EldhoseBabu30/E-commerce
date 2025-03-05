import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/frontend_assets/storever.png';
import { useState } from "react";
import {  FaSearch, FaTimes, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 my-6 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-100 shadow-sm rounded-b-lg">
      <div className="flex items-center justify-between py-2 font-medium max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Container */}
        <div className="w-40 h-16 overflow-hidden flex items-center justify-center">
          <Link to='/'>
         
          <img
            src={logo}
            className="w-full h-full object-contain hover:opacity-80 transition-opacity"
            alt="Storever Logo"
          />
           </Link>
        </div>

      

        <ul
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-600 absolute sm:static top-16 left-0 right-0 bg-white sm:bg-transparent p-4 sm:p-0`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 hover:text-gray-900 transition-colors ${
                isActive ? "text-gray-900" : ""
              }`
            }
          >
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-900 opacity-0 transition-opacity group-hover:opacity-100" />
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 hover:text-gray-900 transition-colors ${
                isActive ? "text-gray-900" : ""
              }`
            }
          >
            <p>Collection</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-900 opacity-0 transition-opacity group-hover:opacity-100" />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 hover:text-gray-900 transition-colors ${
                isActive ? "text-gray-900" : ""
              }`
            }
          >
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-900 opacity-0 transition-opacity group-hover:opacity-100" />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 hover:text-gray-900 transition-colors ${
                isActive ? "text-gray-900" : ""
              }`
            }
          >
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-900 opacity-0 transition-opacity group-hover:opacity-100" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <div className="relative">
            {showSearch ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                />
                <FaTimes
                  className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
                  size={18}
                  onClick={() => setShowSearch(false)}
                />
              </div>
            ) : (
              <FaSearch
                className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
                size={18}
                onClick={() => setShowSearch(true)}
              />
            )}
          </div>

          <div className="group relative">
            <FaUser
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
              size={18}
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white border border-gray-200 shadow-lg rounded-lg">
                <p className="cursor-pointer hover:text-black transition-colors">Profile</p>
                <p className="cursor-pointer hover:text-black transition-colors">Orders</p>
                <p className="cursor-pointer hover:text-black transition-colors">Logout</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <FaShoppingCart
              size={18}
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>
        </div>
        <div className="sm:hidden">
          <FaBars
            className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
            size={24}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;