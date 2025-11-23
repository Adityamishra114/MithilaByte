import React from "react";
import { LuHand, LuMedal } from "react-icons/lu"; 

function InfoCard({ icon, title, children }) {
  return (
    <article
      className="relative rounded-xl bg-white ring-1 ring-black/5 shadow-[0_18px_48px_rgba(0,0,0,0.06)] p-6 sm:p-7"
    >
      <div className="flex items-start gap-3">
        <div className="text-[36px]  text-orange-400 shrink-0">{icon}</div>
        <div>
          <h4 className="text-[25px] leading-[1.9] sm:text-2xl font-extrabold text-gray-900">
            {title}
          </h4>
          <p className="mt-2 text-[20px] font-bold sm:text-[18px] leading-6 text-gray-600">
            {children}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TrustBadgesSection() {
  return (
    <section
      className="relative overflow-hidden "
      id="trust"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 top-1/2 -translate-y-1/2 h-[260px]
                   bg-[radial-gradient(ellipse_at_center,rgba(24,94,224,0.08),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard icon={<LuHand />} title="Trusted by All Ages">
            We’ve even trained a 13-year-old from Chennai! Don’t worry—our course
            is designed to be easy and effective for everyone, no matter your age or
            experience.
          </InfoCard>

          <InfoCard icon={<LuMedal />} title="Top-Rated Training Institute">
            <span className="text-sky-700 font-semibold">EQSIS</span> Rated 4.7 stars on
            Google with over <span className="font-bold">2000 reviews</span>, our institute is
            highly trusted. Join us and experience why so many choose us for
            top-quality training.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
