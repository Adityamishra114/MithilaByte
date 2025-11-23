import React from "react";
import {image } from "../../data"
export default function StoxoBanner({
  bannerHref = "/stoxo/",
  bannerImg = image.bannerImg,
  linesBg = image.linesBg,
}) {
  return (
    <section className="bg-[#FFECE1] relative overflow-hidden">
      <div className="w-full lg:p-[56px] p-[16px] max-w-[1250px] mx-auto flex flex-col relative">
        <img
          src={linesBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-auto top-0 left-0 z-[1]"
        />
        <a href={bannerHref} className="w-full h-auto z-[3] relative">
          <img
            src={bannerImg}
            alt="Ask Stoxo – Stock market help"
            className="w-full h-auto"
          />
        </a>
      </div>
    </section>
  );
}
