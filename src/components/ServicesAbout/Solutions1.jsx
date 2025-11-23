import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations"; 
import "./ServicesAbout.css"; 

export default function Solutions1() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid">
      <div className="row about_content py-2 d-flex  md:gap-10 gap-4  align-items-center flex-wrap-reverse max-w-6xl mx-auto md:px-4">
        <div className="container aos-init aos-animate" data-aos="zoom-in">
          <div className="row px-3">
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              initial={fadeAnimations.zoomIn.initial}
              whileInView={fadeAnimations.zoomIn.whileInView}
              transition={animationConfig.transition}
            >
              <div className="cardset">
                <h3>1. CORPORATE FILMS</h3>
                <p>
                  Corporate films are one of the most efficient ways for businesses to communicate or convey their business objectives to the world.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              initial={fadeAnimations.zoomIn.initial}
              whileInView={fadeAnimations.zoomIn.whileInView}
              transition={animationConfig.transition}
            >
              <div className="cardset">
                <h3>2. DOCUMENTARIES</h3>
                <p>
                  There are many different kinds of documentaries that can be made about business, and Webpulse Digital covers a wide range of company social responsibility (CSR) issues and social issue documentaries resolved by companies.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              initial={fadeAnimations.zoomIn.initial}
              whileInView={fadeAnimations.zoomIn.whileInView}
              transition={animationConfig.transition}
            >
              <div className="cardset">
                <h3>3. TRAINING VIDEOS</h3>
                <p>
                  We specialize in recording interactive training videos that help your customers receive the desired information effectively.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              initial={fadeAnimations.zoomIn.initial}
              whileInView={fadeAnimations.zoomIn.whileInView}
              transition={animationConfig.transition}
            >
              <div className="cardset">
                <h3>4. PRODUCT DEMO VIDEOS</h3>
                <p>
                  Product demo videos are created to describe your product's USPs and make them memorable for your audience.
                </p>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              initial={fadeAnimations.zoomIn.initial}
              whileInView={fadeAnimations.zoomIn.whileInView}
              transition={animationConfig.transition}
            >
              <div className="cardset">
                <h3>5. EVENT COVERAGE</h3>
                <p>
                  Webpulse Digital Technology has extensive experience in producing large-format videos for company events, exhibitions, and corporate video productions.
                </p>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              initial={fadeAnimations.zoomIn.initial}
              whileInView={fadeAnimations.zoomIn.whileInView}
              transition={animationConfig.transition}
            >
              <div className="cardset">
                <h3>6. EXPLAINER VIDEOS</h3>
                <p>
                  Explainer videos are concise marketing videos that outline your product or service specialties for both online and offline marketing.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Content Box with Fade-in Effect */}
        <div className="col-lg-12 content_box aos-init aos-animate" data-aos="fade-right">
          <motion.div
            initial={fadeAnimations.right.initial}
            whileInView={fadeAnimations.right.whileInView}
            transition={animationConfig.transition}
          >
            <div>
              <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">Solutions We Offer</h2>
              <p className="p-3">
                We provide corporate film services and solutions that help businesses communicate their brand story and values to employees, customers, and other stakeholders. Our films are designed to engage and inspire, and we work with our clients to ensure that they deliver the right message to the right audience.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
