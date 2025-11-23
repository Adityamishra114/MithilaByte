import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import { images212 } from "../../../data";
import "./ServicesAbout.css";

const Solutions7 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => setIsExpanded(!isExpanded);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid" id="website-design-development">
      <div className="row about_content pt-5 flex items-center max-w-6xl mx-auto md:px-4">

        {/* Left Image Section */}
        <div className="col-lg-6 text-center">
          <motion.div
            className="left"
            initial={fadeAnimations.left.initial}
            whileInView={fadeAnimations.left.whileInView}
            transition={animationConfig.transition}
          >
            <ul className="img-list">
              <li>
                <img
                  src={images212.wbsds}
                  alt="Website Designing & Development"
                  className="w-full"
                />
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right Content Section */}
        <div className="col-lg-6 content_box">
          <motion.div
            initial={fadeAnimations.right.initial}
            whileInView={fadeAnimations.right.whileInView}
            transition={animationConfig.transition}
          >
            <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
              Why Website Designing & Development?
            </h2>

            <p className="p-3 mt-2 text-gray-700 leading-relaxed">
              Your website is your digital identity — the first impression your customers get of your brand. 
              A high-performance, beautifully-designed website not only grabs attention but builds trust and 
              turns visitors into paying customers.
              <br /><br />
              A professional website goes beyond great visuals — it includes{" "}
              <strong>seamless navigation, branding, speed, mobile responsiveness, SEO foundation, and security</strong>.
              <br /><br />
              Whether you're a startup, local business, institute, or e-commerce brand, a strategic website helps you:
            </p>

            <ul className="pl-4 list-disc text-gray-700 font-medium">
              <li>Create a powerful brand impression</li>
              <li>Build credibility & trust instantly</li>
              <li>Showcase services/products professionally</li>
              <li>Generate quality leads & conversions</li>
              <li>Deliver smooth user experiences across devices</li>
            </ul>

            {isExpanded && (
              <p className="px-3 mt-2 text-gray-700 leading-relaxed">
                We build modern websites using the latest technologies — focusing on UI/UX, 
                performance, automation, SEO-friendly structure, and security. 
                From corporate sites to e-commerce & custom platforms, we ensure your website 
                not only looks stunning but works as a **24/7 digital sales engine** for your business.
              </p>
            )}

            <button
              id="setbtn_common"
              className="moreless-button mt-3 mx-3 bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition"
              onClick={toggleContent}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Solutions7;
