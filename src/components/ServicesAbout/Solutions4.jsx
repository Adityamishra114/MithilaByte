import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import "./ServicesAbout.css";
import { images212 } from "../../../data";

export default function Solutions4() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => setIsExpanded(!isExpanded);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid" id="crm-solutions">
      <div className="row about_content py-2 d-flex align-items-center flex-wrap-reverse max-w-6xl mx-auto md:px-4">

        {/* Content Section */}
        <motion.div
          className="col-lg-6 content_box"
          initial={fadeAnimations.right.initial}
          whileInView={fadeAnimations.right.whileInView}
          transition={animationConfig.transition}
        >
          <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
            Customized CRM Solutions
          </h2>

          <p className="px-3">
            A CRM (Customer Relationship Management) system helps businesses manage leads,
            automate sales workflows, track customer interactions, and improve client retention.
          </p>

          <p className="px-3">
            Our custom-built CRM systems are designed to fit your exact workflow — not the other way around.
            We help you streamline operations, boost productivity, and create seamless customer journeys.
          </p>

          <ul className="px-5 list-disc space-y-2">
            <li>Lead management & automated follow-ups</li>
            <li>Sales pipeline & deal tracking</li>
            <li>Customer onboarding & lifecycle management</li>
            <li>Custom dashboards & real-time reporting</li>
            <li>WhatsApp, SMS, email & call integration</li>
            <li>Role-based access & secure user controls</li>
            <li>AI-powered reminders & task automation</li>
          </ul>

          {isExpanded && (
            <p className="px-3 mt-2">
              From simple CRMs for startups to advanced enterprise CRM systems with 
              ERP, billing, inventory, HRMS, and automation features — we build scalable
              platforms aligned with your business model.
              <br /><br />
              Whether you need a sales CRM, education CRM, real-estate CRM, medical CRM, customer support CRM, or a completely custom system — 
              Webpulse Digital delivers solutions that drive growth, reduce manual work, and close deals faster.
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

        {/* Image Section */}
        <motion.div
          className="col-lg-6 py-20 text-center"
          initial={fadeAnimations.left.initial}
          whileInView={fadeAnimations.left.whileInView}
          transition={animationConfig.transition}
        >
          <ul className="img-list">
            <li>
              <img
                src={images212.ccrm}  
                alt="Customized CRM Solutions"
                className="w-full rounded-lg shadow-lg"
              />
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
