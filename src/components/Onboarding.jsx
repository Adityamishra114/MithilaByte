import {image} from "../../data"

export default function OnboardingCompliance() {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="grid items-start gap-10 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Onboarding & Compliance Process
                        </h2>
                        <p className="mt-3 text-slate-600 text-xl sm:text-lg font-semibold leading-7 max-w-2xl">
                            To comply with SEBI guidelines for Research Analysts, we follow a
                            transparent onboarding process to safeguard your interests.
                        </p>

                        <ol className="mt-8 space-y-8">
                            <li>
                                <p className="font-extrabold text-xl sm:text-lg uppercase tracking-wide text-slate-800 ">
                                    Step 1: Initial Sign–Up & Payment
                                </p>
                                <p className="mt-2 text-slate-600 font-semibold text-xl sm:text-lg">
                                    You may express interest and make payment by providing your basic details:
                                </p>
                                <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700 marker:text-slate-400 font-semibold text-xl sm:text-lg">
                                    <li>Name</li>
                                    <li>Email</li>
                                    <li>Phone number</li>
                                </ul>
                            </li>
                            <li>
                                <p className="font-extrabold text-xl sm:text-lg uppercase tracking-wide text-slate-800 ">
                                    Step 2: KYC (Know Your Customer)
                                </p>
                                <p className="mt-2 text-slate-600 font-semibold text-xl sm:text-lg">
                                    After payment, we will collect mandatory KYC details as per SEBI regulations:
                                </p>
                                <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700 marker:text-slate-400 font-semibold text-xl sm:text-lg">
                                    <li>Full Name (as per Aadhaar)</li>
                                    <li>PAN Number</li>
                                    <li>Aadhaar Number</li>
                                    <li>Permanent Address</li>
                                </ul>
                            </li>
                            <li>
                                <p className="font-extrabold text-xl sm:text-lg uppercase tracking-wide text-slate-800 ">
                                    Step 3: Terms & Conditions (MITC)
                                </p>
                                <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700 marker:text-slate-400 font-semibold text-xl sm:text-lg">
                                    <li>
                                        You will receive SEBI&apos;s Most Important Terms & Conditions (MITC)
                                        document by email.
                                    </li>
                                    <li>The document must be digitally signed before services can begin.</li>
                                </ul>
                            </li>
                            <li>
                                <p className="font-extrabold text-xl sm:text-lg uppercase tracking-wide text-slate-800 ">
                                    Step 4: Service Activation
                                </p>
                                <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700 marker:text-slate-400 font-semibold text-xl sm:text-lg">
                                    <li>
                                        Once the signed MITC is received, your research services will be activated.
                                    </li>
                                    <li>
                                        All interactions will be recorded and maintained securely as per SEBI norms.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        {/* <Illustration className="w-full h-auto" /> */}
                        <img
                            src={image?.stocktips}
                            alt="Person working on laptop with intraday icons"
                            className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] object-cover rounded-md"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// function Illustration({ className = "" }) {
//   return (
//     <svg
//       viewBox="0 0 760 520"
//       role="img"
//       aria-label="People reviewing onboarding emails"
//       className={className}
//     >
//       <defs>
//         <linearGradient id="g1" x1="0" x2="1">
//           <stop offset="0%" stopColor="#EEF2FF" />
//           <stop offset="100%" stopColor="#F8FAFC" />
//         </linearGradient>
//       </defs>
//       <rect x="0" y="0" width="760" height="520" fill="url(#g1)" />
//       <rect x="80" y="70" width="260" height="330" rx="8" fill="#ffffff" stroke="#E5E7EB" />
//       <rect x="95" y="100" width="230" height="16" rx="4" fill="#E5E7EB" />
//       <rect x="95" y="130" width="180" height="12" rx="4" fill="#E5E7EB" />
//       <rect x="95" y="155" width="200" height="12" rx="4" fill="#E5E7EB" />
//       <rect x="420" y="60" width="260" height="330" rx="8" fill="#ffffff" stroke="#E5E7EB" />
//       <rect x="435" y="90" width="230" height="16" rx="4" fill="#E5E7EB" />
//       <rect x="435" y="120" width="190" height="12" rx="4" fill="#E5E7EB" />
//       <rect x="435" y="145" width="210" height="12" rx="4" fill="#E5E7EB" />
//       <circle cx="355" cy="210" r="54" fill="#C7D2FE" />
//       <rect x="320" y="260" width="70" height="120" rx="16" fill="#3730A3" />
//       <rect x="305" y="375" width="100" height="18" rx="9" fill="#CBD5E1" />
//       <circle cx="560" cy="230" r="50" fill="#A7F3D0" />
//       <rect x="525" y="280" width="70" height="120" rx="16" fill="#0F766E" />
//       <rect x="515" y="395" width="92" height="18" rx="9" fill="#CBD5E1" />
//       <rect x="360" y="120" width="120" height="80" rx="8" fill="#F1F5F9" stroke="#E2E8F0" />
//       <path d="M360 120 L420 160 L480 120" fill="none" stroke="#CBD5E1" strokeWidth="2" />
//     </svg>
//   );
// }
