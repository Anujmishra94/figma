import React from "react";
import { CheckCircle } from "lucide-react";
import { assets } from "../assets/assets";

const Projects = () => {
  return (
    <section className="relative w-full h-screen bg-gray-900 text-white py-20 overflow-hidden">
      {/* LEFT IMAGE */}
      <img
        src={assets.project_img_4}
        alt="Left Project"
        className="absolute top-[-50px] left-0 w-1/3 h-[500px] z-20 object-cover rounded-lg shadow-lg"
      />

      {/* RIGHT IMAGE */}
      <img
        src={assets.project_img_3}
        alt="Right Project"
        className="absolute bottom-[10px] right-0 w-1/3 h-[450px] object-cover rounded-lg shadow-lg"
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Project</h2>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          saepe vero veniam deleniti porro odit soluta vitae rerum qui eius
          dolores veritatis ad maxime error repudiandae, aperiam laborum
          assumenda fuga a, sint, facilis doloremque optio cumque. Amet
          repudiandae officiis sed asperiores corporis vitae distinctio. Hic
          impedit numquam veniam iusto officia?
        </p>

        {/* Bullet Points */}
        <ul className="space-y-4 inline-block text-left">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-white" />
            Lorem Ipsum is simply dummy text
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-red-500" />
            Prime Location
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-white" />
            World-Class Amenities
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
