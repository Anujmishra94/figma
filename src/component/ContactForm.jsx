import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full flex justify-center py-20 bg-gray-900">
      <div className="max-w-[70%] w-full">
        
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Your Dream Home Awaits! Fill The Form And Let Us Take Of The Rest
        </h1>

        {/* Form */}
        <form className="bg-white p-10 rounded-lg shadow-lg space-y-6">
          {/* First Row: Name & Email */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col">
              <h1 className="text-lg font-semibold mb-2">Name</h1>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <h1 className="text-lg font-semibold mb-2">Email</h1>
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Second Row: Phone & Preferred Time */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col">
              <h1 className="text-lg font-semibold mb-2">Phone</h1>
              <input
                type="text"
                placeholder="Your Phone"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <h1 className="text-lg font-semibold mb-2">Preferred Time</h1>
              <input
                type="text"
                placeholder="Preferred Time"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Third Row: Message */}
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold mb-2">Message</h1>
            <textarea
              placeholder="Write your message here..."
              rows={5}
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 justify-center mx-auto "
          >
            Book a Seat And Visit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
