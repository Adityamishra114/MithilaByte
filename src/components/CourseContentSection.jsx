import React from "react";

const PRIMARY = "#1155FF"; 
const CourseContentSection = ({ onDownload = () => {}, brochureHref = "#" }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-10 lg:gap-14 items-start">
        <div>
          <h2 className="font-grotesque font-black text-slate-900 text-[28px] sm:text-[34px] md:text-[40px]">
            Course Content
          </h2>
          <div className="mt-4 h-[4px] w-12 rounded bg-[color:var(--primary)]" style={{ "--primary": PRIMARY }} />

          <p className="mt-6 text-slate-600 font-semibold text-2xl leading-7">
            Our course covers essential stock market concepts and strategies. Each{" "}
            <span className="font-bold">class includes practical activities</span> to ensure
            you can apply concepts to real trading scenarios.
          </p>

          <a
            href={brochureHref}
            onClick={onDownload}
            className="mt-8 inline-flex items-center justify-center rounded-md px-6 py-3
                       text-white font-semibold shadow-md transition-all"
            style={{ backgroundColor: PRIMARY }}
          >
            DOWNLOAD BROCHURE
          </a>
        </div>
        <div
          className="rounded-xl bg-white overflow-hidden
                     shadow-[0_20px_60px_rgba(17,85,255,0.06),0_6px_30px_rgba(0,0,0,0.04)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 border-b md:border-b md:border-r border-slate-200">
              <h3 className="font-bold text-2xl text-slate-900">Basics of Share Trading</h3>
              <p className="mt-2 font-semibold text-lg text-slate-600 leading-7">
                Learn the foundational principles, market terminology, and essential
                concepts of share trading.
              </p>
            </div>
            <div className="p-8 border-b border-slate-200">
              <h3 className="font-bold text-2xl text-slate-900">Technical Analysis</h3>
              <p className="mt-2 text-slate-600 font-semibold text-lg leading-7">
                Understand chart patterns, indicators, and tools to analyze market trends and
                price movements.
              </p>
            </div>
            <div className="p-8 border-b md:border-b md:border-r border-slate-200">
              <h3 className="font-bold text-2xl  text-slate-900">Swing Trading Techniques</h3>
              <p className="mt-2 text-slate-600 font-semibold text-lg leading-7">
                Master techniques for capturing short- to medium-term price movements in
                Indian Equity Markets.
              </p>
            </div>
            <div className="p-8 border-b border-slate-200">
              <h3 className="font-bold text-2xl text-slate-900">Intraday Strategies</h3>
              <p className="mt-2 text-slate-600 font-semibold text-lg leading-7">
                Explore methods and techniques for executing trades within a single trading
                day for maximizing short-term profits.
              </p>
            </div>
            <div className="p-8 md:border-r border-slate-200">
              <h3 className="font-bold text-2xl text-slate-900">Option Chain Analysis</h3>
              <p className="mt-2 text-slate-600 font-semibold text-lg leading-7">
                Understand how to analyze option chains to assess market expectations and
                make informed trading decisions.
              </p>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-2xl text-slate-900">Option Trading Strategies</h3>
              <p className="mt-2 text-slate-600 font-semibold text-lg leading-7">
                Learn advanced techniques for trading options to optimize returns and
                effectively manage risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;
