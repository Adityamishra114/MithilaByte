import React, { useEffect, useState } from "react";
import { image } from "../../data";

const EXPERTS = [
  { name: "Ramandeep Singh", avatar: image.ramandeep, rotateBg: image.rotateBg, tags: "Market Commentry", followers: "8k followers" },
  { name: "Manoj Rawat", avatar: image.manoj, rotateBg: image.rotateBg, tags: "Technical, Growth", followers: "6k followers" },
  { name: "Sajjid", avatar: image.sajid, rotateBg: image.rotateBg, tags: "Quantitative, Growth", followers: "5k followers" },
  { name: "Renuka", avatar: image.renuka, rotateBg: image.rotateBg, tags: "Technical, Swing Trading", followers: "1k+ followers" },
  { name: "Kundan", avatar: image.kundan, rotateBg: image.rotateBg, tags: "Index Strategies, Growth", followers: "1k followers" },
  { name: "Aditya", avatar: image.aditya, rotateBg: image.rotateBg, tags: "Futures & Options, Technical", followers: "9k followers" },
  // { name: "Dipen Doshi", avatar: image.dd, rotateBg: image.rotateBg, tags: "Value Investing, Dividend", followers: "17k followers" },
  // { name: "Prabhat Mittal", avatar: image.pm, rotateBg: image.rotateBg, tags: "Futures & Options, Growth", followers: "16k followers" },
];

const spinClass = "animate-[spin_6s_linear_infinite]";

/* ✅ Rounded Premium Arrows */
const Arrow = ({ onClick, side = "left" }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2
    w-6 h-6 flex items-center justify-center
    bg-white/20 hover:bg-white/40 text-white
    rounded-full backdrop-blur-lg shadow-lg border border-white/30
    transition-all duration-300 cursor-pointer
    hidden md:flex opacity-0 group-hover:opacity-100
    ${side === "left" ? "left-1" : "right-1"}`}
  >
    <span className="text-xl font-bold">{side === "left" ? "‹" : "›"}</span>
  </button>
);

const ExpertCard = ({ item, isActive }) => (
  <div
    className={`relative flex flex-col items-center transition-all duration-500 px-4 cursor-pointer
      ${isActive ? "scale-110 opacity-100 z-10" : "scale-90 opacity-60"} 
      hover:scale-105 hover:opacity-100 hover:z-50
    `}
  >
    {/* Avatar */}
    <div className="relative pt-6">
      <img
        src={item.avatar}
        alt={item.name}
        className="w-[100px] lg:w-[140px] drop-shadow-xl transition-all duration-500"
      />
    </div>

    {/* Name */}
    <p className="lg:text-[22px] font-bold mt-6 text-center pb-[138px] transition-all duration-500">
      {item.name}
    </p>

    {/* Info Card */}
    {isActive && (
      <div className="absolute top-[200px] w-full flex justify-center transition-all duration-500">
        <div className="bg-white/25 backdrop-blur-xl text-white p-4 rounded-xl w-[260px] 
          shadow-2xl border border-white/30 animate-fadeIn">
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-sm mt-1 opacity-80">{item.tags}</p>
          <p className="text-sm mt-1 opacity-80">{item.followers}</p>
        </div>
      </div>
    )}
  </div>
);

export default function InsightsExperts() {
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1280) setVisibleCount(5);
      else if (window.innerWidth >= 768) setVisibleCount(3);
      else setVisibleCount(1);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const next = () => setActive((p) => (p + 1) % EXPERTS.length);
  const prev = () => setActive((p) => (p - 1 + EXPERTS.length) % EXPERTS.length);

  const visibleExperts = EXPERTS.slice(active, active + visibleCount).concat(
    EXPERTS.slice(0, Math.max(0, active + visibleCount - EXPERTS.length))
  );

  const centerIndex = Math.floor(visibleCount / 2);

  useEffect(() => {
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-home-page-gradient text-white px-6 pt-10 pb-12 font-publicSans">
      <div className="max-w-[1150px] mx-auto">
        <h2 className="text-[30px] lg:text-[52px] font-bold leading-tight">
          Insights from Digital Experts
        </h2>
        <p className="mt-3 text-[12px] lg:text-[18px] opacity-90">
          Learn from Webpulse Digital’s top marketing leaders who shape digital success.
        </p>

        <div className="relative pt-10 group">
          <div className="flex justify-between items-center w-full gap-4">
            {visibleExperts.map((item, idx) => (
              <div className={`${visibleCount === 1 ? "w-full" : "flex-1"}`} key={idx}>
                <ExpertCard item={item} isActive={idx === centerIndex} />
              </div>
            ))}
          </div>

          <Arrow side="left" onClick={prev} />
          <Arrow side="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}
