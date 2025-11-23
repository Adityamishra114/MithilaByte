
import React from "react";
import { LuBadgeCheck } from "react-icons/lu"; 

export default function AcademyHeroSection({
  photo =
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
}) {
  return (
    <section
      id="academy-hero"
      className="relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="text-center">
          <h2 className="text-[26px] sm:text-[32px] md:text-[44px] font-black text-gray-900">
            Chennai’s Best Trading Academy
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] md:text-[24px] font-semibold text-gray-600">
            The most preferred <span className="font-bold">stock market training institute in Chennai</span>,
            offering courses in both English and Tamil. Enjoy a flexible 6-week schedule
            with options for online and classroom sessions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1.15fr] lg:grid-cols-[1fr_1.1fr_1.1fr] gap-10 items-start">
          <div className="hidden lg:flex flex-col items-center gap-12">
            <BadgeBlock
              icon={<LuBadgeCheck className="h-16 w-16 text-indigo-600" />}
              lines={[
                "SEBI Registered",
                "Research Analyst",
                "INH200003000",
              ]}
            />
            <BadgeBlock
              icon={<LuBadgeCheck className="h-16 w-16 text-indigo-600" />}
              lines={["Trained Students at", "IIT-Bombay"]}
            />
          </div>
          <div className="flex flex-col items-center gap-12">
            <BadgeBlock
              icon={<LuBadgeCheck className="h-16 w-16 text-indigo-600" />}
              lines={[
                "Center of Excellence",
                "at SRM Eshwari",
                "College",
              ]}
            />
            <BadgeBlock
              icon={<LuBadgeCheck className="h-16 w-16 text-indigo-600" />}
              lines={["Registered", "Authorized partner"]}
              subLogo="upstox"
            />
          </div>
          <div className="max-w-xl justify-self-center lg:justify-self-end">
            <div className="rounded-md overflow-hidden ring-1 ring-black/10 shadow">
              <img
                src={photo}
                alt="Training session"
                className="w-full h-[240px] sm:h-[280px] object-cover"
              />
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-sm shadow hover:bg-blue-700"
            >
              CONTACT US
            </a>
          </div>
        </div>
        <div className="mt-10">
          <div className="rounded-md overflow-hidden ring-1 ring-black/5">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <StatCell label="Since" value="2014" />
              <StatCell label="Trained" value="5000 +" />
              <StatCell label="Google Reviews" value="2200 +" />
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 top-1/3 h-[60%]
                   bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)]"
      />
    </section>
  );
}
function BadgeBlock({ icon, lines = [], subLogo }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2">{icon}</div>
      <div className="text-[18px] sm:text-[18px] leading-5 font-semibold text-gray-700">
        {lines.map((l, i) => (
          <p key={i} className={i === 0 ? "font-bold text-gray-800" : ""}>
            {l}
          </p>
        ))}
        {subLogo === "upstox" && (
          <div className="mt-1 text-lg uppercase tracking-wider text-indigo-600 font-bold">
            upstox
          </div>
        )}
      </div>
    </div>
  );
}

function StatCell({ label, value }) {
  return (
    <div className="bg-gray-100/90 px-6 py-4">
      <p className="text-2xl uppercase font-extrabold tracking-wide ">{label}</p>
      <p className="text-2xl sm:text-[30px] font-extrabold text-gray-900 mt-1">
        {value}
      </p>
    </div>
  );
}
