import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations"; 
import "./ServicesAbout.css"; 
import { images212 } from "../../../data";

export default function Solutions2() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid" id="mobile-app-development">
      <div className="row about_content py-2 d-flex align-items-center flex-wrap-reverse max-w-6xl mx-auto md:px-4">
        <motion.div
          className="col-lg-6 content_box aos-init aos-animate"
          data-aos="fade-right"
          initial={fadeAnimations.right.initial}
          whileInView={fadeAnimations.right.whileInView}
          transition={animationConfig.transition}
        >
          <div>
            <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">Mobile Application</h2>
            <p className="p-3">
              Mobile application development is the process of creating specific software applications that run on a mobile
              device (such as applications for smartphones and digital assistants), and utilize a network connection to
              work with remote computing resources. The development process involves creating installable software
              bundles, implementing backend services, and testing the application on target devices. In short, mobile app
              development is the strategic process of designing, building, and launching a mobile app successfully. The
              importance of building a business mobile app is growing rapidly as businesses across industries aim to meet
              user expectations{" "}
              {isExpanded ? (
                <span className="moretext">
                  and seek real-time, convenient ways to conduct transactions and access information. By the end of 2023, it is estimated that the total number of mobile app downloads will amount to 299 billion,
                  worldwide. A well-structured mobile app helps you leverage all the benefits offered by the mobile device and
                  the OS for which it is developed. The development process takes into account the limitations of mobile
                  devices and allows you to balance cost with functionality.
                </span>
              ) : (
                <span className="moretext">...</span>
              )}
            </p>

            <button id="setbtn_common" className="moreless-button" onClick={toggleContent}>
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        </motion.div>
        <motion.div
          className="col-lg-6 text-center aos-init aos-animate"
          data-aos="fade-left"
          initial={fadeAnimations.left.initial}
          whileInView={fadeAnimations.left.whileInView}
          transition={animationConfig.transition}
        >
          <div className="left">
            <ul className="img-list">
              <li>
                <img
                 src={images212.mapd}
                  alt="Mobile Application"
                  className="w-full rounded-lg shadow-lg"
                />
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
