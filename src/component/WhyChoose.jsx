import React from "react";

const WhyChoose = () => {
  return (
    <section className="relative w-full py-20 flex flex-col items-center text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Why Choose Atos?
      </h2>
      <p className="max-w-md md:max-w-2xl text-gray-600 mb-8 px-4 md:px-0 text-base md:text-lg">
        When an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the
      </p>
      <button className="px-8 md:px-10 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition text-base md:text-lg">
        Contact Us
      </button>
    </section>
  );
};

export default WhyChoose;
