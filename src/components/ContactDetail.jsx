import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactDetail = () => {
  return (
    <section className="bg-[#804494] text-white py-10 font-publicSans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-2 font-publicSans">
            <FaMapMarkerAlt className="text-3xl text-[#804494]" />
            <h4 className="font-bold font-opens text-base sm:text-lg text-[#444444]">
              Visit Us
            </h4>
            <p className="text-sm font-nunito font-light text-[#444444] leading-relaxed font-publicSans">
              Bhaiapatti,Tola-Bhaiapatti
              <br />
              Panch-Siriyapur,Block-Basopatti,
              <br />
               Siriapur,Madhubani, Bihar, 847230
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaPhoneAlt className="text-3xl text-[#804494]" />
            <h4 className="font-bold font-opens text-base sm:text-lg text-[#444444]">
              Call us
            </h4>
            <p className="text-sm font-nunito font-light text-[#444444]">
              <a
                href="tel:+918506850785"
                className="break-words font-publicSans"
              >
               +91 8506850785
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaEnvelope className="text-3xl text-[#804494]" />
            <h4 className="font-bold font-opens text-base sm:text-lg text-[#444444]">
              Email us
            </h4>
            <p className="text-sm font-nunito font-light text-[#444444] break-words">
              <a
                href="mailto:mithilabyte@gmail.com"
                className="break-words font-publicSans"
              >
                mithilabyte@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaClock className="text-3xl text-[#804494]" />
            <h4 className="font-bold font-opens text-base sm:text-lg text-[#444444]">
              Hours
            </h4>
            <p className="text-sm font-nunito font-light text-[#444444] font-publicSans">
              Monday–Sunday:
              <br />
              10am–7pm
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;
