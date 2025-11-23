// ClientTestimonialsSection.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Aarav Sharma",
    company: "Elite Interiors Pvt. Ltd.",
    feedback:
      "Webpulse Digital transformed our online presence! Our website traffic and social media engagement have tripled within just 3 months. Truly a professional and creative team.",
    avatar:
      "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Priya Mehta",
    company: "Bliss Skincare",
    feedback:
      "Their SEO and Google Ads strategy helped us rank #1 for our major keywords. Lead quality and conversions have improved drastically!",
    avatar:
      "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Rahul Verma",
    company: "TechGen Solutions",
    feedback:
      "From website design to content marketing, everything was handled perfectly. The team’s professionalism and creativity are unmatched.",
    avatar:
      "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Sneha Kapoor",
    company: "FashionHub India",
    feedback:
      "Webpulse helped us scale our e-commerce business through smart marketing strategies. We saw a 2.5x increase in online sales!",
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Vikram Sethi",
    company: "Prime Realty",
    feedback:
      "Excellent service and quick support! The team helped us generate high-quality real estate leads through targeted campaigns.",
    avatar:
      "https://randomuser.me/api/portraits/men/30.jpg",
  },
];

export default function ClientTestimonialsSection() {
  const GAP = 20;
  const FIXED_CARD_H = 280;

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const [cardW, setCardW] = useState(320);
  const viewportRef = useRef(null);

  const computeVisible = () => (window.innerWidth >= 1024 ? 3 : 1);

  useEffect(() => {
    const update = () => {
      const v = computeVisible();
      setVisible(v);
      const vw = viewportRef.current?.clientWidth || 320;
      const w = Math.floor((vw - GAP * (v - 1)) / v);
      setCardW(Math.max(260, w));
    };

    update();
    const ro = new ResizeObserver(update);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, TESTIMONIALS.length - visible),
    [visible]
  );

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const step = cardW + GAP;
  const translateX = -(index * step);

  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const prev = () => setIndex((i) => Math.max(0, i - 1));

  return (
    <section className="bg-gradient-to-r from-[#f3e8ff] to-[#ffe9e3] font-publicSans">
      <div className="w-full max-w-[1150px] m-auto lg:px-0 lg:py-[60px] px-5 py-[34px]">
        <div className="flex justify-center mb-6">
          <h2 className="lg:text-[42px] lg:leading-[52px] text-[24px] leading-[30px] relative text-center font-bold text-[#1F2127]">
            What Our Clients Say
            <img
              alt=""
              loading="lazy"
              className="h-[8px] w-[180px] lg:h-[10px] lg:w-[280px] object-contain absolute lg:right-0 right-[60px] lg:-bottom-1 -bottom-[2px]"
              src="/_next/static/media/coloredLine.3506ae69.webp"
            />
          </h2>
        </div>

        <p className="text-[#535B62] lg:text-[18px] text-[14px] text-center max-w-[700px] mx-auto">
          We take pride in helping brands grow and succeed through innovative
          digital marketing solutions. Here’s what our clients have to say about us.
        </p>

        <div className="relative mt-10">
          {/* Left Button */}
          <button
            aria-label="Previous"
            onClick={prev}
            disabled={index === 0}
            className="hidden lg:flex absolute -left-20 top-1/2 -translate-y-1/2 rounded-xl bg-white/80 p-2 shadow hover:bg-white disabled:opacity-40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 32 32" className="rotate-180">
              <circle cx="16" cy="16" r="15" stroke="#FF6F37" />
              <path fill="#FF6F37" d="m12.8 13.3 4.1 4.05-4.1 4.05 1.88 1.87 6-5.92-6-5.92z" />
            </svg>
          </button>

          {/* Viewport */}
          <div ref={viewportRef} className="overflow-hidden w-full">
            <ul
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: GAP,
                transform: `translate3d(${translateX}px, 0, 0)`,
              }}
            >
              {TESTIMONIALS.map((v, i) => (
                <li
                  key={i}
                  style={{ width: cardW, height: FIXED_CARD_H }}
                  className="flex-none bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
                >
                  <p className="text-[#333] italic text-[15px] leading-[22px] mb-4">
                    “{v.feedback}”
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={v.avatar}
                      alt={v.name}
                      className="w-[50px] h-[50px] rounded-full object-cover border-2 border-[#FF6F37]"
                    />
                    <div>
                      <h4 className="font-semibold text-[#1F2127] text-[16px]">
                        {v.name}
                      </h4>
                      <p className="text-[#777] text-[14px]">{v.company}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Button */}
          <button
            aria-label="Next"
            onClick={next}
            disabled={index === maxIndex}
            className="hidden lg:flex absolute -right-20 top-1/2 -translate-y-1/2 rounded-xl bg-white/80 p-2 shadow hover:bg-white disabled:opacity-40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="15" stroke="#FF6F37" />
              <path fill="#FF6F37" d="m12.8 13.3 4.1 4.05-4.1 4.05 1.88 1.87 6-5.92-6-5.92z" />
            </svg>
          </button>

          {/* Mobile Dots */}
          <div className="lg:hidden mt-6 flex justify-center gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-6 rounded-full transition-all ${
                  i === index ? "bg-[#FF6F37]" : "bg-[#FF6F37]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
