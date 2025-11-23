import React, { useEffect, useState } from "react";
import { image } from "../../data";

export default function IntradayHero({
    onSubscribe = () => { },
    artSrc = image?.tips,
}) {
    const [imgIn, setImgIn] = useState(false);
    useEffect(() => {
        const id = requestAnimationFrame(() => setImgIn(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#222] text-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <p className="text-lg sm:text-xl font-extrabold tracking-[0.12em] text-gray-300 uppercase">
                            An active stock trader can
                        </p>

                        <h1 className="mt-3 text-[34px] sm:text-[42px] md:text-[48px] leading-[1.1] font-black tracking-tight">
                            Find a Next Intraday Stock Tips
                        </h1>

                        <p className="mt-5 text-[18px] sm:text-[20px] font-bold leading-7 text-gray-300/90 max-w-xl">
                            Here you get a stock that is good for intraday buy and sells.
                            Traders can save time and money with us.
                        </p>

                        <div className="mt-8">
                            <button
                                onClick={onSubscribe}
                                className="inline-flex items-center rounded-full px-6 sm:px-7 py-3 text-sm font-extrabold
                           text-white shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                           focus-visible:ring-sky-400 focus-visible:ring-offset-[#222]
                           bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500"
                                aria-label="Subscribe now"
                            >
                                SUBSCRIBE NOW
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-6 -top-6 hidden sm:block h-24 w-24 rounded bg-white/5" />
                        <div
                            className={[
                                "relative mx-auto w-full max-w-[560px] rounded-md ring-1 ring-white/10",
                                "transition-all duration-700 ease-out",
                                imgIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
                            ].join(" ")}
                        >
                            <img
                                src={artSrc}
                                alt="Person working on laptop with intraday icons"
                                className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] object-cover rounded-md"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* torn/wave bottom edge */}
            {/* <svg
        className="absolute bottom-0 left-0 w-full translate-y-[1px]"
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 60l80 6.7C160 73 320 87 480 80c160-7 320-47 480-47s320 40 400 47l80 6.7V0H0v60z"
          fill="#fff"
        />
      </svg> */}
        </section>
    );
}
