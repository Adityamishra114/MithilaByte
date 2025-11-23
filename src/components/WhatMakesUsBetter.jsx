import React from "react";
import {
  MagnifyingGlassCircleIcon,
  RocketLaunchIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline"; 

function Feature({ icon: Icon, title, children }) {
  return (
    <article className="flex items-start gap-4">
      <div className="shrink-0 grid place-items-center h-14 w-14 rounded-2xl bg-white ring-1 ring-black/10 shadow-sm">
        <Icon className="h-220 w-20 sm:h-8 sm:w-8 text-indigo-500" aria-hidden="true" />
      </div>
      <div>
        <h4 className="text-[20px] sm:text-[18px] font-extrabold tracking-wide uppercase text-gray-800">
          {title}
        </h4>
        <p className=" text-[16px] sm:text-[18px] font-semibold leading-7 text-gray-600">
          {children}
        </p>
      </div>
    </article>
  );
}

export default function WhatMakesUsBetter() {
  return (
    <section className="bg-white ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[24px] sm:text-[28px] md:text-[40px] font-black text-gray-900">
            WHAT MAKES US BETTER?
          </h2>
          <p className="mt-3 text-[22px] sm:text-[24px] font-semibold text-gray-600">
            Our research practices and services are holistic and unique.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          <Feature icon={MagnifyingGlassCircleIcon} title="IN-DEPTH RESEARCH">
            We dig deeper to understand the market. Our methods are objective to
            spot trading opportunities.
          </Feature>

          <Feature icon={RocketLaunchIcon} title="ON-TIME DELIVERY">
            We make every recommendation tradeable by our clients and send alerts
            well before the trade initiates.
          </Feature>

          <Feature icon={BanknotesIcon} title="AFFORDABLE PRICING">
            We understand trading costs better than anyone. We charge nominally so
            you can trade with minimal capital.
          </Feature>
        </div>
      </div>
    </section>
  );
}
