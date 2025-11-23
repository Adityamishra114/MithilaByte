import React from "react";
import { FaRegHandshake, FaChartLine, FaRegArrowAltCircleRight, FaExchangeAlt } from "react-icons/fa"; 

const features = [
  {
    title: "Connect Your Accounts",
    description: "Easily link your accounts and get started with seamless stock market trading.",
    icon: <FaRegHandshake className="text-4xl text-white" />, 
  },
  {
    title: "Explore Markets",
    description: "Access a wide range of stock markets and explore global opportunities.",
    icon: <FaChartLine className="text-4xl text-white" />, 
  },
  {
    title: "Analyze Trends",
    description: "Stay ahead of the curve with real-time stock market trend analysis.",
    icon: <FaRegArrowAltCircleRight className="text-4xl text-white" />, 
  },
  {
    title: "Execute Trades",
    description: "Quickly execute stock trades with a few clicks using our intuitive platform.",
    icon: <FaExchangeAlt className="text-4xl text-white" />, 
  },
];

export default function SimplifiedStockMarketTrading() {
  return (
    <section className="bg-gradient-to-r from-[#1F2127] to-[#6545D7] text-white font-publicSans py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold animate__animated animate__zoomIn">
            Simplified Stock Market Trading with <span className="text-white">Tradeohedge</span>
          </h2>
          <p className="text-lg mt-4">Trade smarter with the tools and resources from Tradeohedge to make your stock market trading effortless and efficient.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-lg p-6 text-center transform transition duration-500 hover:scale-105 animate__animated animate__zoomIn"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-sm mb-6">{feature.description}</p>
              <a
                href="#"
                className="inline-block text-white text-lg font-bold hover:underline"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
