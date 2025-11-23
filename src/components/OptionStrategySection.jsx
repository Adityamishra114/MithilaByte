import React from "react";

export default function OptionStrategySection({
  steps = [
    {
      img: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop",
      title: "Step 1: Directional view",
      desc:
        "We assess the current trend of the stock / index. This helps us to know the probability of price direction for the given time frame.",
    },
    {
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
      title: "Step 2: Evaluate Instruments",
      desc:
        "Depending upon direction and duration, we choose the right derivative instruments. Such as futures, call and put options.",
    },
    {
      img: "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1200&auto=format&fit=crop",
      title: "Step 3: Optimize the returns",
      desc:
        "The right combination of options can optimize returns for the risk taken. Here we find the strike price to buy and sell.",
    },
  ],
}) {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-2xl font-extrabold tracking-[0.18em] text-slate-500 uppercase">
            What we do
          </p>
          <div className="mt-2 h-[2px] w-40 bg-emerald-500" />
        </div>
        <h2 className="mt-6 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-slate-900">
          We provide an option strategy
          <br className="hidden sm:block" />
          with high returns for the risk
          <br className="hidden sm:block" />
          taken
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <article key={i} className="max-w-prose">
              <div className="overflow-hidden rounded-sm ring-1 ring-black/10 bg-white">
                <img
                  src={s.img}
                  alt=""
                  className="w-full aspect-[16/9] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3 className="mt-6 text-xl sm:text-lg font-extrabold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-3 text-xl sm:text-lg font-semibold leading-7 text-slate-600">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
