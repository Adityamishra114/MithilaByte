import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import "./ServicesAbout.css";
import { images212 } from "../../../data";

export default function SolutionsVideoEditing() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleContent = () => setIsExpanded(!isExpanded);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    return (
        <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid" id="video-editing">
            <div className="row about_content py-2 d-flex align-items-center flex-wrap-reverse max-w-6xl mx-auto md:px-4">
                <motion.div
                    className="col-lg-6 content_box"
                    initial={fadeAnimations.right.initial}
                    whileInView={fadeAnimations.right.whileInView}
                    transition={animationConfig.transition}
                >
                    <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
                        Video Editing
                    </h2>

                    <p className="px-3">
                        Video is the most powerful way to tell your story, build trust, and convert viewers into customers.
                        Professional video editing transforms raw footage into engaging, cinematic, and emotionally-driven content
                        that captures attention and drives results.
                    </p>

                    <p className="px-3">
                        At Webpulse Digital, we craft videos that elevate your brand and communicate your message clearly,
                        helping your audience connect, remember, and take action.
                    </p>

                    <ul className="px-5 list-disc space-y-2">
                        <li>Business & corporate videos</li>
                        <li>Social media reels & shorts</li>
                        <li>Product & service promotion videos</li>
                        <li>Motion graphics & logo animation</li>
                        <li>YouTube editing & storytelling</li>
                        <li>Explainer videos & tutorials</li>
                        <li>After-effects & AI-powered editing</li>
                    </ul>

                    {isExpanded && (
                        <p className="px-3 mt-2">
                            Our editors use professional tools like Adobe Premiere Pro, Final Cut, After Effects, and AI-powered
                            enhancement tools to deliver cinematic scenes, smooth transitions, sound-synced editing, crisp color-grading,
                            and high-impact storytelling. Whether it’s brand awareness, lead generation, or product marketing —
                            we create videos designed to engage viewers and drive real conversions.
                        </p>
                    )}

                    <button
                        id="setbtn_common"
                        className="moreless-button mt-3"
                        onClick={toggleContent}
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                </motion.div>
                <motion.div
                    className="col-lg-6 py-20 text-center"
                    initial={fadeAnimations.left.initial}
                    whileInView={fadeAnimations.left.whileInView}
                    transition={animationConfig.transition}
                >
                    <ul className="img-list">
                        <li>
                            <img
                                src={images212.vdoedt}
                                alt="Video Editing"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
