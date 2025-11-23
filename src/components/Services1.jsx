import React, { useEffect } from "react";
import {images212} from "../../data"
const categories = [
  {
    title: "SEO & Optimization",
    services: [
      {
        title: "SEO Best Practices: A Comprehensive Guide",
        desc: "Master evergreen SEO principles like on-page optimization, backlinks, and content quality to ensure long-term search visibility and consistent website growth.",
        icon: images212.SEOBestPracticesAComprehensiveGuide,
      },
      {
        title: "Website Optimization: Ensuring a Seamless User Experience",
        desc: "Timeless web practices like responsive design, fast load speeds, and user-centric layouts to convert visitors into loyal customers.",
        icon: images212.WebsiteOptimizationEnsuringaSeamlessUserExperience,
      },
      {
        title: "Local SEO: Dominate Your Local Market",
        desc: "Optimize your Google My Business, local keywords, and citations to ensure your business ranks for nearby customers and regions.",
        icon: images212.LocalSEO,
      },
      {
        title: "Voice Search & Smart Devices Optimization",
        desc: "Optimize content for voice search and smart assistants to stay ahead as the world moves toward voice-based interactions.",
        icon: images212.VoiceSearch,
      },
    ],
  },
  {
    title: "Content & Branding",
    services: [
      {
        title: "Content Marketing Strategy: Creating Value for the Long Term",
        desc: "Develop a strategy focused on evergreen content, storytelling, and education to build brand trust and attract organic traffic for years.",
        icon: images212.ContentMarketing,
      },
      {
        title: "The Power of Branding in the Digital Age",
        desc: "Build a consistent, authentic, and visually appealing brand identity through storytelling and design that stands the test of time.",
        icon: images212.ThePowerofBrandingintheDigitalAge,
      },
      {
        title: "The Importance of Long-Form Content",
        desc: "Craft in-depth articles, whitepapers, and guides that attract backlinks, rank higher, and deliver lasting audience value.",
        icon: images212.TheImportanceofDataAnalyticsinMarketing,
      },
      {
        title: "Content Curation: Using Existing Content to Engage Audiences",
        desc: "Repurpose and curate valuable industry content to maintain engagement while positioning yourself as a thought leader.",
        icon: images212.ContentCuration,
      },
    ],
  },
  {
    title: "Social Media & Engagement",
    services: [
      {
        title: "Effective Social Media Marketing: Building Lasting Engagement",
        desc: "Maintain a strong social presence through consistency, content planning, and meaningful engagement across platforms.",
        icon: images212.EffectiveSocialMediaMarketing,
      },
      {
        title: "Influencer Marketing: How to Leverage Partnerships",
        desc: "Collaborate with authentic influencers to build brand credibility and expand your audience organically over time.",
        icon: images212.InfluencerMarketing,
      },
      {
        title: "Social Proof: Leveraging Customer Feedback and Reviews",
        desc: "Use testimonials, reviews, and client stories to establish trust and enhance credibility across digital platforms.",
        icon: images212.SocialProof,
      },
      {
        title: "Video Content: Engaging Your Audience through Storytelling",
        desc: "Create educational and emotional video campaigns for platforms like YouTube, Instagram, and your website to increase reach.",
        icon: images212.VideoContent,
      },
    ],
  },
  {
    title: "Email, Automation & Advertising",
    services: [
      {
        title: "Email Marketing That Lasts: Building and Maintaining Relationships",
        desc: "Evergreen strategies for list segmentation, automation, and personalization that keep your audience engaged and conversions high.",
        icon: images212.emailmarketing,
      },
      {
        title: "Marketing Automation: Streamlining Your Digital Efforts",
        desc: "Save time and scale smarter by automating social posts, emails, and lead nurturing while maintaining personal engagement.",
        icon: images212.MarketingAutomation,
      },
      {
        title: "Paid Media Strategy: Maximizing ROI Over Time",
        desc: "Sustainable PPC and ad strategies focused on targeting, conversion tracking, and effective budget management for long-term success.",
        icon: images212.PaidMediastrategy,
      },
      {
        title: "Digital Advertising: Maximizing Ad Spend Across Platforms",
        desc: "Build cross-platform ad strategies that optimize budgets and reach the right audience effectively.",
        icon: images212.DigitalAdvertising,
      },
    ],
  },
  {
    title: "Analytics, Growth & Conversion",
    services: [
      {
        title: "Conversion Rate Optimization: Turning Visitors into Customers",
        desc: "Improve CTAs, landing pages, and user flow to create seamless experiences that maximize lead conversion and revenue.",
        icon: images212.ConversionRate,
      },
      {
        title: "Lead Generation: Strategies for Sustained Business Growth",
        desc: "Implement evergreen tactics like gated content, webinars, and SEO-based lead funnels to build a consistent client pipeline.",
        icon: images212.LeadGeneration,
      },
      {
        title: "Integrated Digital Marketing Strategy",
        desc: "Combine SEO, content, email, and social media into one holistic system for maximum reach and measurable success.",
        icon: images212.IntegratedDigital,
      },
      {
        title: "The Importance of Data Analytics in Marketing",
        desc: "Make data-driven marketing decisions that refine strategies and improve campaign results for the long run.",
        icon: images212.TheImportanceofDataAnalyticsinMarketing,
      },
    ],
  },
  {
    title: "Design, UX & Crisis Management",
    services: [
      {
        title: "UX/UI Design in Digital Marketing",
        desc: "Design user-friendly websites and apps that combine aesthetics with function to boost engagement and conversions.",
        icon: images212.UXUIDesigninDigitalMarketing,
      },
      {
        title: "Personalization Strategies for Enhanced UX",
        desc: "Leverage personalization and dynamic content to build more meaningful interactions with your users and increase retention.",
        icon: images212.PersonalizationStrategiesforEnhancedUX,
      },
      {
        title: "Crisis Management: Protecting Your Brand Online",
        desc: "Develop proactive strategies for handling negative feedback or PR crises to safeguard your reputation online.",
        icon: images212.CrisisManagement,
      },
      {
        title: "Affiliate Marketing: Building Collaborative Success",
        desc: "Grow your reach with affiliate programs that reward partnerships and build long-term revenue streams.",
        icon: images212.AffiliateMarketing,
      },
    ],
  },
];

