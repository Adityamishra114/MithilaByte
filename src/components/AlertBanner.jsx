import React from "react";
import { HiOutlineBellAlert } from "react-icons/hi2"; 

export default function AlertBanner({
  title = "Alert: Beware of Unauthorized Use of Our Name",
  phone = "+919435086282.",
}) {
  return (
    <section className="w-full bg-black text-center text-white sm:mt-[calc(var(--header-height))] mt-[calc(var(--header-height,80px)+40px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-3 lg:px-4 py-4 sm:py-5">
        <div className="flex justify-center mb-2">
          <HiOutlineBellAlert
            className="h-8 w-8 sm:h-24 sm:w-24 text-red-500"
            aria-hidden="true"
          />
        </div>
        <h3 className="text-[#e02b20] font-extrabold tracking-tight text-3xl sm:text-2xl md:text-4xl">
          {title}
        </h3>
        <p className="mt-2 text-[16px] font-semibold sm:text-[16px] leading-6 text-amber-400">
          We are a SEBI-registered research firm and{" "}
          <span className="font-bold text-amber-400">
            do not offer account handling or PMS
          </span>
          . Beware of scams by unregulated entities falsely using our name. To
          report any, contact{" "}
          <a
            href={`tel:${phone}`}
            className="font-bold underline underline-offset-4 decoration-amber-400 hover:text-amber-300"
          >
            {phone}
          </a>
          .
        </p>
      </div>
      <div className="h-[2px] w-full bg-neutral-800" aria-hidden="true" />
    </section>
  );
}
