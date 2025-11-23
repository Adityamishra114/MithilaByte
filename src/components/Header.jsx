import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const NAV = [
  { title: "Home", link: "/" },
  { title: "Services", link: "#service" },
  { title: "About Us", link: "#aboutus" },
  { title: "Contact", link: "/contactus" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const ref = useRef(null);

  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current?.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className="bg-white shadow-md fixed w-full z-50 top-0 left-0 transition-all"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/918506850785"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
          >
            <FaWhatsapp className="text-3xl" />
          </a>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center text-[20px] gap-6 font-bold font-grotesque text-gray-600">
            {NAV.map((item) =>
              item.link.startsWith("#") ? (
                <a
                  key={item.title}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.link);
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.title}
                  to={item.link}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl text-blue-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-xl border-t transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-3 text-gray-800 font-bold">
          {NAV.map((item) =>
            item.link.startsWith("#") ? (
              <li key={item.title} className="border-b">
                <a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.link);
                    setMenuOpen(false);
                  }}
                  className="py-3 px-6 hover:bg-gray-50 block"
                >
                  {item.title}
                </a>
              </li>
            ) : (
              <li key={item.title} className="border-b">
                <Link
                  to={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-6 hover:bg-gray-50 block"
                >
                  {item.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
}
