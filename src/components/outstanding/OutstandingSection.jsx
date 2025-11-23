import React, { useState } from "react";
import {
  FaSearch,
  FaLightbulb,
  FaPaintBrush,
  FaCogs,
  FaRocket,
  FaChartLine,
  FaCrown,
  FaAngleRight
} from "react-icons/fa";
import { motion } from "framer-motion";
import { images212 } from "../../../data";
import { fadeAnimations, animationConfig } from "../../../animations";
import "./OutstandingSection.css";

const OutstandingSection = () => {
  const [activeTab, setActiveTab] = useState("feature-tab-3");

  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
  };


  const tabs = [
    {
      id: "feature-tab-1",
      icon: <FaSearch size={22} />,
      title: "Understand",
    },
    {
      id: "feature-tab-2",
      icon: <FaLightbulb size={22} />,
      title: "Strategize",
    },
    {
      id: "feature-tab-3",
      icon: <FaPaintBrush size={22} />,
      title: "Create",
    },
    {
      id: "feature-tab-4",
      icon: <FaCogs size={22} />,
      title: "Build & Automate",
    },
    {
      id: "feature-tab-5",
      icon: <FaRocket size={22} />,
      title: "Launch & Accelerate",
    },
    {
      id: "feature-tab-6",
      icon: <FaChartLine size={22} />,
      title: "Measure & Optimize",
    },
    // Optional future step – uncomment when needed
    // {
    //   id: "feature-tab-7",
    //   icon: <FaCrown size={22} />,
    //   title: "Scale & Dominate",
    // },
  ];

  const tabContent = [
    {
      id: "feature-tab-1",
      heading: "Understand",
      desc: "We start with clarity — not assumptions",
      list: [
        "Business discovery & brand audit",
        "Competitor & market research",
        "Target audience & customer psychology",
        "Goal & KPI alignment"
      ],
      image: images212.understand,
      link: "digital-advertising",
    },
    {
      id: "feature-tab-2",
      heading: "Strategize",
      desc: "A winning plan for brand visibility, engagement & revenue.",
      list: ["Digital growth roadmap", "Funnel architecture & lead systems", "Messaging & brand positioning", "Platform & content strategy"],
      image: images212.strategize,
      link: "seo",
    },
    {
      id: "feature-tab-3",
      heading: "Create",
      desc: " Smart designs, powerful communication, high-impact storytelling.",
      list: [
        "Website & landing page design",
        "Brand creatives & content systems",
        "Video production & ad creatives",
        "Conversion-optimized UI & UX",
      ],
      image: images212.create,
      link: "digital-marketing",
    },
    {
      id: "feature-tab-4",
      heading: "Build & Automate",
      desc: "Technology + AI = scalable efficiency.",
      list: ["Website & e-commerce development", "CRM & marketing automation setup", "AI lead nurturing systems", "Analytics & tracking infrastructure"],
      image: images212.buildautomate,
      link: "social-media",
    },
    {
      id: "feature-tab-5",
      heading: "Launch & Accelerate",
      desc: "Go-to-market with speed & strategic precision.",
      list: ["Organic + Paid campaign rollout", "SEO & content execution", "Google, Meta & LinkedIn ads", "Influencer + remarketing funnels"],
      image: images212.launchaccelerate,
      link: "web-design",
    },
    {
      id: "feature-tab-6",
      heading: "Measure & Optimize",
      desc: "Continuous improvement = continuous growth.",
      list: ["Deep analytics & performance reporting", "A/B testing for pages, creatives & ads", "Conversion rate optimization (CRO)", "Budget reallocation to highest performers"],
      image: images212.measureoptimize,
      link: "web-design",
    },
    // {
    //   id: "feature-tab-7",
    //   heading: "Scale & Dominate",
    //   desc: "Repeat what works. Expand what wins.",
    //   list: ["Omnichannel scale-up", "Brand authority & community building", "AI-driven personalization","Long-term competitive positioning"],
    //   image: images212.ser14,
    //   link: "web-design",
    // },
  ];

  return (
    <section className="outstanding-section ptb-70 gray-light-bg overflow-hidden sm:overflow-visible">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <motion.div
          className="row justify-content-center"
          initial={fadeAnimations.up.initial}
          whileInView={fadeAnimations.up.whileInView}
          transition={animationConfig.transition}
          viewport={animationConfig.viewport}
        >
          <div className="col-md-9 col-lg-8">
            <div className="section-heading text-center mb-1 font-publicSans">
              <strong className="color-secondary">Webpulse Growth Engine</strong>
              <motion.h2
                className="h2-outs mb-3"
                initial={fadeAnimations.zoomIn.initial}
                whileInView={fadeAnimations.zoomIn.whileInView}
                transition={animationConfig.transition}
                viewport={animationConfig.viewport}
              >
                A Proven System to Build, Scale & Dominate Digital Markets
              </motion.h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
              <p className="lead">
                Growth is not luck — it’s a <strong>repeatable process.</strong>
                Our Growth Engine combines <strong>strategy, creative intelligence, technology & AI-driven execution</strong> to generate predictable business results.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="feature-tabs-wrap">
          <div
            className="feature-tabs-scroll-wrapper"
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
              whiteSpace: "nowrap",
              paddingBottom: "4px",
            }}
          >
            <ul
              className="nav feature-tabs  flex-nowrap d-flex justify-content-start justify-content-lg-center gap-3 px-3"
              style={{
                minWidth: "fit-content",
                flexWrap: "nowrap",
              }}
            >
              {tabs.map(({ id, icon, title }) => (
                <li
                  key={id}
                  className={`nav-item flex-shrink-0 ${activeTab === id ? "active" : ""}`}
                >
                  <a
                    className={`nav-link flex flex-col items-center justify-center gap-1 text-center ${activeTab === id ? "active text-[#804494]" : "text-[#6545d7]"
                      }`}
                    href={`#${id}`}
                    onClick={(e) => handleTabClick(e, id)}
                    style={{
                      minWidth: "110px",
                      whiteSpace: "normal",
                    }}
                  >
                    <span
                      className="flex items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        width: "40px",
                        height: "40px",
                        margin: "0 auto",
                      }}
                    >
                      {icon}
                    </span>
                    <h6 className="mb-0 text-sm font-medium">{title}</h6>
                  </a>
                </li>

              ))}
            </ul>
          </div>
          <div className="tab-content feature-tab-content tab_body mt-4 font-publicSans max-w-5xl mx-auto px-4">
            {tabContent
              .filter((tab) => tab.id === activeTab)
              .map((tab) => (
                <motion.div
                  key={tab.id}
                  className="row align-items-center  rounded-3 md:p-4 py-lg-5 mx-1 mx-lg-0"
                  initial={fadeAnimations.left.initial}
                  whileInView={fadeAnimations.left.whileInView}
                  transition={animationConfig.transition}
                  viewport={animationConfig.viewport}
                >
                  {/* Text Section */}
                  <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-left">
                    <h3 className="fw-bold mb-3 py-lg-3 py-2 h3-outs">{tab.heading}</h3>
                    <p className="text-muted mb-3">{tab.desc}</p>

                    <ul className="list-unstyled mb-4">
                      {tab.list.map((item, i) => (
                        <li key={i} className="feature-list-item text-muted flex items-center mb-2">
                          <FaAngleRight className="feature-list-icon" />
                          <span className="feature-list-text text-dark">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={tab.link}
                      className="bg-indigo-600 text-white btn secondary-solid-btn mr-3 px-3 py-3 rounded-lg shadow  transition"
                    >
                      Learn More
                    </a>
                  </div>

                  {/* Image Section */}
                  <motion.div
                    className="col-lg-6 col-md-12 py-lg-5 py-3 text-center"
                    initial={fadeAnimations.right.initial}
                    whileInView={fadeAnimations.right.whileInView}
                    transition={animationConfig.transition}
                    viewport={animationConfig.viewport}
                  >
                    <img
                      src={tab.image}
                      alt={tab.heading}
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </motion.div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutstandingSection;
