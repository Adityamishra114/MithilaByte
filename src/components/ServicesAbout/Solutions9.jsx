import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import "./ServicesAbout.css";
import { images212 } from "../../../data";

export default function Solutions9() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleContent = () => setIsExpanded(!isExpanded);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    return (
        <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid" id="google-my-business">
            <div className="row about_content py-2 d-flex align-items-center flex-wrap-reverse max-w-6xl mx-auto md:px-4">

                {/* ✅ Content */}
                <motion.div
                    className="col-lg-6 content_box"
                    initial={fadeAnimations.right.initial}
                    whileInView={fadeAnimations.right.whileInView}
                    transition={animationConfig.transition}
                >
                    <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
                        Google My Business Listing (GMB)
                    </h2>

                    <p className="px-3">
                        Google My Business (GMB) is one of the most powerful tools for local businesses to rank on Google Search & Maps.
                        A well-optimized GMB profile helps you appear when customers near you search for products or services you offer.
                    </p>

                    <p className="px-3">
                        At Webpulse Digital, we optimize your GMB profile to increase calls, website visits, store walk-ins,
                        and customer trust — turning local searches into real business growth.
                    </p>

                    <ul className="px-5 list-disc space-y-2">
                        <li>Profile creation & full optimization</li>
                        <li>Category & service optimization</li>
                        <li>Local SEO keyword integration</li>
                        <li>Google posts & weekly content updates</li>
                        <li>Review & reputation management</li>
                        <li>Q&A setup & customer engagement</li>
                        <li>Geo-tagged photos & business highlights</li>
                    </ul>

                    {isExpanded && (
                        <p className="px-3 mt-2">
                            We implement advanced GMB strategies like local citations, map embedding, NAP consistency, 
                            and real-time customer interaction support. Our goal is simple — 
                            bring your business to the top of local search results, boost visibility, 
                            and convert local traffic into loyal customers.
                            <br /><br />
                            Whether you run a local shop, clinic, service business, institute, or restaurant —
                            a professionally managed Google My Business profile gives you a massive competitive edge
                            in your city and nearby areas.
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
                                src={images212.gmyb} 
                                alt="Google My Business Listing"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </li>
                    </ul>
                </motion.div>

            </div>
        </div>
    );
}
