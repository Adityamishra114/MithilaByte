import React, { useEffect, useMemo, useRef, useState } from "react";
import { image } from "../../data";

export default function WebpulseServicesSection({
  coloredLine = image.coloredLine,
  webImage = image.ff1Card1,
  customImage = image.ff1Card2,
  creativeImage = image.ff1Card3,
  digitalImage = image.ff2Card,
}) {
  const tabs = useMemo(
    () => [
      { key: "web", label: "Website & App Solutions" },
      { key: "custom", label: "Customized Solutions" },
      { key: "creative", label: "Creative & Visual" },
      { key: "digital", label: "Digital Marketing" },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const barRef = useRef(null);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0, height: 0 });

  useEffect(() => {
    const measure = () => {
      const el = itemRefs.current[active];
      const wrap = containerRef.current;
      if (!el || !wrap) return;
      const wrapRect = wrap.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setPillStyle({
        width: r.width,
        height: r.height,
        left: r.left - wrapRect.left + wrap.scrollLeft, // ✅ support scroll offset
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  const leftContent = [
    {
      title: "Website & App Solutions",
      subtitle:
        "We build powerful digital platforms designed to perform, attract, and convert visitors into loyal customers.",
      bullets: [
        "Website Designing",
        "Website Development",
        "WordPress Website Design",
        "E-commerce Website Development",
        "Mobile App Development",
      ],
      ctaText: "Explore Website Solutions",
      ctaHref: "#website",
      image: webImage,
    },
    {
      title: "Customized Solutions",
      subtitle:
        "Tailored business tools built for efficiency, automation, and growth — made just for your organization.",
      bullets: ["Customized CRM Solutions", "AI Video Marketing"],
      ctaText: "Get Customized Solutions",
      ctaHref: "#customized",
      image: customImage,
    },
    {
      title: "Creative & Visual Services",
      subtitle:
        "Transform your brand identity with visually stunning graphics, engaging videos, and creative storytelling.",
      bullets: ["Graphic Design", "Video Editing"],
      ctaText: "Create with Us",
      ctaHref: "#creative",
      image: creativeImage,
    },
    {
      title: "Digital Marketing Services",
      subtitle:
        "Grow your online presence, generate quality leads, and boost conversions with result-driven marketing strategies.",
      bullets: [
        "SEO (Search Engine Optimization)",
        "Social Media Marketing",
        "Lead Generation",
        "Pay Per Click (PPC) Advertising",
        "Google Ads (AdWords) Management",
        "Google AdSense Services",
        "Google My Business (Local Listing)",
        "Email Marketing",
        "Affiliate Marketing",
        "Blogging & Content Marketing",
        "YouTube Marketing",
        "Facebook Marketing",
        "Instagram Marketing",
        "LinkedIn Marketing",
        "Mobile App Marketing",
        "Google Analytics Setup & Reporting",
      ],
      ctaText: "Boost My Business",
      ctaHref: "#digital",
      image: digitalImage,
    },
  ];

  return (
    <section className="bg-[#fff8f2] w-full pt-[40px] mt-[calc(var(--header-height,80px))] pb-[40px] font-publicSans lg:pt-[60px] lg:px-[54px] px-[28px] text-black">
      <div className="max-w-[1150px] mx-auto flex flex-col">
        {/* Header */}
        <h2 className="text-[28px] lg:text-[44px] font-bold lg:leading-[54px] flex flex-col self-center leading-[33px] text-center text-[#000000]">
          Webpulse Digital
          <span className="relative flex self-center">
            Our Services
            <img
              alt=""
              width={585}
              height={31}
              className="h-[8px] w-[64px] lg:h-[10px] lg:w-[95px] absolute lg:right-[4px] right-[2px] lg:-bottom-[4px] bottom-[-4px]"
              src={coloredLine}
            />
          </span>
        </h2>
        <div className="min-h-[36px] lg:min-h-[50px] w-full flex justify-center">
          <div
            ref={containerRef}
            className="flex relative self-center border-[1.5px] lg:border-[2px] border-[#391A643D] rounded-[16px] mt-[28px] lg:mt-[48px] gap-x-[6px] lg:gap-x-[12px]
                       overflow-x-auto lg:overflow-visible no-scrollbar scroll-smooth "
          >
            {tabs.map((t, i) => {
              const activeClass =
                i === active
                  ? "opacity-100 text-white"
                  : "opacity-70 text-black";
              return (
                <button
                  key={t.key}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 z-[2] cursor-pointer lg:text-[18px] md:text-[14px] text-[13px] leading-[28px] 
                    h-[36px] lg:h-[50px] px-[12px] lg:px-[24px] flex justify-center items-center 
                    font-semibold duration-300 whitespace-nowrap ${activeClass}`}
                >
                  {t.label}
                </button>
              );
            })}
            {/* Pill Highlight */}
            <div
              ref={barRef}
              className="absolute top-[-1.5px] lg:top-[-2px] transition-all duration-300 z-[1] rounded-[16px] bg-home-page-gradient  shadow-md"
              style={{
                width: pillStyle.width,
                height: pillStyle.height + (window?.innerWidth >= 1024 ? 4 : 3),
                transform: `translateX(${pillStyle.left}px)`,
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:mt-[60px] mt-[34px] gap-[30px]">
          <div className="flex-1">
            {leftContent.map((pane, idx) => (
              <div
                key={pane.title}
                className={`text-[#000] ${idx === active ? "block" : "hidden"}`}
              >
                <h2 className="text-[24px] md:text-[30px] lg:text-[38px] font-bold leading-[32px] md:leading-[36px] lg:leading-[42px]">
                  {pane.title}
                </h2>
                <h3 className="mt-[20px] text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] text-gray-700">
                  {pane.subtitle}
                </h3>
                <ul className="lg:mt-[28px] mt-[20px] grid grid-cols-1 md:grid-cols-2  gap-y-[10px]">
                  {pane.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex items-center text-[13px] md:text-[14px] lg:text-[16px]"
                    >
                      <div className="h-[8px] w-[8px] mr-[10px] rounded-full bg-home-page-gradient" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="lg:px-[20px] px-[14px] lg:mt-[40px] mt-[24px] lg:py-[10px] py-[6px] bg-home-page-gradient text-[12px] lg:text-[16px] font-semibold text-white rounded-[12px] w-fit">
                  <a href={pane.ctaHref}>{pane.ctaText}</a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Image */}
          <div className="flex-1 flex justify-center relative">
            {leftContent.map((pane, idx) => (
              <img
                key={idx}
                src={pane.image}
                alt={pane.title}
                className={`w-full max-w-[400px] rounded-2xl shadow-md transition-opacity duration-300 ${
                  idx === active ? "opacity-100 relative" : "opacity-0 absolute"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
