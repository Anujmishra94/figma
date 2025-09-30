import React from "react";
import Navbar from "./Navbar"; 

const Header = () => {
  return (
    <div className="relative h-screen bg-gray-900 flex items-center">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="text-white px-6 mt-40 mb-9 mx-auto md:mx-0 md:ml-20 text-center md:text-left max-w-4xl">
        <h1 className="text-4xl md:text-4xl mb-4 font-light">
          Not Everyone Belongs Here
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mt-6 md:mt-10">
          Your Getewat to <span className="text-red-500">Premium <br /> Properties</span>
        </h1>
        <div className="mt-6 md:mt-9 flex justify-center md:justify-start">
          <button className="px-8 md:px-9 py-3 bg-red-500 font-light text-2xl rounded-lg">
            Schedule a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
