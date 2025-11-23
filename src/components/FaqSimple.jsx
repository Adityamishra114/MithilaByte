import React from "react";

const faqs = [
  // Left Column
  [
    {
      q: "DO YOU HAVE MONTHLY OR BI–ANNUAL SERVICES?",
      a: "Yes, Tradeohedge Private Limited currently offers flexible subscription plans including 3 months, 6 months, and annual durations. All our plans are structured to remain affordable while ensuring premium-quality research and trading support.",
    },
    {
      q: "CAN I EXPECT A SURE–SHOT CALL?",
      a: "No. At Tradeohedge, we rely on detailed market research, data-driven analysis, and trend-based evaluations. However, the stock market is inherently uncertain—hence, we do not provide guaranteed or sure-shot recommendations.",
    },
    {
      q: "WHO IS YOUR LEAD ANALYST?",
      a: "Tradeohedge Private Limited’s research and advisory services are managed by SEBI-registered professionals and experienced market analysts who ensure ethical and compliant research insights.",
    },
    {
      q: "DOES SEBI/NISM REGISTRATION ENSURE PERFORMANCE?",
      a: "No. SEBI or NISM registration ensures ethical standards and regulatory compliance, but it does not guarantee any performance, profits, or assured returns on investments.",
    },
  ],

  // Right Column
  [
    {
      q: "HOW MUCH CAPITAL IS NEEDED TO TRADE YOUR RECOMMENDATIONS?",
      a: "We do not enforce a fixed minimum capital. We recommend that clients maintain consistent position sizing and risk management suited to their financial capacity and trading style.",
    },
    {
      q: "CAN I SHARE YOUR RECOMMENDATIONS WITH OTHERS?",
      a: "No. The subscription and research reports from Tradeohedge Private Limited are intended strictly for personal use. Redistribution or sharing without written consent is a violation of our terms and SEBI compliance guidelines.",
    },
    {
      q: "DO YOU OFFER REFUNDS OR MONEY-BACK GUARANTEES?",
      a: "Tradeohedge Private Limited does not provide refunds or money-back guarantees. We deliver well-researched trade ideas, but due to market volatility, we cannot commit to guaranteed performance.",
    },
  ],
];


function QA({ q, a }) {
  return (
    <div>
      <h4 className="text-[20px] sm:text-[20px] font-extrabold tracking-wide text-gray-800 uppercase">
        {q}
      </h4>
      <p className="mt-2 text-[16px] sm:text-[16px] font-semibold leading-7 text-gray-600">
        {a}
      </p>
    </div>
  );
}

export default function FaqSimple() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[24px] sm:text-[28px] md:text-[42px] front-extrabold font-black text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[18px] sm:text-[18px] font-semibold text-gray-600">
            Here is the list of questions generally asked by people. Hope you find your answer here.
            If not feel free to contact us at <span className="font-semibold">+91 919435086282</span>.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
          {faqs.map((col, i) => (
            <div key={i} className="grid gap-8">
              {col.map((item, idx) => (
                <QA key={idx} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
