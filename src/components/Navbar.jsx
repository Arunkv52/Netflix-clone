import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { ChevronDown } from "lucide-react";
import User from "../assets/user-icon.jpg";
import { Link } from "react-router";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <nav className="md:flex justify-between items-center w-full md:py-5 md:px-10">
        <div className="nav-left md:flex gap-5">
          <div>
            <img src={Logo} alt="" className="w-[100px]" />
          </div>
          <div className="NavMenu">
            <ul className="text-white md:flex justify-between gap-5">
              <Link to={'/'}>Home</Link>
              <Link to={'/tvshows'}>TV Shows</Link>
              <Link to={'/movies'}>Movies</Link>
              <Link to={'/recently'}>Recently Added</Link>
              <Link to={'/mylist'}>My List</Link>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <div className="Nav-area text-white md:flex justify-between items-center gap-5">
            <Search />
            <Bell />
            <div className="relative">
              {/* Button (User + Chevron) */}
              <div
                className="my-dropdown flex items-center gap-1 cursor-pointer select-none"
                onClick={() => setOpen(!open)}
              >
                <img
                  src={User}
                  alt="User"
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              {open && (
                <div className="absolute right-0 mt-2 w-30 bg-white shadow-lg rounded-lg overflow-hidden">
                  <button
                    onClick={() => alert("Signed out!")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
