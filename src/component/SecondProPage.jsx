import React from "react";
import { assets } from "../assets/assets"; // Make sure assets.left_img exist

const SecondProPage= () => {
  return (
    <section className="max-w-[80%] mx-auto h-[1000px] bg-white flex items-center ">
      
      {/* LEFT IMAGE */}
      <div className="w-1/2 h-[600px]">
      <h1 className="text-5xl font-bold text-gray-900 mb-14 ">
        Modern Living Spaces
      </h1>
        <img
          src={assets.project_img_4} // Replace with your left image
          alt="Upcoming Project"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT TEXT + BUTTON */}
      <div className="w-1/2 flex flex-col justify-centr items-strat px-12 ml-20 mt-30 ">
        <h1 className="text-4xl font-semibold text-black mb-6">
          Upcoming Project
        </h1>
        <h4 className="text-3xl mb-5">Noida</h4>
        <hr className="border-t-6 border-gray-300 my-6" />
        <p className="text-black-300 mb-8 font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ducimus consequatur ipsam ea quia? Illo aliquid adipisci pariatur, in nisi ad quos fugiat quae sit dicta mollitia deleniti ab laboriosam iure assumenda sunt sed saepe reiciendis aperiam accusantium quis. Perferendis, nihil in libero sapiente cum perspiciatis maiores quaerat nulla dolores.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
          Contact Us
        </button>
      </div>

    </section>
  );
};

export default SecondProPage;
