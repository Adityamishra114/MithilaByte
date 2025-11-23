import React from "react";
import { FaChartLine, FaRegHandshake, FaCogs } from "react-icons/fa"; // Updated icons for Tradeohedge
import { image } from "../../data";

const BRAND = "#0E61F6"; 

const Training = () => {
  return (
    <section
      id="learn"
      className="relative overflow-hidden mt-[calc(var(--header-height)+40px)] font-publicSans"
      style={{ backgroundColor: image?.Bg || "#f5f6f7" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-44 left-1/2 h-[520px] w-[1500px] -translate-x-1/2 rotate-45 bg-[#e9eaec]" />
        <div className="absolute top-[260px] left-1/2 h-[520px] w-[1500px] -translate-x-1/2 -rotate-45 bg-[#f2f3f5]" />
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/5" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-3 items-start">
          <div className="max-w-md">
            <h3 className="font-grotesque font-black text-black leading-[1.05] text-[40px] sm:text-[48px] md:text-[56px]">
              Training
            </h3>
            <p className="mt-4 text-[24px] sm:text-[20px] leading-7 text-gray-700/80 font-medium">
              Basics to advanced structured stock market courses with interactive
              training, practice, and support.
            </p>
          </div>
          <div className="lg:col-span-2 grid gap-8 md:grid-cols-2">
            {/* Stock Trading Course Card */}
            <article
              className="group bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-black"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-primary/10 text-primary mb-4 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                <FaChartLine className="text-4xl" />
              </div>

              <h4 className="text-xl font-extrabold text-black mb-2 transition-colors duration-300 group-hover:text-white">
                Stock Trading Course
              </h4>
              <p className="text-gray-600 leading-7 mb-5 transition-colors duration-300 group-hover:text-gray-300">
                A comprehensive stock trading course with hands-on practical
                experience. Learn the money-making concepts to generate income
                from stock markets.
              </p>
              <a
                href="#stock-trading"
                className="inline-block font-extrabold uppercase tracking-wide transition-colors duration-300"
                style={{ color: BRAND }}
              >
                Know More
              </a>
            </article>

            {/* Value Investing Course Card */}
            <article
              className="group bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-black"
            >
              <div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-primary/10 text-primary mb-4 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                <FaRegHandshake className="text-4xl" />
              </div>

              <h4 className="text-xl font-extrabold text-black mb-2 transition-colors duration-300 group-hover:text-white">
                Value Investing Course
              </h4>
              <p className="text-gray-600 leading-7 mb-5 transition-colors duration-300 group-hover:text-gray-300">
                Empower yourself to build wealth through the stock market. Learn
                proven strategies for successful long-term investments with our
                course.
              </p>
              <a
                href="#value-investing"
                className="inline-block font-extrabold uppercase tracking-wide transition-colors duration-300"
                style={{ color: BRAND }}
              >
                Know More
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
