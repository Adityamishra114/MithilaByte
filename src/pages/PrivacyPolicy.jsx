import React, { useEffect } from "react";

export default function PrivacyPolicy() {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full bg-gray-50 min-h-screen font-publicSans sm:mt-[calc(var(--header-height,40px))] mt-[calc(var(--header-height,20px))]">
      <section className=" py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl text-black font-bold">Privacy Policy</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          At NKD AND ASSOCIATES, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal data when you interact with our services.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base text-gray-700">
          <li>Personal identification information (name, email, phone number)</li>
          <li>Payment information (credit/debit card details, transaction history)</li>
          <li>Usage data (browser type, pages visited, etc.)</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          We use your personal information to process payments, provide customer support, and improve our services. We may also send you promotional offers and updates.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Data Security</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          We implement industry-standard security measures to protect your data from unauthorized access, use, or disclosure.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          You have the right to access, update, or delete your personal data. If you have any concerns about your privacy, feel free to contact us.
        </p>
      </section>
    </div>
  );
}
