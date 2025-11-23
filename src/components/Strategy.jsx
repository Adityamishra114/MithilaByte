import React from "react";
import { GoArrowRight } from "react-icons/go";
import { image } from "../../data"; // Import image from your data source

const StrategySection = ({
    title = "What’s your trading strategy?",
    subtitle = "Develop a winning strategy with Tradeohedge",
    body = `Tradeohedge provides personalized training and live market practice to develop effective trading strategies. Our platform offers all the tools and resources you need to succeed in the stock and crypto markets.`,
    imgSrc = image?.stockPng,  // Default to image from data
    onContact = () => { },
}) => {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 font-publicSans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                    <h2
                        className="font-grotesque font-black text-black leading-[1.05] text-[36px] sm:text-[44px] md:text-[56px]"
                    >
                        {title}
                    </h2>

                    <p className="mt-3 text-[24px] sm:text-[20px] font-bold text-primary">
                        {subtitle}
                    </p>

                    <p className="mt-4 font-semibold text-md leading-7 text-gray-700">{body}</p>
                    <button
                        onClick={onContact}
                        className="group mt-8 inline-flex font-bold text-md items-center justify-center gap-2
                       rounded-md bg-[#1f2937] px-6 py-3
                       text-white font-semibold shadow-sm
                       hover:bg-black focus:outline-none
                       focus:ring-2 focus:ring-offset-2 focus:ring-black
                       transition-colors"
                        aria-label="Contact a Representative"
                    >
                        <span className="font-bold text-md">Contact a Representative</span>
                        <GoArrowRight
                            className="opacity-0 -translate-x-1 transition-all duration-200
                         group-hover:opacity-100 group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                    </button>
                </div>
                <div className="w-full">
                    <img
                        src={imgSrc}
                        alt="Traders analyzing stock market data on multiple screens"
                        className="w-full h-auto rounded-lg object-cover shadow-md"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default StrategySection;
