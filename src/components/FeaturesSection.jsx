import React from "react";
import { FiPenTool, FiBarChart2, FiGlobe } from "react-icons/fi";

const PRIMARY = "#1155FF";

const FeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-center ">
        <h2 className="font-grotesque font-black mt-2 text-[30px] sm:text-[40px] md:text-[48px] leading-tight text-black text-center">
          <span className="relative inline-block px-1">
            <span className="relative z-10">Stop Doubting Yourself,</span>
            <span className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-slate-500"></span>
          </span>{" "}
          Build Confidence, Trade Smarter
        </h2>

        <p className="mt-4 text-[26px] sm:text-[24px] font-semibold text-slate-600 leading-7">
          In this course, you’ll gain the knowledge and tools to: Understand stock market basics,Use technical analysis,Develop intraday trading strategies,Dive into futures &amp; options
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          className="group rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                     border-t-4"
          style={{ borderTopColor: PRIMARY }}
        >
          <div className="p-8 text-center">
            <div className="mx-auto mb-5 h-15 w-15 text-[#2b4a7d]">
              <FiPenTool className="h-10 w-10 mx-auto" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Beginner-Friendly</h3>
            <p className="mt-3 text-slate-600 text-xl font-semibold leading-7">
              We teach in <span className="font-bold">simple language</span>
              ,using real examples so concepts stick naturally.
            </p>
          </div>
        </article>
        <article
          className="group rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                     border-t-4"
          style={{ borderTopColor: PRIMARY }}
        >
          <div className="p-8 text-center">
            <div className="mx-auto mb-5 h-15 w-15 text-[#2b4a7d]">
              <FiBarChart2 className="h-10 w-10 mx-auto" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Learn by Doing</h3>
            <p className="mt-3 text-slate-600 text-xl font-semibold leading-7">
              `Hands-on training throughout the course ensures that you&#39;re not{""}
              <span className="font-bold">{""} just hearing
                theory</span> — you practice it.
              trading.
            </p>
          </div>
        </article>
        <article
          className="group rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                     border-t-4"
          style={{ borderTopColor: PRIMARY }}
        >
          <div className="p-8 text-center">
            <div className="mx-auto mb-5 h-15 w-15 text-[#2b4a7d]">
              <FiGlobe className="h-10 w-10 mx-auto" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Ongoing Support</h3>
            <p className="mt-3 text-slate-600 text-xl font-semibold leading-7">
              Even after the training ends, you&#39;ll continue to receive guidance from your trainer
              until you&#39;re  <span className="font-bold">confident to trade</span>{" "}
              independently.
            </p>
          </div>
        </article>
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md
                     px-8 py-3 text-white font-semibold shadow-md
                     transition-all duration-200"
          style={{ backgroundColor: PRIMARY }}
        >
          TALK TO US
        </a>
      </div>
    </section>
  );
};

export default FeaturesSection;
