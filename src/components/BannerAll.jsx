import React from "react";
import {images212} from "../../data"
const BannerAll = () => {
  return (
    <section className="w-full relative mt-[calc(var(--header-height,80px))] font-publicSans">
      <div className="w-full h-full">
        <img
          src={images212.servicesBanner}
          alt="Banner"
          className="w-full h-full object-contain"
        />
        {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-opens font-semibold mb-4">
            {heading}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-nunito max-w-2xl">
            {paragraph}
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default BannerAll;
