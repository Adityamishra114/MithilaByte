import React from "react";
import { image } from "../../data";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Dumbbell,
  Briefcase,
  Rocket,
  Smartphone
} from "lucide-react";


const BADGES = [
  { label: "100+ Happy Clients", color: "#ff603c" },
  { label: "5+ Industry Awards", color: "#ff603c" },
  { label: "250+ Project Executed", color: "#ff603c" },
];

const PORTFOLIO = [
  {
    title: "Education & Coaching",
    alt: "Education Digital Growth",
    src: image.port1,
    icon: <GraduationCap className="w-8 h-8 text-[#804494]" />,
    desc: "Attract students, nurture leads & scale admissions with automation + brand positioning."
  },
  {
    title: "Real Estate",
    alt: "Real Estate Campaigns",
    src: image.port2,
    icon: <Building2 className="w-8 h-8 text-[#804494]" />,
    desc: "High-intent property leads, site visits & remarketing funnels built for real-estate cycles."
  },
  {
    title: "Wellness & Fitness",
    alt: "Fitness Branding",
    src: image.port3,
    icon: <Dumbbell className="w-8 h-8 text-[#804494]" />,
    desc: "Acquire fitness clients, boost membership signups & strengthen personal brand authority."
  },
  {
    title: "Corporate & SMB",
    alt: "Corporate Marketing",
    src: image.port4,
    icon: <Briefcase className="w-8 h-8 text-[#804494]" />,
    desc: "Performance marketing, CRM automation & conversion systems for enterprise growth."
  },
  {
    title: "Startups & Founders",
    alt: "Startup Growth",
    src: image.port5,
    icon: <Rocket className="w-8 h-8 text-[#804494]" />,
    desc: "Branding, launch funnels, investor decks & GTM strategy to scale vision-driven startups."
  },
  {
    title: "Mobile & Tech",
    alt: "Tech & App Growth",
    src: image.port6,
    icon: <Smartphone className="w-8 h-8 text-[#804494]" />,
    desc: "App installs, user retention funnels, automation & community building systems."
  }
];


export default function DigitalMarketingPortfolio() {
  return (
    <section
      className="relative text-white font-publicSans py-20 px-6 lg:px-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(200deg, #1f2127 -5.65%, #34247d 45.63%, #804494 97.6%)",
      }}
    >
      {/* Glow overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(150,100,255,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-16">

        {/* ✅ Left section fixed width */}
        <div className="flex-1 max-w-[520px]">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-figtree font-bold text-4xl lg:text-5xl leading-tight mb-5"
          >
            Industries We Serve
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base lg:text-lg leading-relaxed"
          >
            Specialized growth strategies tailored to your industry’s psychology, sales cycle & customer journey.
          </motion.p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            {BADGES.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
                whileHover={{ scale: 1.08 }}
                className="px-6 py-3 rounded-full bg-[#804494] text-sm lg:text-base font-semibold text-white shadow-lg"
              >
                {badge.label}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ✅ Card Grid — same height & clean alignment */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 w-full">
          {PORTFOLIO.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h4 className="text-lg text-gray-800 font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
