import React, { useState } from "react";
import { motion } from "framer-motion";
import { images212 } from "../../../data";
import "./WhyChooseUs1.css";
import { fadeAnimations, animationConfig } from "../../../animations";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs1 = () => {
  const [showMore, setShowMore] = useState(false);

  const reasons = [
    {
      text: (
        <>
          {" "}
          <strong>Result-Driven Strategies:</strong> Every project is planned
          with measurable outcomes and real ROI in mind.{" "}
        </>
      ),
    },
    {
      text: (
        <>
          {" "}
          <strong>Creative + Technical Expertise:</strong> A powerful blend of
          design, marketing, and development excellence.{" "}
        </>
      ),
    },
    {
      text: (
        <>
          {" "}
          <strong>Custom, Industry-Specific Solutions:</strong> Tailored
          strategies that match your business goals and audience.{" "}
        </>
      ),
    },
    {
      text: (
        <>
          {" "}
          <strong>Dedicated Support & Collaboration:</strong> We work alongside
          you as your long-term success partner.{" "}
        </>
      ),
    },
    {
      text: (
        <>
          {" "}
          <strong>Transparent Reporting:</strong> Clear performance data,
          consistent communication, and honest updates.{" "}
        </>
      ),
    },
    {
      text: (
        <>
          {" "}
          <strong>Proven Execution:</strong> Trusted by businesses across
          industries with impactful delivery.{" "}
        </>
      ),
    },
  ];

  const visibleItems = showMore ? reasons : reasons.slice(0, 4);

  return (
    <section className="why-choose-us ptb-70 font-publicSans overflow-hidden md:overflow-visible">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={fadeAnimations.left.initial}
            whileInView={fadeAnimations.left.whileInView}
            transition={animationConfig.transition}
            viewport={animationConfig.viewport}
          >
            <div className="text-start">
              <strong className="color-secondary uppercase text-sm">
                Why Choose MithilaByte Technologies
              </strong>

              <h2 className="text-xl md:text-3xl font-bold leading-snug mt-2 text-[#253462]">
                Your Growth Partner — Not Just Another Agency
              </h2>

              <span className="animate-border mb-4 block"></span>

              <p className="fw-bold mb-6 text-sm md:text-base leading-relaxed text-gray-700">
                At <strong>MithilaByte Technologies</strong>, our mission is
                simple: Build brands, generate customers, and scale businesses
                with smart digital systems and powerful technology.
              </p>

              {/* Bullet List */}
              <ul className="space-y-3">
                {visibleItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-start gap-3 text-sm md:text-base text-[#253462] font-medium"
                  >
                    <FaCheckCircle className="text-[#804494] text-lg mt-[2px]" />
                    <span className="flex-1 leading-relaxed">{item.text}</span>
                  </motion.li>
                ))}
              </ul>

              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-4 text-white font-semibold mr-3 px-3 py-3 rounded-lg shadow hover:text-white secondary-solid-btn transition"
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            initial={fadeAnimations.right.initial}
            whileInView={fadeAnimations.right.whileInView}
            transition={animationConfig.transition}
            viewport={animationConfig.viewport}
          >
            <img
              src={images212?.whychoose}
              alt="Why Choose Us"
              className="w-full max-w-[460px] rounded-lg shadow-lg object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs1;
