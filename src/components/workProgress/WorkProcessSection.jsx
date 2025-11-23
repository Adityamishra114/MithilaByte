import React from "react";
import { motion } from "framer-motion";
import "./WorkProcessSection.css";
import { fadeAnimations, animationConfig } from "../../../animations";


const steps = [
  {
    id: "01",
    title: "Discover & Strategize",
    desc: "We turn your business goals into a clear digital roadmap.",
    direction: "left",
  },
  {
    id: "02",
    title: "Build Your Digital Foundation",
    desc: "Your brand must communicate trust, value, and clarity.",
    direction: "right",
  },
  {
    id: "03",
    title: "Drive High-Quality Traffic",
    desc: "Modern, fast, mobile-first, conversion-focused systems.",
    direction: "left",
  },
  {
    id: "04",
    title: "Convert & Nurture",
    desc: " Your brand reaches the right people, at the right time, with the right message.",
    direction: "right",
  },
  {
    id: "05",
    title: "Scale with Data",
    desc: "Data-driven decisions, continuous improvement, compounding growth.",
    direction: "left",
    last: true,
  },
];

const WorkProcessSection = () => {
  return (
    <section className="work-process-section ptb-70 gray-light-bg font-publicSans overflow-hidden sm:overflow-visible">
      <div className="max-w-6xl mx-auto px-4 py-3">
        {/* Header */}
        <motion.div
          className="row justify-content-center py-12"
          initial={fadeAnimations.up.initial}
          whileInView={fadeAnimations.up.whileInView}
          transition={animationConfig.transition}
          viewport={animationConfig.viewport}
        >
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <strong className="color-secondary">Work Process</strong>

              <motion.h2
                className="h2-outs mb-3"
                initial={fadeAnimations.zoomIn.initial}
                whileInView={fadeAnimations.zoomIn.whileInView}
                transition={animationConfig.transition}
                viewport={animationConfig.viewport}
              >
                A Proven, Data-Driven System for Growth
              </motion.h2>

              <span className="animate-border mr-auto ml-auto mb-4"></span>
              <p className="lead">
                At Webpulse Digital, every campaign is powered by <strong>strategy, creativity, technology, and continuous improvement</strong>.
                We follow a structured approach to ensure your brand doesn't just grow — it wins.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div className="row mt-4" key={index}>
            {/* LEFT SIDE */}
            {step.direction === "left" && (
              <>
                <motion.div
                  className="col-md-12 col-lg-5 process-width font-publicSans"
                  initial={fadeAnimations.left.initial}
                  whileInView={fadeAnimations.left.whileInView}
                  transition={{
                    ...animationConfig.transition,
                    delay: index * 0.1,
                  }}
                  viewport={animationConfig.viewport}
                >
                  <div className="process-box process-left">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="process-step-number">
                          <strong>Step</strong>
                          <h2 className="m-0">{step.id}</h2>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <h5 className="font-bold">{step.title}</h5>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                    <div className="process-line-l"></div>
                  </div>
                </motion.div>

                {/* Connector + Point */}
                <div className="col-md-2 process-none"></div>
                <div className="col-md-5 col-lg-5 process-none">
                  <div
                    className={`process-point-right ${step.last ? "process-last" : ""
                      }`}
                  ></div>
                </div>
              </>
            )}

            {/* RIGHT SIDE */}
            {step.direction === "right" && (
              <>
                <div className="col-md-5 col-lg-5 process-none">
                  <div className="process-point-left"></div>
                </div>

                <div className="col-md-2 process-none"></div>

                <motion.div
                  className="col-md-12 col-lg-5 process-width font-publicSans"
                  initial={fadeAnimations.right.initial}
                  whileInView={fadeAnimations.right.whileInView}
                  transition={{
                    ...animationConfig.transition,
                    delay: index * 0.1,
                  }}
                  viewport={animationConfig.viewport}
                >
                  <div className="process-box process-right">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="process-step-number">
                          <strong>Step</strong>
                          <h2 className="m-0">{step.id}</h2>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <h5 className="font-bold">{step.title}</h5>
                        <p className="font-small">{step.desc}</p>
                      </div>
                    </div>
                    <div className="process-line-r"></div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcessSection;
