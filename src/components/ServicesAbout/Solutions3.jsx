import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import { images212 } from "../../../data";
import "./ServicesAbout.css";

const Solutions3 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid" id="seo-digital-marketing">
      <div className="row about_content pt-5 flex items-center max-w-6xl mx-auto md:px-4">
        
        {/* Image Section */}
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
                  src={images212.seodigt}
                  alt="SEO & Digital Marketing Services"
                  className="w-full"
                />
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="col-lg-6 content_box">
          <motion.div
            initial={fadeAnimations.right.initial}
            whileInView={fadeAnimations.right.whileInView}
            transition={animationConfig.transition}
          >
            <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
              SEO & Digital Marketing
            </h2>

            <p className="p-3 mt-2 text-gray-700 leading-relaxed">
              SEO & Digital Marketing help businesses improve online visibility, attract qualified leads, 
              and convert traffic into loyal customers.  
              <br /><br />
              From optimizing your website for search engines to running targeted campaigns on platforms 
              like Google and social media, a strong digital strategy ensures your brand reaches the right 
              audience at the right time.
              <br /><br />
              Whether you're a startup or an established business, investing in SEO & Digital Marketing is 
              essential to stay competitive, grow authority, and accelerate long-term success in the digital world.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Solutions3;
