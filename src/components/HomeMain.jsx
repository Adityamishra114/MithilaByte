import React from "react";
import { GoArrowRight } from "react-icons/go";

const HomeMain = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8  mt-[calc(var(--header-height,80px)+40px)]">
            <h1 className="font-grotesque mt-20 font-black text-center leading-[0.95] [text-wrap:balance]
                     text-[44px] sm:text-[64px] md:text-[78px] lg:text-[90px]">
                Empowering Stock Traders
                <br className="hidden sm:block" />
                and Investors
            </h1>
            <div className="mt-20  grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto items-center gap-6 text-[#292466]">
                <a href="#learn" className="group inline-flex items-center justify-center sm:justify-start gap-2 uppercase tracking-[0.2em] text-sm sm:text-base">
                    <span className="font-bold">Learn With Us</span>
                    <GoArrowRight className="" />
                </a>
                <a href="#recommendations" className="group inline-flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-sm sm:text-base">
                    <span className="font-bold">Get Recommendations</span>
                    <GoArrowRight className="" />
                </a>
                <a href="#tools" className="group inline-flex items-center justify-center sm:justify-end gap-2 uppercase tracking-[0.2em] text-sm sm:text-base">
                    <span className="font-bold">Access Tools</span>
                    <GoArrowRight className=" text-black" />
                </a>
            </div>
        </div>
    );
};

export default HomeMain;
