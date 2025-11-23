import React from "react";

// const RibbonNew = () => (
//   <div className="absolute -right-1 -top-1">
//     <div className="relative">
//       <span className="absolute -right-10 -top-10 rotate-45 bg-teal-800 text-amber-200 text-xs font-black tracking-wider px-10 py-1 rounded-sm shadow">
//         NEW
//       </span>
//     </div>
//   </div>
// );

const DurationTag = ({ label, color = "bg-amber-500" }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-sm text-white text-[12px] font-extrabold ${color}`}>
    {label}
  </span>
);

const CornerBanner = ({ label, color = "bg-red-600" }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-sm text-white text-[12px] font-extrabold ${color}`}>
    {label}
  </span>
);

const DatePill = ({ day, month, subtext, accent = "bg-orange-500/80" }) => (
  <div className="flex items-center gap-3">
    <span className="h-8 w-1.5 rounded-full bg-black/10" />
    <div className="relative">
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-8 w-1 rounded bg-black/10" />
      <div className="flex items-center gap-3">
        <div className="relative">
          <span className={`absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-1 rounded ${accent}`} />
          <div className="h-10 w-10 rounded-full bg-white shadow ring-1 ring-black/5 grid place-items-center">
            <span className="font-extrabold">{day}</span>
          </div>
        </div>
        <div className="leading-tight">
          <p className="font-extrabold text-[15px]">{month}</p>
          {subtext && <p className="text-[12px] text-rose-600/80 font-semibold">{subtext}</p>}
        </div>
      </div>
    </div>
  </div>
);

const Dot = () => <span className="inline-block h-1.5 w-1.5 rounded-full bg-black/70 mr-2" />;

const Row = ({ left, right }) => (
  <div className="grid grid-cols-2 gap-4">
    <div className="text-[13px] font-extrabold text-black/80"><Dot />{left}</div>
    <div className="text-[13px] font-extrabold text-black/80"><Dot />{right}</div>
  </div>
);

const ScheduleItem = ({
  day,
  month,
  subtext,
  durationBadge,
  durationColor,
  cornerLabel,
  cornerColor,
  rowsTop = [],
  rowsBottom = [],
  accent = "bg-orange-500/80",
}) => (
  <div className="rounded-xl bg-white/95 shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-2xl font-bold ring-1 ring-black/5 p-4 sm:p-5">
    <div className="flex items-center justify-between">
      <DatePill day={day} month={month} subtext={subtext} accent={accent} />
      <div className="flex items-center gap-2">
        {cornerLabel && <CornerBanner color={cornerColor} label={cornerLabel} />}
        {durationBadge && <DurationTag color={durationColor} label={durationBadge} />}
      </div>
    </div>
    <div className="mt-4 grid gap-2">
      {rowsTop.map((r, idx) => <Row key={`t-${idx}`} left={r[0]} right={r[1]} />)}
    </div>
    <div className="mt-4 h-[1px] w-full bg-black/5" />

    <div className="mt-3 grid gap-2">
      {rowsBottom.map((r, idx) => <Row key={`b-${idx}`} left={r[0]} right={r[1]} />)}
    </div>
  </div>
);

export default function ScheduleSection() {
  const weekdays = [
    {
      day: "02",
      month: "October",
      subtext: "Thursday – (Vijayadashami)",
      durationBadge: "6 Weeks",
      durationColor: "bg-amber-500",
      cornerLabel: null,
      cornerColor: "bg-red-600",
      accent: "bg-orange-500/80",
      rowsTop: [
        ["09:00AM", "03:00PM"],
        ["10:30AM", "04:30PM"],
      ],
      rowsBottom: [
        ["Online", "8 Weeks"], 
        ["Classroom", "3 Hours/Day"],
      ],
    },
    {
      day: "06",
      month: "October",
      subtext: "Monday",
      durationBadge: "6 Weeks",
      durationColor: "bg-indigo-500",
      cornerLabel: null,
      cornerColor: "bg-red-600",
      accent: "bg-indigo-500/80",
      rowsTop: [
        ["09:00AM", "03:00PM"],
        ["10:30AM", "04:30PM"],
      ],
      rowsBottom: [
        ["Online", "—"],
        ["Classroom", "—"],
      ],
    },
  ];

  const weekends = [
    {
      day: "11",
      month: "October",
      subtext: "Saturday",
      durationBadge: null,
      cornerLabel: "Sat & Sun",
      cornerColor: "bg-red-600",
      accent: "bg-pink-400/80",
      rowsTop: [
        ["09:00AM", "Online"],
        ["10:30AM", "Classroom"],
      ],
      rowsBottom: [
        ["8 Weeks", "3 Hours/Day"],
      ],
    },
    {
      day: "26",
      month: "October",
      subtext: "Sunday",
      durationBadge: null,
      cornerLabel: "Sunday Only",
      cornerColor: "bg-red-600",
      accent: "bg-indigo-500/80",
      rowsTop: [
        ["09:00AM – 12:30PM", ""],
        ["10:00AM – 01:30PM", ""],
      ],
      rowsBottom: [
        ["3 Months", "3 Hours/Day"],
      ],
    },
  ];

  return (
    <section
      className="relative overflow-hidden"
      id="schedules"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center ">
          <h2 className="text-[28px] sm:text-[34px] font-grotesque md:text-[48px] font-black text-gray-900">
            Upcoming Batch Schedules
          </h2>
          <p className="mt-3 text-[14px] font-grotesque font-semibold sm:text-[15px] md:text-[20px] text-gray-600">
            Check our 6-week Share Market Course in Chennai. Choose <span className="font-bold">online or classroom</span> training with flexible <span className="font-bold">weekday and weekend</span> options.
            <br className="hidden sm:block" /> Available in <span className="font-bold">English and Tamil</span>
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-xl bg-neutral-100 p-6 sm:p-8 ring-1 ring-black/5">
            {/* <RibbonNew /> */}
            <h3 className="text-2xl sm:text-[26px] font-black text-gray-900 mb-5">Weekdays Batches</h3>
            <div className="grid gap-5">
              {weekdays.map((it, idx) => (
                <ScheduleItem key={idx} {...it} />
              ))}
            </div>
          </div>
          <div className="relative rounded-xl bg-neutral-100 p-6 sm:p-8 ring-1 ring-black/5">
            {/* <RibbonNew /> */}
            <h3 className="text-2xl sm:text-[26px] font-black text-gray-900 mb-5">Weekends Batches</h3>
            <div className="grid gap-5">
              {weekends.map((it, idx) => (
                <ScheduleItem key={idx} {...it} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 top-[15%] h-[70%]
                   bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)]"
      />
    </section>
  );
}
