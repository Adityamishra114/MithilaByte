import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import { images212 } from "../../../data";
import "./ServicesAbout.css";
const Solutions5 = () => {
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    return (
        <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid" id="social-media-marketing">
            <div className="row about_content pt-5 flex items-center max-w-6xl  mx-auto md:px-4">
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
                                    src={images212.smmsdia}
                                    alt="Why Digital Marketing?"
                                    className="w-full"
                                />
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Content Box Section */}
                <div className="col-lg-6 content_box aos-init aos-animate">
                    <motion.div
                        initial={fadeAnimations.right.initial}
                        whileInView={fadeAnimations.right.whileInView}
                        transition={animationConfig.transition}
                    >
                        <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
                            Why Social Media Marketing?
                        </h2>
                        <p className="p-3 mt-2">
                            In today’s digital world, your audience lives on social media — and if your brand isn’t there, you’re missing massive growth opportunities. Social media marketing helps businesses build visibility, connect directly with customers, and turn engagement into real sales.

                            With platforms like Instagram, Facebook, LinkedIn, YouTube, and Twitter shaping consumer decisions, having a smart social media strategy is no longer optional — it’s essential. Social media marketing empowers you to tell your brand story, reach the right audience, run targeted ad campaigns, boost credibility, and stay ahead of competitors.

                            From content creation to analytics, there are countless tools available to help you succeed. And if managing everything feels complex, partnering with social media specialists can make the process easier and more effective.

                            Don’t just exist online — build a brand, grow a community, and drive revenue through powerful social media marketing. Start strengthening your online presence today!
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Solutions5;
