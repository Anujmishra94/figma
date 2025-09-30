import React from "react";
import { assets } from "../assets/assets"; // Make sure assets.left_img exist

const SecondProPage = () => {
  return (
    <section className="max-w-[90%] lg:max-w-[80%] mx-auto bg-white flex flex-col lg:flex-row items-center py-10 lg:py-20">
      
      {/* LEFT IMAGE */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-14 text-center lg:text-left">
          Modern Living Spaces
        </h1>
        <img
          src={assets.project_img_4} // Replace with your left image
          alt="Upcoming Project"
          className="w-full h-[250px] sm:h-[350px] lg:h-[600px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* RIGHT TEXT + BUTTON */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-4 sm:px-8 lg:px-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4 lg:mb-6 text-center lg:text-left">
          Upcoming Project
        </h1>
        <h4 className="text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-5 text-center lg:text-left">
          Noida
        </h4>
        <hr className="border-t-2 border-gray-300 my-4 w-20 sm:w-24 lg:w-32" />
        <p className="text-gray-700 mb-6 lg:mb-8 font-medium text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ducimus
          consequatur ipsam ea quia? Illo aliquid adipisci pariatur, in nisi ad
          quos fugiat quae sit dicta mollitia deleniti ab laboriosam iure
          assumenda sunt sed saepe reiciendis aperiam accusantium quis.
          Perferendis, nihil in libero sapiente cum perspiciatis maiores quaerat
          nulla dolores.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300">
          Contact Us
        </button>
      </div>

    </section>
  );
};

export default SecondProPage;
