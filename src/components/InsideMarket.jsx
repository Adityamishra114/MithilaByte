import React, { useEffect, useMemo, useRef, useState } from "react";
import { image } from "../../data";

const cls = (...xs) => xs.filter(Boolean).join(" ");

const BulletPoints = ({ points }) => (
  <ul className="mt-2 list-disc list-inside items-start text-gray-600 text-sm space-y-2">
    {points.map((p, idx) => (
      <li key={idx}>{p}</li>
    ))}
  </ul>
);

export default function InsideMarket({
  coloredLine = image.coloredLine,
  data = defaultData,
}) {
  const tabs = useMemo(
    () => [
      { key: "websiteDesignDevelopment", label: "Website Designing & Development" },
      { key: "crmSolutions", label: "CRM Solutions" },
      { key: "appDevelopment", label: "App Development" },
      { key: "graphicDesign", label: "Graphic Design" },
      { key: "videoEditing", label: "Video Editing" },
      { key: "socialMediaMarketing", label: "Social Media" },
      { key: "seoDigitalMarketing", label: "SEO & Marketing" },
      { key: "googleMyBusiness", label: "Google Listing" },
      { key: "aiVideoMarketing", label: "AI Video Ads" }
    ],
    []
  );

  const [active, setActive] = useState(0);
  const barRef = useRef(null);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0, height: 0 });
  const [pill, setPill] = useState({ w: 0, h: 0, left: 0 });

  useEffect(() => {
    const measure = () => {
      const el = itemRefs.current[active];
      const wrap = containerRef.current;
      if (!el || !wrap) return;
      const wrapRect = wrap.getBoundingClientRect();
      const r = el.getBoundingClientRect();

      setPill({
        w: r.width,
        h: r.height,
        left: r.left - wrapRect.left,
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  const items = data[tabs[active].key] || [];

  /* ✅ Drag scroll for tabs */
  const scrollRef = useRef(null);
  // useEffect(() => {
  //   const el = scrollRef.current;
  //   let isDown = false, startX, scrollLeft;

  //   const down = e => { isDown = true; startX = e.pageX; scrollLeft = el.scrollLeft; };
  //   const up = () => (isDown = false);
  //   const move = e => {
  //     if (!isDown) return;
  //     e.preventDefault();
  //     el.scrollLeft = scrollLeft - (e.pageX - startX) * 1.2;
  //   };

  //   el.addEventListener("mousedown", down);
  //   el.addEventListener("mouseup", up);
  //   el.addEventListener("mouseleave", up);
  //   el.addEventListener("mousemove", move);
  // }, []);


  return (
    <section className="bg-[#FFECE1] font-publicSans">
      <div className="w-full flex flex-col items-center py-[40px] lg:pt-[60px] px-[20px] lg:px-[54px]">
        <div className="max-w-[1150px] w-full flex flex-col items-center">

          <h2 className="lg:text-[44px] text-[28px] font-bold text-center relative">
            Webpulse Digital — Service Pricing Plans
            <img
              alt=""
              width={180}
              height={8}
              className="h-[8px] w-[140px] absolute right-0 bottom-[-6px]"
              src={coloredLine}
            />
          </h2>

          <h3 className="text-base lg:text-xl text-center text-gray-600 mt-4">
            Choose the right plan & scale your business smartly
          </h3>

          <div className="min-h-[36px] lg:min-h-[50px] w-full flex justify-center">
            <div
              className="
      relative 
      border-[1.5px] lg:border-[2px] border-[#391A643D] 
      rounded-[16px] mt-[28px] lg:mt-[48px]
      gap-x-[6px] lg:gap-x-[12px]
      scroll-smooth
      w-full max-w-[90vw] lg:max-w-[900px]
      overflow-hidden lg:overflow-visible
    "
            >
              <div
                ref={containerRef}
                className="
        flex relative 
        overflow-x-auto lg:overflow-visible 
        whitespace-nowrap
        no-scrollbar
        px-[4px]
      "
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {tabs.map((t, i) => {
                  const activeClass =
                    i === active
                      ? "opacity-100 text-white bg-home-page-gradient shodow-md rounded-xl"
                      : "opacity-70 text-black rounded-xl";

                  return (
                    <button
                      key={t.key}
                      ref={(el) => (itemRefs.current[i] = el)}
                      onClick={() => {
                        setActive(i);
                        itemRefs.current[i]?.scrollIntoView({
                          behavior: "smooth",
                          inline: "center",
                          block: "nearest",
                        });
                      }}
                      className={`flex-shrink-0 cursor-pointer 
              lg:text-[18px] md:text-[14px] text-[13px] 
              px-[12px] lg:px-[24px] 
              h-[36px] lg:h-[50px] 
              flex items-center justify-center
              font-semibold transition-all duration-300
              ${activeClass}`}
                    >
                      {t.label}
                    </button>
                  );
                })}

                {/* ✅ Gradient Active Pill */}
                <div
                  ref={barRef}
                  className="
          absolute top-0 left-0 
          rounded-[16px] 
          bg-home-page-gradient 
          shadow-md 
          transition-all duration-300 ease-out
          z-[1]
        "
                  style={{
                    width: pillStyle.width,
                    height: pillStyle.height,
                    transform: `translateX(${pillStyle.left}px)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* ✅ Cards */}
          <div className="mt-6 w-full overflow-x-auto scrollbar-hide">
            <ul className="flex gap-4 snap-x snap-mandatory pb-2">
              {items.map((card, idx) => (
                <li key={idx} className="snap-start shrink-0 basis-[85%] md:basis-[32%]">
                  <Card {...card} />
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ✅ Card Component */
function Card({ title, points }) {
  return (
    <div className="border border-[#E0E0E0] bg-white shadow-md rounded-[18px] p-4 h-[280px] flex flex-col">
      <h3 className="font-semibold text-base lg:text-lg text-[#34247d] text-center mb-3">
        {title}
      </h3>

      <ul className="mt-1 space-y-2 text-gray-700 text-[11px] sm:text-[12px] lg:text-[14px] leading-relaxed pl-5">
        {points.map((p, idx) => (
          <li
            key={idx}
            className="list-disc marker:text-[#804494] pl-1 text-left"
            style={{ textIndent: "-0.55rem" }}
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}


/* ✅ Service Data With Points */
const defaultData = {
  websiteDesignDevelopment: [
    {
      title: "Starter",
      points: [
        "Up to 5 pages clean UI design",
        "Mobile-friendly responsive layout",
        "Speed-optimized & SEO-ready structure",
        "Contact form + WhatsApp click-to-chat",
        "Basic security & monthly maintenance"
      ]
    },
    {
      title: "Growth",
      points: [
        "Corporate-grade UI + branding consistency",
        "Interactive animations & lead capture forms",
        "Blog / CMS setup + newsletter integration",
        "Advance on-page SEO & sitemap setup",
        "CRM / WhatsApp / CTA conversion funnels"
      ]
    },
    {
      title: "Accelerate",
      points: [
        "E-Commerce / Custom dashboard system",
        "Secure payment gateway & coupons",
        "Advanced analytics & behavior tracking",
        "Automation workflows (cart abandon, email)",
        "Admin controls + inventory management"
      ]
    }
  ],

  crmSolutions: [
    {
      title: "Starter",
      points: [
        "Lead management & sales pipeline",
        "Task reminders & follow-up scheduling",
        "WhatsApp & email outreach basics",
        "Contact segmentation & notes",
        "Dashboard & reporting overview"
      ]
    },
    {
      title: "Growth",
      points: [
        "Automated workflows & lead scoring",
        "Multi-channel messaging campaigns",
        "Advanced reports & insights",
        "Form + website + call log integration",
        "Role-based access & team collaboration"
      ]
    },
    {
      title: "Accelerate",
      points: [
        "Industry-specific CRM modules",
        "AI-driven lead intelligence & scoring",
        "API integrations (ERP, LMS, billing)",
        "IVR + WhatsApp BOT + drip automation",
        "Custom dashboards & workflow mapping"
      ]
    }
  ],

  appDevelopment: [
    {
      title: "Starter",
      points: [
        "Business app UI + login system",
        "Lead submission & push notifications",
        "Profile + basic dashboard",
        "Google Firebase setup",
        "Basic admin settings"
      ]
    },
    {
      title: "Growth",
      points: [
        "E-Commerce / on-demand app features",
        "Cart + payment gateway integration",
        "Order / booking dashboard",
        "Offers / rewards & push automation",
        "Crash-safe & optimized performance"
      ]
    },
    {
      title: "Accelerate",
      points: [
        "Advanced custom app architecture",
        "User roles + real-time sync + APIs",
        "Geo-tracking, chat & automation",
        "Admin portal + analytics suite",
        "Ongoing devops & scale support"
      ]
    }
  ],

  graphicDesign: [
    {
      title: "Starter",
      points: [
        "Brand logo + palette + font kit",
        "Business card & letterhead",
        "Basic social templates",
        "2 design revisions",
        "File delivery in PNG/JPG"
      ]
    },
    {
      title: "Growth",
      points: [
        "Complete stationery kit",
        "Custom social media templates",
        "Brand moodboard & visual identity",
        "3 reel cover styles + icons",
        "Editable source files"
      ]
    },
    {
      title: "Accelerate",
      points: [
        "Brand book & usage guidelines",
        "Campaign creative pack + ad banners",
        "Brochures + marketing collaterals",
        "Motion graphic assets",
        "Unlimited revisions (project scope)"
      ]
    }
  ],

  videoEditing: [
    {
      title: "Starter",
      points: [
        "Short-form videos (Reels/Shorts)",
        "Captions + transitions + sound sync",
        "Basic color correction",
        "Royalty-free music",
        "2 revisions"
      ]
    },
    {
      title: "Growth",
      points: [
        "Corporate / testimonial videos",
        "Animated lower-thirds & branding",
        "Voiceover sync + stock footage",
        "Professional sound design",
        "Script + storyboard support"
      ]
    },
    {
      title: "Accelerate",
      points: [
        "Documentary / ad-grade edit",
        "Cinematic color grading",
        "Motion graphics + custom animations",
        "YouTube storytelling + thumbnails",
        "Advanced SFX & scene cuts"
      ]
    }
  ],

  socialMediaMarketing: [
    {
      title: "Starter",
      points: [
        "Social calendar & posting plan",
        "Reels + static posts",
        "Hashtag + caption strategy",
        "Community replies & DMs lite",
        "Monthly performance report"
      ]
    },
    {
      title: "Growth",
      points: [
        "Meta ads & targeted campaigns",
        "Lead funnels & retargeting flows",
        "Influencer + UGC collaboration",
        "Competitor & trend analysis",
        "Weekly growth check-ins"
      ]
    },
    {
      title: "Accelerate",
      points: [
        "Full funnel performance marketing",
        "AI-driven audience clustering",
        "Automation: WhatsApp + Mail + CRM",
        "Content studio + brand storytelling",
        "Agency consulting + scaling strategy"
      ]
    }
  ],

  seoDigitalMarketing: [
    {
      title: "Starter",
      points: [
        "On-page SEO audit + fixes",
        "Technical SEO setup",
        "Keyword mapping",
        "Backlink starter package",
        "Search console setup"
      ]
    },
    {
      title: "Growth",
      points: [
        "Google PPC + Performance Max",
        "Conversion tracking & heatmaps",
        "Content SEO + landing pages",
        "Retargeting & remarketing ads",
        "Monthly SEO & ad reports"
      ]
    },
    {
      title: "Accelerate",
      points: [
        "Full-funnel SEO + SEM",
        "Thought-leadership blog engine",
        "Advanced CRO & A/B testing",
        "AI-based content clusters",
        "International scaling SEO"
      ]
    }
  ],

  googleMyBusiness: [
    {
      title: "Starter",
      points: [
        "Profile setup & category mapping",
        "Cover & photo updates",
        "Service + location optimization",
        "Review suggestions",
        "Monthly performance check"
      ]
    },
    {
      title: "Growth",
      points: [
        "Local SEO optimization",
        "Review growth strategy",
        "Geo-signal building",
        "Weekly content postings",
        "Competitor tracking"
      ]
    },
    {
      title: "Accelerate",
      points: [
        "GMB automation workflows",
        "Lead routing & call tracking",
        "Geo-fencing + citation strategy",
        "Crisis & reputation management",
        "Monthly growth dashboard"
      ]
    }
  ],

  aiVideoMarketing: [
    {
      title: "Starter",
      points: [
        "AI avatar brand presenter",
        "Custom script & delivery",
        "Human-like AI voice",
        "HD export",
        "2 revisions"
      ]
    },
    {
      title: "Growth",
      points: [
        "Multiple AI avatars",
        "Multi-language dubbing",
        "Cinematic AI effects + subtitles",
        "UGC + influencer blend style",
        "Short ad creatives"
      ]
    },
    {
      title: "Accelerate",
      points: [
        "Hyper-realistic ads & spokesperson",
        "Full campaign scripting & shooting",
        "AI character + emotional voice",
        "Brand narrative & storytelling",
        "High-ROI conversion-focused edits"
      ]
    }
  ]
};
