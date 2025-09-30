import React from "react";
import { assets } from "../assets/assets"; // replace with your image import

const LocationPage = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center bg-gray-100 px-6 lg:px-10 py-10 lg:py-20">
      
     

      {/* LEFT SIDE TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center lg:text-left">
          Locations Advantage
        </h1>
        <p className="text-gray-700 mb-6 font-semibold text-center lg:text-left">
          Find our offices and branches across the country. We aim to provide the best service in each location.
        </p>

        {/* Boxes / Cards */}
        <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start">
          <div className="bg-white h-[80px] w-full max-w-md lg:max-w-[600px] rounded shadow text-center lg:text-left text-xl font-semibold text-gray-500 px-4 flex items-center justify-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
          <div className="bg-white h-[80px] w-full max-w-md lg:max-w-[600px] rounded shadow text-center lg:text-left text-xl font-semibold text-gray-500 px-4 flex items-center justify-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,.
          </div>
          <div className="bg-white h-[80px] w-full max-w-md lg:max-w-[600px] rounded shadow text-center lg:text-left text-xl font-semibold text-gray-500 px-4 flex items-center justify-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          </div>
          <div className="bg-white h-[80px] w-full max-w-md lg:max-w-[600px] rounded shadow text-center lg:text-left text-xl font-semibold text-gray-500 px-4 flex items-center justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectet
          </div>
        </div>
      </div>
       {/* RIGHT SIDE IMAGE */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full flex items-center justify-center mb-8 lg:mb-0">
        <img
          src={assets.project_img_1} // replace with your image
          alt="Location"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

    </section>
  );
};

export default LocationPage;
