
const PLANS = [
  {
    title: "10 Weeks",
    saveLine: "Save 20% (Save Rs.1000)",
    highlight: false,
    blurb: "This is good for two to three months.",
    descTitle: "Description",
    desc: "You get 1 Index option strategy per week for 10 weeks.",
    price: "Rs.4000 / 10 Weeks",
  },
  {
    title: "40 Weeks",
    saveLine: "SAVE 50% (VALUE PACK)",
    highlight: true,
    blurb: "This is good for one year.",
    descTitle: "Description",
    desc: "You get 1 Index option strategy per week for 40 weeks.",
    price: "Rs.10000 / 40 Weeks",
  },
];

export default function PricingPlans() {
  return (
    <section className="relative bg-white">
      <div aria-hidden className="pointer-events-none absolute -top-28 -left-28 h-56 w-56 rounded-full bg-slate-300/50" />
      <div aria-hidden className="pointer-events-none absolute -top-28 -right-28 h-56 w-56 rounded-full bg-slate-300/50" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-3xl  tracking-[0.35em] font-extrabold text-slate-700 uppercase">Pricing</h2>
          <div className="mt-2 flex justify-center">
            <span className="h-0.5 w-12 bg-yellow-400 rounded" />
          </div>
          <p className="mt-4 max-w-3xl text-xl sm:text-lg font-bold mx-auto text-slate-600">
            Together we make it better. This deal will substantially reduce the advisory cost in your trading.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PLANS.map((p) => (
            <article key={p.title} className="border border-slate-800/80 rounded-sm p-6 sm:p-8 shadow-sm bg-white">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{p.title}</h3>

              <p className={`mt-2 text-xl sm:text-lg font-bold tracking-wide ${p.highlight ? "text-orange-600" : "text-slate-700"}`}>
                {p.saveLine}
              </p>
              <span className="mt-2 block h-0.5 w-10 bg-yellow-400 rounded" />

              <p className="mt-4 text-slate-600 text-xl sm:text-lg font-semibold ">{p.blurb}</p>

              <p className="mt-6 text-slate-800 text-xl sm:text-lg font-bold">{p.descTitle}</p>
              <p className="mt-2 text-xl sm:text-lg font-semibold text-slate-600">{p.desc}</p>

              <div className="mt-8">
                <button
                  type="button"
                  className="inline-block border-2 border-slate-800 text-slate-900 rounded px-6 py-3 text-2xl sm:text-lg font-semibold tracking-wide hover:bg-slate-900 hover:text-white transition-colors"
                >
                  {p.price}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Decorative bottom circle */}
      <div aria-hidden className="pointer-events-none absolute -bottom-28 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-slate-300/50" />
    </section>
  );
}
