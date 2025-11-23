import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";

export default function Solutions() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid">
      <div className="row about_content py-2 d-flex align-items-center flex-wrap-reverse md:px-4 max-w-6xl mx-auto">
        <div
          className="col-lg-6 content_box aos-init aos-animate"
          data-aos="fade-right"
        >
          <motion.div
            initial={fadeAnimations.right.initial}
            whileInView={fadeAnimations.right.whileInView}
            transition={animationConfig.transition}
          >
            <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
              Solutions We Offer
            </h2>
            <p className="p-3">
              Are you looking for digital marketing solutions? Look no further
              than We Do Digital Marketing. We offer a wide range of digital
              marketing services that will help you reach your target audience.
              Whether you need help with SEO, social media, or pay-per-click
              advertising, we can help. Our team of digital marketing experts
              will work closely with you to develop a customized plan that meets
              your unique needs. We understand that no two businesses are alike,
              so we'll make sure your plan is tailored to your specific goals.
              Get in touch with us today to learn more about our digital
              marketing solutions. We'll be happy to answer any questions you
              have and get started on developing a plan that will help you
              achieve your objectives.
            </p>
          </motion.div>
        </div>
        <div
          className="col-lg-6 text-center aos-init aos-animate"
          data-aos="fade-left"
        >
          <motion.div
            initial={fadeAnimations.left.initial}
            whileInView={fadeAnimations.left.whileInView}
            transition={animationConfig.transition}
          >
            <div className="content row">

              {/* Left Column */}
              <div className="container11 col-lg-6">
                <a className="card1" href="#">
                  <h3>Website Designing & Development</h3>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>

                <a className="card1" href="#">
                  <h3>Customized CRM Solutions</h3>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>

                <a className="card1" href="#">
                  <h3>Mobile App Development</h3>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>

                <a className="card1" href="#">
                  <h3>Graphic Design</h3>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>
              </div>

              {/* Right Column */}
              <div className="container11 col-lg-6">

                <a className="card1" href="#">
                  <h3>Video Editing</h3>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>

                <a className="card1" href="#">
                  <h3>Social Media Marketing</h3>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>

                <a className="card1" href="#">
                  <h3>SEO & Digital Marketing</h3>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>

                <a className="card1" href="#">
                  <h3>Google My Business Listing</h3>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>

                <a className="card1" href="#">
                  <h3>AI Video Marketing</h3>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
