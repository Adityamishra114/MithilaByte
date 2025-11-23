import React from "react";
import { FaChartLine, FaRegHandshake, FaCogs, FaRegArrowAltCircleRight } from "react-icons/fa"; // Updated icons for Tradeohedge

// Updated icons to align with Tradeohedge's services
const IconWorkflow = () => (
  <FaChartLine className="text-4xl text-primary" />
);

const IconKey = () => (
  <FaRegHandshake className="text-4xl text-primary" />
);

const ArrowRight = () => (
  <svg
    className="ml-2 inline-block"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Card({ tone = "white", icon, title, body, ctaLabel = "LEARN MORE", href = "#" }) {
  const base =
    "flex flex-col justify-between rounded-xl p-8 md:p-10 h-full transition-all duration-300";
  const whiteTone =
    "bg-white shadow-[0_24px_48px_-18px_rgba(0,0,0,0.15)] ring-1 ring-black/5";
  const mutedTone = "bg-gray-50 ring-1 ring-black/5";

  return (
    <article className={`${base} ${tone === "white" ? whiteTone : mutedTone}`}>
      <div>
        <div className="text-[0px] mb-6" aria-hidden="true">
          {icon}
        </div>

        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h3>

        <p className="mt-4 text-[18px] sm:text-[17px] leading-7 text-gray-700/80 font-medium max-w-prose">
          {body}
        </p>
      </div>

      <a
        href={href}
        className="mt-6 inline-flex items-center text-sm font-semibold tracking-wide text-gray-900 group"
      >
        <span className="relative">
          <span
            className="px-0.5 pb-[2px] bg-gradient-to-r from-transparent to-transparent"
          >
            {ctaLabel}
          </span>
          <span className="block h-[1.5px] w-full bg-black mt-[2px]" />
        </span>
        <ArrowRight />
      </a>
    </article>
  );
}

export default function AppsSection() {
  return (
    <section
      className="relative overflow-hidden mt-[calc(var(--header-height)+40px)] font-publicSans"
      id="tools"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 md:mb-10">
          <h2
            className="font-grotesque font-black text-black leading-[1.05]
                       text-[40px] sm:text-[48px] md:text-[56px]"
          >
            Tradeohedge Tools
          </h2>
          <p
            className="mt-4 text-[22px] sm:text-[20px] leading-7 text-gray-700/80 font-semibold
                       lg:max-w-[520px] lg:justify-self-end"
          >
            The next-gen digital infrastructure designed to empower traders with cutting-edge tools and strategies for the stock and crypto markets.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Card
            tone="white"
            icon={<IconWorkflow />}
            title="Trading Workflows"
            body="Tradeohedge provides a streamlined workflow for stock and crypto market learners. From on-demand lessons to interactive quizzes, our platform engages you at every step with community feedback, expert support, and resources."
            ctaLabel="LEARN MORE"
            href="#"
          />
          <div className="lg:mt-[45px] h-full">
            <Card
              tone="muted"
              icon={<IconKey />}
              title="Tradeohedge Primer"
              body="Our all-in-one platform offers tools for in-depth analysis, stock screening, crypto tracking, and much more. Make smarter trades using data-driven insights and real-time market trends, powered by Tradeohedge."
              ctaLabel="VIEW"
              href="#"
            />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 top-1/4 h-[60%]
                   bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06),transparent_60%)]"
      />
    </section>
  );
}
