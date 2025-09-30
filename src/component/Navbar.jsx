import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger & close icons
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-transparent text-white absolute top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold"><img src={assets.logo} alt="" /></div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-red-400">Home</a>
          <a href="#about" className="hover:text-red-400">About</a>
          <a href="#services" className="hover:text-red-400">Services</a>
          <a href="#projects" className="hover:text-red-400">Projects</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>

          {/* Enquire Now Button - only desktop */}
          <button className="ml-4 px-4 py-2 bg-red-500 rounded-full hover:bg-red-600 hidden md:inline-block">
            Enquire Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white w-full px-6 py-4 flex flex-col space-y-4">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
