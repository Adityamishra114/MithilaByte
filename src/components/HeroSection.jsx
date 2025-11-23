import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black min-h-[450px] md:min-h-[500px] flex items-center"
      aria-label="Hero section"
    >
      <div className="w-full flex justify-center px-6 md:px-10 lg:px-0 pt-[100px] pb-[80px]">
        <div className="max-w-6xl w-full font-publicSans text-white flex flex-col">
          
          {/* Heading */}
          <h1 className="text-[26px] sm:text-[32px] md:text-[45px] lg:text-[58px] font-extrabold leading-tight mb-6">
            Transform Your Business with <br />
            <span className="text-[#804494]">
              MithilaByte Technologies
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] max-w-2xl leading-relaxed mb-8">
            Empower your brand with smart strategies, innovative development,
            and <strong className="text-white">ROI-driven digital solutions</strong>.
            We help businesses grow digitally with modern web, SEO, social media and automation services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* 📞 Call Button */}
            <a href="tel:+918506850785" aria-label="Call Now">
              <button className="md:text-[18px] text-[14px] py-3 px-6 bg-home-page-gradient shadow-home-page-gradient rounded-[12px] font-semibold transition-all hover:scale-[1.05]">
                Call Now
              </button>
            </a>

            {/* 📩 Send Query Button */}
            <Link to="/contactus" aria-label="Send Query">
              <button className="md:text-[18px] text-[14px] py-3 px-6 bg-transparent border border-gray-300 rounded-[12px] font-medium transition-all hover:bg-white hover:text-black">
                Send Query
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
