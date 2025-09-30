import React from "react";
import { CheckCircle } from "lucide-react";
import { assets } from "../assets/assets";

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white py-20 flex flex-col items-center">
      {/* MOBILE: RIGHT IMAGE FIRST */}
      <div className="block lg:hidden mb-10">
        <img
          src={assets.project_img_2}
          alt="Right Project"
          className="w-4/5 sm:w-2/3 h-auto max-h-[400px] object-cover rounded-lg shadow-2xl mx-auto"
        />
      </div>

      {/* LEFT IMAGE (desktop only, bottom in mobile) */}
      <img
        src={assets.project_img_4}
        alt="Left Project"
        className="hidden lg:block absolute lg:-top-20 lg:-left-10 w-3/4 sm:w-1/2 lg:w-1/3 h-auto max-h-[500px] object-cover rounded-lg shadow-2xl z-10"
      />

      {/* CENTER CONTENT */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4 sm:px-6 mb-10 lg:mb-40">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>
        <p className="text-gray-300 mb-6 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          saepe vero veniam deleniti porro odit soluta vitae rerum qui eius
          dolores veritatis ad maxime error repudiandae, aperiam laborum
          assumenda fuga a, sint, facilis doloremque optio cumque. Amet
          repudiandae officiis sed asperiores corporis vitae distinctio. Hic
          impedit numquam veniam iusto officia?
        </p>

        {/* Bullet Points */}
        <ul className="space-y-4 inline-block text-center sm:text-left">
          <li className="flex items-center gap-3 justify-center sm:justify-start">
            <CheckCircle className="text-white" />
            Lorem Ipsum is simply dummy text
          </li>
          <li className="flex items-center gap-3 justify-center sm:justify-start">
            <CheckCircle className="text-red-500" />
            Prime Location
          </li>
          <li className="flex items-center gap-3 justify-center sm:justify-start">
            <CheckCircle className="text-white" />
            World-Class Amenities
          </li>
        </ul>
      </div>

      {/* RIGHT IMAGE (desktop only) */}
      <img
        src={assets.project_img_2}
        alt="Right Project"
        className="hidden lg:block absolute lg:-bottom-20 lg:right-0 w-3/4 sm:w-1/2 lg:w-1/3 h-auto max-h-[450px] object-cover rounded-lg shadow-2xl z-10"
      />

      {/* MOBILE: LEFT IMAGE LAST */}
      <div className="block lg:hidden mt-10">
        <img
          src={assets.project_img_4}
          alt="Left Project"
          className="w-4/5 sm:w-2/3 h-auto max-h-[400px] object-cover rounded-lg shadow-2xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Projects;
