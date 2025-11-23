import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import { images212 } from "../../../data";
import "./ServicesAbout.css";

const Solutions8 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid" id="graphic-design">
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
                  src={images212.grphd} 
                  alt="Graphic Design Services"
                  className="w-full"
                />
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Content Box Section */}
        <div className="col-lg-6 content_box">
          <motion.div
            initial={fadeAnimations.right.initial}
            whileInView={fadeAnimations.right.whileInView}
            transition={animationConfig.transition}
          >
            <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
              Why Graphic Design?
            </h2>

            <p className="p-3 mt-2 text-gray-700 leading-relaxed">
              Great design isn’t just about looking good — it’s about creating
              powerful visual experiences that communicate your brand’s story
              and influence customer decisions.  
              <br /><br />
              Graphic design strengthens your brand identity, builds trust, and
              helps you stand out in a crowded digital world. From logos and brand
              guidelines to social media creatives, banners, packaging, and
              advertising graphics — every visual element plays a key role in how
              your audience perceives your business.
              <br /><br />
              Whether you're launching a brand or refreshing your look, a strong
              design strategy ensures consistency, professionalism, and emotional
              connection with your audience.
              <br /><br />
              Ready to make your brand unforgettable?  
              Let's design visuals that attract, engage, and convert.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Solutions8;
