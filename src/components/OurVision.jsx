import React, { useState } from "react";
import { image } from "../../data";

const OurVision = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="flex justify-center font-publicSans items-center sm:py-10 sm:px-4 py-1 px-0">
      <div className="bg-white w-full max-w-4xl p-4 sm:p-8 rounded-xl shadow-lg">

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-5 py-2 text-lg font-semibold rounded-lg transition-all duration-300 ${activeTab === "vision"
              ? "bg-[#804494] text-white"
              : "bg-gray-100 text-[#804494] hover:bg-gray-200"
              }`}
            onClick={() => setActiveTab("vision")}
          >
            Our Vision
          </button>

          <button
            className={`px-5 py-2 text-lg font-semibold rounded-lg ml-3 transition-all duration-300 ${activeTab === "mission"
              ? "bg-[#804494] text-white"
              : "bg-gray-100 text-[#804494] hover:bg-gray-200"
              }`}
            onClick={() => setActiveTab("mission")}
          >
            Our Mission
          </button>
        </div>

        {/* Content */}
        {activeTab === "vision" && (
          <>
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-[#804494]">
              Our Vision
            </h2>
            <p className="text-gray-700 mb-8 text-lg text-center md:text-left leading-relaxed">
              To become a globally trusted digital transformation partner, delivering creativity, technology, and measurable results that help brands unlock limitless growth potential.
            </p>

            <ul className="space-y-6 md:grid md:grid-cols-3 md:space-y-0 md:gap-10 text-center md:text-left">
              <li className="flex items-center space-x-3 text-lg text-[#804494]">
                <img src={image.think} alt="Think Clearly" className="w-16 h-16" />
                <span className="font-semibold">Think Clearly</span>
              </li>
              <li className="flex items-center space-x-3 text-lg text-[#804494]">
                <img src={image.resource} alt="Be Resourceful" className="w-16 h-16" />
                <span className="font-semibold">Be Resourceful</span>
              </li>
              <li className="flex items-center space-x-3 text-lg text-[#804494]">
                <img src={image.deter} alt="Stay Determined" className="w-16 h-16" />
                <span className="font-semibold">Stay Determined</span>
              </li>
            </ul>
          </>
        )}

        {activeTab === "mission" && (
          <>
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-[#804494]">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-8 text-lg text-center md:text-left leading-relaxed">
              To empower businesses with innovative digital solutions that enhance visibility, accelerate growth, and build strong, customer-driven brands in the modern digital landscape.
            </p>

            <ul className="space-y-6 md:grid md:grid-cols-3 md:space-y-0 md:gap-10 text-center md:text-left">
              <li className="flex items-center space-x-3 text-lg text-[#804494]">
                <img src={image.think} alt="Innovation First" className="w-16 h-16" />
                <span className="font-semibold">Innovation First</span>
              </li>
              <li className="flex items-center space-x-3 text-lg text-[#804494]">
                <img src={image.resource} alt="Customer Success" className="w-16 h-16" />
                <span className="font-semibold">Customer Success</span>
              </li>
              <li className="flex items-center space-x-3 text-lg text-[#804494]">
                <img src={image.deter} alt="Consistency & Growth" className="w-16 h-16" />
                <span className="font-semibold">Consistency & Growth</span>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default OurVision;
