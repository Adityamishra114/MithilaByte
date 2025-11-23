import React from "react";
import { image } from "../../data";
import BannerLink from "./BannerLink";

export default function WebpulsePromo({
  logo = image.logo11,
  underline = image.coloredLine,
  tick = image.tick,
  rightImage = image.rightImage,
  ctaHref = "/contactus",
}) {
  return (
    <section className="w-full relative font-publicSans overflow-hidden [background:linear-gradient(52.27deg,#1F2127_4.87%,#6545D7_76.57%)]">
      {/* Background Blur Shape */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-[200px] h-[320px] w-full -rotate-[15deg] [background:linear-gradient(105deg,rgba(255,102,17,0.32)_30.99%,rgba(59,17,255,0.16)_57.77%,rgba(255,102,17,0.28)_78.18%)]" />

      {/* Main Content */}
      <div className="backdrop-blur-[70px] h-full w-full py-[16px] px-[24px]">
        <div className="max-w-[1160px] mx-auto flex md:flex-row flex-col items-center py-[24px]">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 flex flex-col md:items-start items-center">
            <img
              src={logo}
              alt="Webpulse Digital"
              className="w-auto md:h-[86px] h-[64px] md:ml-0 ml-[20px]"
              loading="lazy"
              decoding="async"
            />

            {/* Headline */}
            <p className="mt-[28px] text-white md:text-[32px] text-[20px] md:leading-[40px] leading-[26px] md:text-start text-center">
              Grow Your Business with <br />
              <span className="font-bold relative inline-block">
                Webpulse Digital
                <img
                  src={underline}
                  alt=""
                  className="h-[8px] w-full absolute lg:right-[8px] right-[2px] -bottom-3 left-0"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </p>

            {/* Subheading */}
            <p className="mt-[18px] text-[#EAEAEA] md:text-[18px] text-[14px] md:text-start text-center max-w-[520px]">
              A 360° Digital Marketing Agency delivering Website, App,
              Creative, and Marketing Solutions to help brands grow faster and
              smarter.
            </p>

            {/* CTA */}
            <div className="flex md:flex-row flex-col items-center gap-x-[12px] lg:mt-[52px] mt-[28px]">
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="lg:px-[24px] px-[18px] lg:py-[12px] py-[6px] text-[12px] lg:text-[18px] font-semibold leading-[22px] text-white font-figtree w-fit rounded-[16px] bg-btnOrangeGradient shadow-btnOrange hover:opacity-95 transition-opacity"
              >
                Get a Free Consultation
              </a>
              <p className="text-[14px] md:mt-0 mt-[16px] leading-[20px] font-semibold text-transparent bg-clip-text [-webkit-background-clip:text] bg-gradient-to-r from-[#B8A6FF] to-[#FE6839]">
                Let's boost your online presence today!
              </p>
            </div>

            {/* FEATURE LIST */}
            <div className="grid md:grid-cols-2 grid-cols-1 mt-[42px] md:gap-[24px] gap-[12px] text-white">
              {[
                "Website & App Development",
                "SEO & Google Ads Management",
                "Social Media & Lead Generation",
                "Creative Design & Video Editing",
                "Customized CRM & AI Video Marketing",
                "YouTube, Facebook & Instagram Marketing",
              ].map((text) => (
                <div
                  key={text}
                  className="md:text-[18px] text-[14px] font-medium flex items-center"
                >
                  <img
                    src={tick}
                    alt=""
                    className="h-[24px] w-auto mr-[6px]"
                    loading="lazy"
                    decoding="async"
                  />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src={rightImage}
            alt="Webpulse Digital Marketing"
            className="md:w-[660px] w-[300px] h-auto md:mt-0 mt-[36px] self-end"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <BannerLink />
    </section>
  );
}
