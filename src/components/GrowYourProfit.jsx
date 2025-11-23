import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; 
import { image } from "../../data";

const GrowYourProfit = () => {
  return (
    <section className="relative font-publicSans py-20 px-8 mt-[calc(var(--header-height,80px))]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="relative lg:w-1/2 mb-10 lg:mb-0">
            <img
              src={image.ipad}
              alt="Tablet Image"
              className="w-full h-auto object-cover rounded-lg "
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col lg:w-1/2 text-left">
            <h4 className="text-xl sm:text-md text-black font-bold mb-2">
              WHO WE ARE
            </h4>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary mb-6">
              Grow Your Profit
            </h2>
            <div className="text-lg text-black mb-6">
              <p className="text-secondary font-semibold mb-4">
                <span className="text-primary">
                  with Smart Investment Advisory Services
                </span>
              </p>
              <p className="mb-3 underline text-[#ff6600]">
                Get reliable & accurate stock market trading tips with the
                best research and telephonic support in India.
              </p>
              <p className="mb-3">
                Our team of seasoned analysts brings decades of combined
                experience to the table. We’re passionate about helping our
                clients navigate the complexities of the stock market and
                achieve their financial goals.
              </p>
              <p className="mb-3">
                We combine in-depth market knowledge with data-driven insights
                to provide personalized strategies that maximize returns and
                minimize risk.
              </p>
              <p>
                Stock market advisor, stock trading advisor, bank nifty option,
                trading advisory services, best trading calls, bank nifty
                advisor, nifty banknifty calls, nifty advisor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourProfit;
