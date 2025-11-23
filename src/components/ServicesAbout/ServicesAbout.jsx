import React from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import { images212 } from "../../../data";
import "./ServicesAbout.css";
const ServicesAbout = () => {
  return (
    <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid ">
      <div className="row about_content pt-5 flex items-center max-w-6xl mx-auto md:px-4 ">
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
                  src={images212.mainsers}
                  alt="Why Digital Marketing?"
                  className="w-full"
                />
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Content Box Section */}
        <div className="col-lg-6 content_box py-4 aos-init aos-animate">
          <motion.div
            initial={fadeAnimations.right.initial}
            whileInView={fadeAnimations.right.whileInView}
            transition={animationConfig.transition}
          >
            <h2 className="text-center text-danger setmobile_organic mb-4 text-xl lg:text-2xl font-bold">
              Webpulse Digital: Best Digital Marketing Company in Delhi NCR
            </h2>
            <p className="p-3 mt-2">
              In the rapidly evolving digital landscape, staying ahead requires
              constant innovation. Webpulse Digital stands at the forefront of
              digital trends, consistently integrating cutting-edge technologies
              and strategies into its campaigns. Whether it's harnessing the
              power of AI in advertising or staying abreast of the latest
              algorithm updates, Webpulse Digital ensures that its clients
              benefit from the most effective and forward-thinking approaches.
              <br />
              In the rapidly evolving digital landscape, staying ahead requires
              constant innovation. Webpulse Digital stands at the forefront of
              digital trends, consistently integrating cutting-edge technologies
              and strategies into its campaigns. Whether it's harnessing the
              power of AI in advertising or staying abreast of the latest
              algorithm updates, Webpulse Digital ensures that its clients
              benefit from the most effective and forward-thinking approaches.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAbout;
