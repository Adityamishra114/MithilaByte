import React from "react";
import { images12 } from "../../data";

const LOGOS = [
  { alt: "Volza", href: "#", src: images12.volza },
  { alt: "Videocon", href: "#", src: images12.videocon },
  { alt: "SBI Card", href: "#", src: images12.sbicard },
  { alt: "Orient Electric", href: "#", src: images12.orient },
  { alt: "Muthoot Finance", href: "#", src: images12.muthootfinance },
  { alt: "Maruti Suzuki", href: "#", src: images12.marutisuzuki },
  { alt: "Mahindra Tech", href: "#", src: images12.mahindratech },
  { alt: "Kotak Mahindra Bank", href: "#", src: images12.kotakmahindra },
  { alt: "Hero MotoCorp", href: "#", src: images12.heromotorcops },
  { alt: "Fevicol", href: "#", src: images12.fevicol },
  { alt: "DTDC", href: "#", src: images12.dtdc },
  { alt: "BluEnt", href: "#", src: images12.bluent },
  { alt: "Birlasoft", href: "#", src: images12.birlasoft },
  { alt: "Bajaj Finserv", href: "#", src: images12.bajajfinserv },
  { alt: "Axis Bank", href: "#", src: images12.axisbank },
  { alt: "Asian Paints", href: "#", src: images12.asianpaints },
  { alt: "Altitude Software", href: "#", src: images12.altitudesoftware },
  { alt: "Admitad", href: "#", src: images12.admitad },
];

export default function MediaPress() {
  const marquee = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="lg:py-[50px] py-[34px] bg-[#ffece1] font-publicSans">
      <div className="relative flex items-center justify-center h-[2px] bg-[#D1C5EC] lg:mx-[50px] mx-[8px]">
        <div className="bg-leftBlurGradWhite h-full absolute left-0 w-1/4 pointer-events-none" />
        <div className="bg-rightBlurGradWhite h-full absolute right-0 w-1/4 pointer-events-none" />
        <div className="font-semibold text-[20px] leading-[22px] px-[20px] bg-[#ffece1]">
          Our Clients
        </div>
      </div>
      <div className="lg:mt-[16px] mt-[4px] relative lg:mx-0 mx-[8px]">
        <div className="bg-leftBlurGradWhite h-full z-[2] absolute left-0 w-1/6 pointer-events-none" />
        <div className="bg-rightBlurGradWhite h-full z-[2] absolute right-0 w-1/6 pointer-events-none" />

        <div className="overflow-hidden mt-[32px] lg:mt-[30px]">
          <div className="flex items-center whitespace-nowrap will-change-transform animate-press-marquee
                       [animation-duration:28s] [animation-timing-function:linear] [animation-iteration-count:infinite]
                       group-hover:[animation-play-state:paused]">
            {marquee.map((item, i) => (
              <a
                key={`${item.alt}-${i}`}
                className="flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                aria-label={item.alt}
                title={item.alt}
              >
                <img
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="object-contain w-auto lg:h-[55px] h-[20px] lg:mr-[40px] mr-[20px]"
                  src={item.src}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
