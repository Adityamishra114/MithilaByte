import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";


const Bullet = ({ children }) => (
  <li className="flex items-start gap-2">
    <CheckBadgeIcon className="h-5 w-5 shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

const StockCourseSection = ({
  title = "Stock Market Course",
  intro = (
    <>
      Join our 6-week share market course in Chennai. Enjoy flexible timings with
      English and Tamil batches.{" "}
      <a
        href="#schedules"
        className="underline text-blue-400 hover:text-blue-300"
      >
        Check for course details and available schedules.
      </a>
    </>
  ),
  course = {
    heading: "Mastering Stock Trading – MST",
    subLinkText: "Basics to Advance",
    subLinkHref: "#details",
    description:
      "Master the art of stock trading through personalized one-on-one sessions and structured learning. In-depth course curriculum covering share market basics, technical analysis, intraday analysis, and futures and options.",
  },
  workshop = {
    tag: "6 Weeks Workshop",
    bullets: ["Classroom Mode", "Online Mode", "Weekdays Batch", "Weekends Batch"],
  },
  illustration,
  onEnquire = () => {},
}) => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-center text-xl sm:text-xl font-bold leading-relaxed">
          {intro}
        </p>
        <div className="mt-8 sm:mt-10 rounded-lg bg-white text-gray-900 shadow-lg ring-1 ring-black/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8">
            <div className="flex items-center justify-center">
              <img
                src={
                  illustration ||
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format" 
                }
                alt="Stock trading illustration"
                className="w-full max-w-[320px] h-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-1">
              <h3 className="text-xl sm:text-2xl font-extrabold">
                {course.heading}
              </h3>
              <a
                href={course.subLinkHref}
                className="mt-2 inline-block text-primary text-2xl font-bold "
              >
                {course.subLinkText}
              </a>
              <p className="mt-3 text-gray-700 font-bold text-lg leading-relaxed">
                {course.description}
              </p>
            </div>
            <div className="flex flex-col justify-between md:items-end">
              <div className="md:text-right">
                <p className="text-blue-700 font-bold text-xl">
                  {workshop.tag}
                </p>
                <ul className="mt-3 space-y-2 text-gray-800">
                  {workshop.bullets.map((b, i) => (
                    <Bullet key={i}>{b}</Bullet>
                  ))}
                </ul>
              </div>

              <button
                onClick={onEnquire}
                className="mt-6 md:mt-8 inline-flex justify-center items-center rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-widest px-6 py-3 transition-colors"
              >
                ENQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockCourseSection;
