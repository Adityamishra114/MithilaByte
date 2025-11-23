// CommunityHero.jsx
import React from "react";
import { image } from "../../data";

export default function CommunityHero({
  partnershipHref = "/services",
  mascotSrc = image.mascotSrc,
  handSrc = image.handSrc,
}) {
  return (
    <section className="mx-auto relative font-publicSans overflow-hidden bg-home-page-gradient text-white">
      <div className="lg:max-w-[800px] relative md:max-w-[420px] max-w-[320px] flex flex-col mx-auto lg:pt-[72px] lg:pb-[72px] pt-[48px] pb-[48px]">
        
        {/* MAIN HEADING */}
        <h2 className="text-center lg:text-[38px] text-[20px] font-bold lg:leading-[46px] leading-[26px]">
          Empower Your Brand with <br className="lg:hidden" />
          <span className="text-white">Webpulse Digital</span>
        </h2>

        {/* SUBTEXT */}
        <h3 className="lg:text-[22px] text-[14px] mt-[18px] text-center text-white opacity-[0.85] leading-[26px]">
          Join a thriving community of businesses succeeding in the digital space. <br />
          Maximize your ROI with our tailored digital marketing strategies.
        </h3>

        {/* HASHTAG */}
        <p className="lg:text-[26px] text-[14px] mt-[22px] text-center font-bold text-transparent bg-clip-text [-webkit-background-clip:text] text-white">
          #DigitalSuccessStartsHere
        </p>

        {/* CTA BUTTON */}
        <a
          className="lg:flex flex-[0.6] md:max-w-[400px] max-w-[240px] mx-auto"
          href={partnershipHref}
        >
          <div className="lg:flex flex-1 lg:mt-10 mt-[20px] justify-center">
            <p className="px-[18px] font-figtree md:py-[12px] py-[8px] bg-[#804494] md:text-[18px] text-[14px] font-semibold bg-btn-orange shadow-btn-orange text-center rounded-[12px] hover:opacity-90 transition-opacity">
              Explore Our Services
            </p>
          </div>
        </a>

        {/* DESCRIPTION BELOW BUTTON */}
        <p className="text-center lg:text-[16px] text-[13px] mt-[18px] opacity-[0.8] leading-[24px]">
          Our expert team helps you <span className="font-bold text-white">connect, grow,</span> and{" "}
          <span className="font-bold text-white">engage</span> with your audience through
          strategic SEO, social media marketing, web design, and more.
        </p>

        {/* LEFT IMAGE (Mascot) */}
        <img
          alt="mascot"
          width="275"
          height="418"
          loading="lazy"
          decoding="async"
          className="object-contain lg:w-[275px] w-[133px] h-auto absolute lg:left-[36px] md:-left-[108px] -left-[70px] lg:-bottom-[0px] -bottom-[0px] lg:-translate-x-[100%]"
          src={mascotSrc}
        />

        {/* RIGHT IMAGE (Hand / Graphic) */}
        <img
          alt="hand"
          width="330"
          height="406"
          loading="lazy"
          decoding="async"
          className="object-contain lg:w-[300px] w-[120px] lg:h-auto absolute lg:right-[0px] md:-right-[116px] -right-[74px] bottom-0 lg:translate-x-[100%]"
          src={handSrc}
        />
      </div>
    </section>
  );
}