const Services1 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="py-20 bg-gray-50 font-publicSans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14 mt-10">
          <h6 className="text-2xl font-semibold text-gray-600">What We Offer</h6>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
            Evergreen Digital Marketing Services
          </h2>
          <p className="text-gray-600 text-md font-medium mt-4 max-w-2xl mx-auto">
            At Webpulse Digital, we focus on evergreen strategies designed to build lasting growth, engagement, and brand success in the digital world.
          </p>
        </div>

        {categories.map((cat, i) => (
          <div key={i} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-500 pl-3">
              {cat.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {cat.services.map((srv, j) => (
                <div
                  key={j}
                  className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-center mb-4">
                      <img src={srv.icon} alt={srv.title} className="w-14 h-14" />
                    </div>
                    <h5 className="text-lg font-semibold text-center text-gray-800 mb-2">
                      {srv.title}
                    </h5>
                    <p className="text-gray-600 text-sm text-center leading-relaxed mb-16">
                      {srv.desc}
                    </p>
                  </div>
                  <a
                    href="tel:+919650638829" 
                    aria-label="Call Now"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-block group"
                  >
                    <div className="relative flex items-center justify-center gap-2 bg-[#2D0E74] text-white font-semibold rounded-xl px-4 py-2 shadow-md shadow-[#2D0E74]-500/30 hover:shadow-lg hover:shadow-[#2D0E74]-500/40 transition-all duration-300 active:scale-95">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-orange-400/50 blur-md scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2 5.5A2.5 2.5 0 014.5 3h2A2.5 2.5 0 019 5.5V8a2 2 0 01-.586 1.414L7 11l6 6 1.586-1.414A2 2 0 0116 15h2.5A2.5 2.5 0 0121 17.5v2A2.5 2.5 0 0118.5 22C10.5 22 2 13.5 2 5.5z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base tracking-wide">Call Now</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default Services1;
