import React from "react";
import { assets } from "../assets/assets"; // replace with your image import

const LocationPage = () => {
  return (
    <section className="w-full h-screen flex items-center bg-gray-100 px-10">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center gap-8">
        {/* Text */}
        <h1 className="text-4xl font-bold mb-6">
          Locations Advantege
        </h1>
        <p className="text-gray-700 mb-6 font-semibold">
          Find our offices and branches across the country. We aim to provide the best service in each location.
        </p>

        {/* Boxes / Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-white h-[80px] w-[600px] rounded shadow text-center text-xl font-semibold text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
          <div className="bg-white h-[80px] w-[600px] rounded shadow text-center text-xl font-semibold text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,.
          </div>
          <div className="bg-white  h-[80px] w-[600px] rounded shadow text-center text-xl font-semibold text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          </div>
          <div className="bg-white  h-[80px] w-[600px] rounded shadow text-center text-xl font-semibold text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur asperiores cumque id.
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-1/2 h-full flex items-center justify-center">
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
