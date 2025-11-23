import React from "react";
import { LuSprout, LuLightbulb } from "react-icons/lu";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaBullhorn } from "react-icons/fa"; // New icon for "Tradeohedge"

const Card = ({ icon, title, desc, href = "#" }) => (
  <a
    href={href}
    className="group relative block rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] ring-1 ring-black/5
               transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
  >
    <div className="p-8">
      <div className="text-primary text-3xl transition-colors duration-300 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-7 text-gray-600 transition-colors duration-300 group-hover:text-gray-300">
        {desc}
      </p>
      <span className="mt-5 inline-block text-sm font-semibold tracking-wide text-[#1676D2]
                       underline-offset-4 group-hover:underline group-hover:text-emerald-300">
        LEARN MORE
      </span>
    </div>
  </a>
);

export default function AdvisorySection() {
  return (
    <section className="relative overflow-hidden mt-[calc(var(--header-height)+40px)] font-publicSans"
      id="recommendations">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-0 w-full md:w-[60%] bg-gradient-to-b from-white via-white to-gray-100" />

        <div className="absolute top-0 left-0 w-full md:w-[40%] h-[240px] sm:h-[300px] md:h-[340px] lg:h-[360px] bg-neutral-300" />

        <div className="absolute top-0 left-[40%] h-[240px] sm:h-[300px] md:h-[340px] lg:h-[360px] w-px bg-black/10 hidden md:block" />

        <div className="absolute left-0 top-[calc(theme(spacing.60)+theme(spacing.0))] md:left-0 md:top-[340px] lg:top-[360px] 
                        w-full h-6 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid items-start gap-10 md:grid-cols-[0.4fr_0.6fr]">
          <div className="max-w-xl md:pr-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Advisory</h2>
            <p className="mt-4 text-[24px] sm:text-[20px] leading-7 text-gray-700/80 font-medium">
              Expert research-backed actionable recommendations for traders and investors.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="relative">
              <Card
                icon={<LuSprout />}
                title="Invest Long-Term with SIP"
                desc="Get started on your journey to long-term wealth creation with smart SIP investing."
              />
              <div className="absolute left-3 right-3 -bottom-3 h-2 rounded bg-black/10 blur-md" />
            </div>
            <div className="relative">
              <Card
                icon={<PiCurrencyInrBold />}
                title="Intraday Recommendations"
                desc="Get well-informed intraday trading tips to make your trading more profitable."
              />
              <div className="absolute left-3 right-3 -bottom-3 h-2 rounded bg-black/10 blur-md" />
            </div>
            <div className="sm:col-start-2 sm:row-start-2 sm:mt-12">
              <Card
                icon={<LuLightbulb />}
                title="Weekly Option Strategy"
                desc="Get risk-adjusted returns using optimized and back-tested option strategies for consistent outcomes."
              />
            </div>

            {/* New "Tradeohedge" Card */}
            <div className="relative">
              <Card
                icon={<FaBullhorn />}
                title="Tradeohedge"
                desc="Get expert advice for risk management and advanced hedging strategies tailored to your portfolio."
              />
              <div className="absolute left-3 right-3 -bottom-3 h-2 rounded bg-black/10 blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
