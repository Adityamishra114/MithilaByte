// EnquirySection.jsx
import React from "react";
import {
  UserIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

function LabeledInput({ icon: Icon, label, type = "text", name, required }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <div className="flex items-center gap-3">
        <Icon className="h-10 w-10 text-gray-500 shrink-0" aria-hidden="true" />
        <div className="flex-1 border-b  border-gray-300 focus-within:border-blue-600">
          <input
            type={type}
            name={name}
            required={required}
            placeholder={label}
            className="w-full bg-transparent py-3  outline-none text-xl md:text-2xl placeholder:text-gray-400"
          />
        </div>
      </div>
    </label>
  );
}

function InfoCard({ title, children }) {
  return (
    <article className="rounded-lg bg-white shadow ring-1 ring-black/5 overflow-hidden">
      <div className="h-1.5 bg-blue-600 w-15" />
      <div className="p-6 text-center">
        <h4 className="font-extrabold  text-gray-800">{title}</h4>
        <p className="mt-3 text-xl font-semibold leading-6 text-gray-600">{children}</p>
      </div>
    </article>
  );
}

export default function EnquirySection() {
  return (
    <section
      id="enquiry"
      className="relative overflow-hidden "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="text-center ">
          <h2 className="text-3xl sm:text-3xl md:text-[44px] leading-[2] font-black text-gray-900">
            Enquiry Now
          </h2>
          <p className="mt-3 text-3xl font-bold  sm:text-xl text-gray-600">
            Please fill out the contact form below for details on our course. We’ll send you the
            course details promptly.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8">
          <div className="rounded-lg bg-white shadow ring-1  ring-black/5 p-6 sm:p-7 md:p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Submitted!");
              }}
              className="space-y-6 "
            >
              <LabeledInput icon={UserIcon} label="Name" name="name" required />
              <LabeledInput
                icon={EnvelopeIcon}
                label="Email Address"
                name="email"
                type="email"
                required
              />
              <LabeledInput
                icon={DevicePhoneMobileIcon}
                label="Phone Number"
                name="phone"
                type="tel"
                required
              />

              <div>
                <p className="text-xl font-semibold text-gray-700">
                  How can we assist you? <span className="text-blue-600">*</span>
                </p>
                <div className="mt-3 grid gap-3">
                  {[
                    "I would like more information about the course",
                    "I would like to speak/chat with the event organizer",
                    "I am ready to register for the workshop",
                    "Other",
                  ].map((label, i) => (
                    <label key={i} className="flex text-xl font-semibold text-gray-700 items-center gap-3">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        name="assist[]"
                        value={label}
                      />
                      <span className="text-xl font-semibold text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-extrabold text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          <div className="grid gap-5 content-start text-3xl font-semibold text-gray-700">
            <InfoCard title="Request More Info">
              Fill out our enquiry form to have our team explain the process of getting started with
              our share market training.
            </InfoCard>

            <InfoCard title="Can’t wait? Talk to us">
              Contact us at <span className="font-semibold">+91 9500077790</span> for personalized
              trading courses.
            </InfoCard>

            <InfoCard title="Visit our Chennai campus">
              # 6 / 11, 3rd Cross Street, Trustpuram, Kodambakkam, Chennai – 600024, INDIA
              <br />
              <a
                href="https://maps.google.com"
                className="mt-2 inline-block text-blue-700 font-semibold underline underline-offset-4"
              >
                Find us in Google Map
              </a>
            </InfoCard>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 top-1/3 h-[60%]
                   bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)]"
      />
    </section>
  );
}
