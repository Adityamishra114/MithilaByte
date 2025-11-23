import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import "./ServicesAbout.css";
import { images212 } from "../../../data";

export default function Solutions10() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleContent = () => setIsExpanded(!isExpanded);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    return (
        <div className="overflow-hidden  setcard_mainorganic font-publicSans container-fluid" id="ai-video-marketing">
            <div className="row about_content py-2 d-flex align-items-center flex-wrap-reverse max-w-6xl mx-auto md:px-4">

                {/* ✅ Content */}
                <motion.div
                    className="col-lg-6 content_box"
                    initial={fadeAnimations.right.initial}
                    whileInView={fadeAnimations.right.whileInView}
                    transition={animationConfig.transition}
                >
                    <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
                        AI Video Marketing
                    </h2>

                    <p className="px-3">
                        AI Video Marketing uses artificial intelligence to create high-quality videos 
                        faster, smarter, and at scale. From ad creatives to product reels, you can 
                        produce engaging, human-like content without needing a full production team.
                    </p>

                    <p className="px-3">
                        At Webpulse Digital, we leverage AI to create magnetic video content that 
                        engages, educates, entertains, and converts your audience into customers.
                        AI videos = faster production, higher output, lower cost, maximum impact.
                    </p>

                    <ul className="px-5 list-disc space-y-2">
                        <li>AI-generated promotional & sales videos</li>
                        <li>Talking avatar videos for branding</li>
                        <li>Product showcase & explainer videos</li>
                        <li>Reels/Shorts with AI scripts & voiceovers</li>
                        <li>Auto video conversion from blogs/text</li>
                        <li>AI storytelling, subtitles & animations</li>
                        <li>Omni-platform video campaigns (IG/FB/YT/LinkedIn)</li>
                    </ul>

                    {isExpanded && (
                        <p className="px-3 mt-2">
                            We use advanced AI tools like Runway, Synthesia, HeyGen, 
                            MidJourney, D-ID, and text-to-video engines to build 
                            high-performance content libraries for your brand. 
                            <br /><br />
                            Whether you need viral short-form reels, corporate explainers, 
                            personal branding avatar videos, or AI-generated ad content, 
                            we create video systems that keep your brand visible — everywhere.
                            <br /><br />
                            The future of marketing is AI-powered — and now your business can 
                            leverage it before your competitors do.
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

                {/* ✅ Image */}
                <motion.div
                    className="col-lg-6 py-20 text-center"
                    initial={fadeAnimations.left.initial}
                    whileInView={fadeAnimations.left.whileInView}
                    transition={animationConfig.transition}
                >
                    <ul className="img-list">
                        <li>
                            <img
                                src={images212.aimvd} 
                                alt="AI Video Marketing"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </li>
                    </ul>
                </motion.div>

            </div>
        </div>
    );
}
