import React from "react";

import { assets } from './../assets/assets';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={assets.logo} alt="logo" />
        </div>

        {/* Links + Button */}
        <div className="flex items-center space-x-9">
          <a href="#home" className=" text-white transition">Home</a>
          <a href="#about" className="text-white transition">About Us</a>
          <a href="#projects" className="text-white  transition">Our Project</a>
          <a href="#contact" className="text-white transition">Contact Us</a>
          <button className="ml-4 px-4 py-2 bg-red-500 text-white rounded-full transition">
            Enquire Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
