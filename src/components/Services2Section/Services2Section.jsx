import React from "react";
import { motion } from "framer-motion";
import "./Services2Section.css";
import { images212 } from "../../../data";
import { fadeAnimations, animationConfig } from "../../../animations";

const services = [
  {
    id: 1,
    title: "Website Designing & Development",
    img: images212.sms12, 
    link: "#website-design-development",
    desc: `Professional, responsive, and high-performance websites designed to convert visitors into customers.`,
    animation: fadeAnimations.right,
  },
  {
    id: 2,
    title: "Customized CRM Solutions",
    img: images212.cmsts, 
    link: "#crm-solutions",
    desc: `Powerful CRM systems customized to streamline sales, automate workflows, and improve customer relationships.`,
    animation: fadeAnimations.zoomIn,
  },
  {
    id: 3,
    title: "App Development",
    img: images212.seosr, 
    link: "#mobile-app-development",
    desc: `High-performance Android & iOS apps built for scale, speed, and seamless user experience.`,
    animation: fadeAnimations.left,
  },
  {
    id: 4,
    title: "Graphic Design",
    img: images212.gds1, 
    link: "#graphic-design",
    desc: `Creative and impactful graphic designs that elevate your brand identity and communication.`,
    animation: fadeAnimations.right,
  },
  {
    id: 5,
    title: "Video Editing",
    img: images212.ems1, 
    link: "#video-editing",
    desc: `High-quality video production and editing to craft compelling brand stories and marketing content.`,
    animation: fadeAnimations.zoomIn,
  },
  {
    id: 6,
    title: "Social Media Marketing",
    img: images212.smm2,
    link: "#social-media-marketing",
    desc: `Grow your brand online with strategic content, ads, & community building across social platforms.`,
    animation: fadeAnimations.left,
  },
  {
    id: 7,
    title: "SEO & Digital Marketing",
    img: images212.seodm,
    link: "#seo-digital-marketing",
    desc: `Boost your online visibility, traffic, and conversions with advanced SEO and paid marketing solutions.`,
    animation: fadeAnimations.right,
  },
  {
    id: 8,
    title: "Google My Business Listing",
    img: images212.gbls, 
    link: "#google-my-business",
    desc: `Optimize your Google Business Profile for local search growth, map ranking, and lead generation.`,
    animation: fadeAnimations.zoomIn,
  },
  {
    id: 9,
    title: "AI Video Marketing",
    img: images212.aimar, 
    link: "#ai-video-marketing",
    desc: `Leverage AI-powered video content to boost brand reach, engagement, and conversion rates.`,
    animation: fadeAnimations.left,
  },
];


const Services2Section = () => {
  return (
    <section className="py-16 bg-gray-50 font-publicSans overflow-hidden sm:overflow-visible">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 setpadding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={service.animation.initial}
              whileInView={service.animation.whileInView}
              transition={{
                ...animationConfig.transition,
                delay: index * 0.1, 
              }}
              viewport={animationConfig.viewport}
              className="card999 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <a href={service.link} className="block p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="object-contain w-20 h-20"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 h5 cardheading">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 pb-2">
                  {service.desc}
                </p>
                <span className="font-semibold h5">Learn More →</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2Section;
