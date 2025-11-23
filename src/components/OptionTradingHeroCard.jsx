export default function OptionTradingHeroCard({
  eyebrow = "Get Started",
  title = "What makes option trading unique?",
  para1 =
    "Futures and options are smarter ways to optimize the risk adjusted returns. With the right combination of call and put options trader can increase the returns for the same risk.",
  subTitle = "In a simple words",
  para2 =
    "Here we may not be right in every attempt, but whenever we are right, we try to make more than 2 to 3 times of the risk taken.",
  ctaLabel = "Try Now",
  onCta = () => {},
  bgImage =
    "https://images.unsplash.com/photo-1536305030430-ecfa154416ab?auto=format&fit=crop&w=1400&q=60",
}) {
  return (
    <section className="relative bg-white py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded md:rounded-none lg:rounded-none bg-[#44758c] text-white">
          <div
            aria-hidden
            className="absolute inset-0 bg-center bg-cover opacity-15"
            style={{ backgroundImage: `url(${bgImage})` }}
          />

          <div className="relative px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-16">
            <div className="max-w-2xl">
              <p className="text-2xl sm:text-lg font-semibold tracking-[0.25em] text-teal-200 uppercase">
                {eyebrow}
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                {title}
              </h2>

              <p className="mt-4 text-2xl sm:text-3xl md:text-lg text-teal-50/90 leading-relaxed">
                {para1}
              </p>

              <h3 className="mt-6 text-2xl sm:text-3xl font-semibold">{subTitle}</h3>

              <p className="mt-2 text-2xl sm:text-3xl md:text-lg text-teal-50/90 leading-relaxed">
                {para2}
              </p>

              <div className="mt-6">
                <button
                  onClick={onCta}
                  className="inline-block bg-emerald-400 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide px-6 py-3 rounded shadow-md transition-colors duration-200"
                  type="button"
                >
                  {ctaLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
