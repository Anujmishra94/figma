import React from "react";
import Navbar from "./Navbar";  // Navbar import

const Header = () => {
  return (
    <div className="relative h-screen bg-gray-900 flex items-center ">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="text-white px-6 ml-20 mt-40 mb-9">
        <h1 className=" text-4xl mb-4 font-light">
          Not Everyone Belongs Here
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mt-10">
         Your Getewat to <span className="text-red-500">Premium <br /> Properties</span>
        </h1>
        <button className="px-9 py-3 bg-red-500 font-light text-2xl rounded-lg mt-9">
          Schdule a call
        </button>
      </div>
    </div>
  );
};

export default Header;
