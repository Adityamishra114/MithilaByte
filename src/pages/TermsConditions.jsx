import React, { useEffect } from "react";

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-gray-50 min-h-screen font-publicSans sm:mt-[calc(var(--header-height,60px))] mt-[calc(var(--header-height,20px))]">
      <section className="py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Terms and Conditions</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          These Terms and Conditions govern your use of our website, services, and solutions. 
          By accessing or using MithilaByte Technologies services, you agree to comply with and be 
          bound by these terms.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Services Provided</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          MithilaByte Technologies provides a range of digital services including website development,
          mobile apps, CRM solutions, digital marketing, branding, and other technology-driven services. 
          The scope of work may vary based on the service plan or agreement signed by the client.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">User Responsibilities</h2>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base text-gray-700">
          <li>Users shall not misuse our services for unlawful or harmful purposes.</li>
          <li>You are responsible for ensuring the accuracy of information shared with us.</li>
          <li>
            You must comply with all applicable laws and regulations while using MithilaByte Technologies services.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Project & Payment Terms</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          All services are subject to pricing agreements and timelines discussed prior to project initiation. 
          Advance payment is mandatory to start a project. Refunds, cancellations, and delivery terms shall 
          follow the agreement signed with the client or as specified in service policies.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          MithilaByte Technologies will not be held liable for any direct, indirect, incidental, or consequential 
          damages arising from the use or inability to use our services. Clients are responsible for 
          ensuring the use and maintenance of their digital assets.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Changes to Terms</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          We reserve the right to modify or update these Terms and Conditions at any time. 
          You are encouraged to review this page periodically to stay informed about changes.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Governing Law</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          These Terms and Conditions are governed by the laws of India. 
          Any disputes shall be subject to the jurisdiction of courts located in New Delhi, India.
        </p>
      </section>
    </div>
  );
}
