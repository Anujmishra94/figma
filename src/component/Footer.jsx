import React from "react";
import { assets } from "../assets/assets"; // logo image

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      {/* Footer Columns */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        
        {/* Logo Column */}
        <div className="flex flex-col gap-4">
          <img src={assets.logo} alt="Logo" className="w-32 mb-2" />
          <p className="text-gray-400">
            We are a leading company providing best services in web development and design.
          </p>
          <p className="text-gray-400">
            Follow us on social media to stay updated.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-red-500">Facebook</a>
            <a href="#" className="hover:text-red-500">Twitter</a>
            <a href="#" className="hover:text-red-500">LinkedIn</a>
          </div>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Company</h3>
          <a href="#" className="text-gray-400 hover:text-red-500">About Us</a>
          <a href="#" className="text-gray-400 hover:text-red-500">Contact</a>
          <a href="#" className="text-gray-400 hover:text-red-500">Project</a>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
          <p className="text-gray-400">Email: info@company.com</p>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-700 mx-6" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <p>Designed by Your Name</p>
      </div>
    </footer>
  );
};

export default Footer;
