import React from "react";
import { motion } from "framer-motion";
import { images212 } from "../../../data";
import "./Services1Section.css";
import { fadeAnimations, animationConfig } from "../../../animations";

export default function Services1Section() {
  const services = [
     {
      title: "Website Designing & Development",
      text: "Website Designing & Development refers to creating responsive and visually engaging websites that improve user experience and boost online presence.",
      img: images212.sms12,
      width: "88%",
      dark: true,
    },
      {
      title: "Customized CRM Solutions",
      text: "Customized CRM Solutions refers to building tailored customer management systems that help businesses streamline operations, automate workflows, and enhance customer relationships.",
      img: images212.cmsts,
      width: "88%",
      dark: false,
    },
   {
      title: "Mobile App Development",
      text: "Mobile App Development refers to creating mobile applications that improve user experience, increase accessibility, and enable businesses to engage customers on the go.",
      img: images212.seosr,
      width: "80%",
      dark: true,
    },
      {
      title: "Graphic Designing",
      text: "Graphic design is the art and practice of creating visual content to communicate information and ideas to a specific audience.",
      img: images212.gds1,
      width: "88%",
      dark: false,
    },
     {
      title: "Video Editing",
      text: "Video Editing refers to creating, trimming, enhancing, and combining video footage with sound, graphics, and effects to produce engaging and professional visual content for brands and audiences.",
      img: images212.ems1,
      width: "88%",
      dark: true,
    },
    {
      title: "Social Media Marketing",
      text: "Social media marketing is a strategic approach that focuses on creating engaging and share-worthy content across social platforms to build brand awareness,  business growth.",
      img: images212.smm2,
      width: "88%",
      dark: false,
    },
   {
      title: "SEO & Digital Marketing",
      text: "SEO & Digital Marketing refers to promoting products, services, or brands through online platforms such as search engines, websites and social media to increase visibility, traffic, and conversions.",
      img: images212.seodm,
      width: "83%",
      dark: true,
    },
    {
      title: "Google My Business Listing",
      text: "Google My Business Listing refers to creating and optimizing a business profile on Google Search & Maps to improve local visibility, attract nearby customers, and increase leads through local searches.",
      img: images212.gbls,
      width: "83%",
      dark: false,
    },
    {
      title: "AI Video Marketing",
      text: "AI Video Marketing refers to creating and distributing video content using AI tools to automate video production, enhance creativity, personalize messaging, and improve audience engagement across digital platforms.",
      img: images212.aimar,
      width: "88%",
      dark: true,
    },
   
  ];

  const animationPattern = [
    fadeAnimations.right,
    fadeAnimations.zoomIn,
    fadeAnimations.left,
  ];

  return (
    <section className="services-section ptb-70 gray-light-bg overflow-hidden sm:overflow-visible" id="service">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <div className="row justify-content-center max-w-4xl md:mx-auto text-center md:px-4">
          <div className="col-md-8">
            <div className="section-heading text-center mb-5 font-publicSans">
              <strong className="color-secondary">Our Services</strong>
              <h2 className="h2">How can we be of assistance to you?</h2>
              <span className="animate-border mr-auto ml-auto mb-2 font-bold"></span>
              <p className="lead">
                Our ultimate goal is to provide you with the best possible
                service and assistance, which is why we maintain a highly skilled
                team dedicated to providing customized solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row mt-2 max-w-6xl mx-auto lg:px-6">
          {services.map((srv, i) => {
            const animation = animationPattern[i % 3]; 
            return (
              <motion.div
                key={i}
                className="col-lg-4 col-md-6 col-12 ourservice_set setpadding font-publicSans"
                initial={animation.initial}
                whileInView={animation.whileInView}
                transition={{
                  ...animationConfig.transition,
                  delay: i * 0.1,
                }}
                viewport={animationConfig.viewport}
              >
                <div className={`Scard p-6 ${srv.dark ? "bgset" : ""}`}>
                  <h5
                    className={`h5 cardheading ${
                      srv.dark ? "text-white" : "text-black"
                    }`}
                  >
                    {srv.title}
                  </h5>
                  <p className={srv.dark ? "text-white" : ""}>{srv.text}</p>
                  <div className="spin2">
                    <img
                      src={srv.img}
                      style={{ width: srv.width }}
                      alt={srv.title}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
