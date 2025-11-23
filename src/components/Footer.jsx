import React from "react";
import { Link } from "react-router-dom";
import { image } from "../../data";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const services = [
    {
      name: "Website Designing & Development",
      link: "#service",
    },
    { name: "Customized CRM Solutions", link: "#service"},
    {
      name: "Mobile App Development",
      link: "#service",
    },
    { name: "Graphic Design", link: "#service" },
    { name: "Video Editing", link: "#service" },
    {
      name: "Social Media Marketing",
      link: "#service"
    },
    {
      name: "SEO & Digital Marketing",
      link: "#service",
    },
    {
      name: "Google My Business Listing",
      link: "#service",
    },
    { name: "AI Video Marketing", link: "#service", },
  ];

  const quickLinks = [
    { name: "About Us", link: "#aboutus" },
    { name: "Services", link: "#service" },
    // { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contactus" },
  ];

  const socials = [
    { href: "https://www.facebook.com", icon: <FaFacebookF /> },
    {
      href: "https://www.linkedin.com/company",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.pinterest.com/",
      icon: <FaPinterest />,
    },
    { href: "https://www.youtube.com", icon: <FaYoutube /> },
  ];

  return (
    <footer className="bg-white text-gray-700 font-publicSans">
      <div className="max-w-6xl mx-auto px-4 items-start sm:px-6 lg:px-8 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Contact */}
        <div>
          <Link to="/" className="block">
            <img
              src={image.footerpng}
              alt="MithilaByte Technologies"
              className="w-[190px] mb-5"
            />
          </Link>

          <p className="text-sm opacity-90 leading-6 mb-4">
            <strong>MithilaByte Technologies</strong> — Your Partner in Web
            Innovation, Digital Growth & Modern Tech Solutions.
          </p>

          <p className="text-sm opacity-80 mb-2">
            Bhaiapatti, Tola-Bhaiapatti Panch-Siriyapur, Block-Basopatti,
            Siriapur,
            <br />
            Madhubani, Bihar, 847230
          </p>

          <a
            href="mailto:mithilabyte@gmail.com"
            className="text-sm mb-2 hover:text-[#34247d]"
          >
            mithilabyte@gmail.com
          </a>
          <br />
          <a
            href="tel:+918506850785"
            className="text-sm mb-2 hover:text-[#34247d]"
          >
            +91 8506850785
          </a>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Services</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {services.map((s, i) => (
              <li key={i}>
                {/* <Link to={s.link} className="hover:text-[#34247d] transition">
                  {s.name}
                </Link> */}
                <a href={s.link} className="hover:text-[#34247d] transition">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {quickLinks.map((q, i) => (
              <li key={i}>
                {/* <Link to={q.link} className="hover:text-[#34247d] transition">
                  {q.name}
                </Link> */}
                <a href={q.link} className="hover:text-[#34247d] transition">
                  {q.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">
            Social Links
          </h3>
          <div className="flex  mt-5 gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#34247d] hover:text-white transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Alphabet Bar */}
      {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-5">
        <div className="flex flex-wrap justify-center lg:justify-start text-sm font-semibold mx-1 text-gray-200 opacity-90">
          {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter, i) => (
            <Link
              key={i}
              to={`/services/${letter}`}
              className="hover:text-[#34247d] cursor-pointer transition-colors duration-200 mx-4"
            >
              {letter}
            </Link>
          ))}
        </div>
      </div> */}

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto px-4 items-start sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between  gap-4 text-sm opacity-80">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong>MithilaByte Technologies</strong> — All Rights Reserved.
          </p>
          <div className="flex gap-3">
            <Link
              to="/terms-conditions"
              className="hover:text-[#34247d] transition"
            >
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link
              to="/privacy-policy"
              className="hover:text-[#34247d] transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
