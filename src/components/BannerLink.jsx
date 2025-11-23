import React from "react";
import {image} from "../../data"
export default function BannerLink({
  href = "https://www.stockgro.club/women-in-money/",
  imgSrc = image.imgSrc,
  alt = "Women in Money banner",
  className = "",
  openInNewTab = true,
}) {
  const target = openInNewTab ? "_blank" : undefined;
  const rel = openInNewTab ? "noopener noreferrer" : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={["block md:mt-0", className].filter(Boolean).join(" ")}
      aria-label={alt}
    >
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        className="w-full h-auto"
      />
    </a>
  );
}
