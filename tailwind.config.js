/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
         "press-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "spin-20": "spinSlow 20s linear infinite",
        "press-marquee": "press-marquee 28s linear infinite",
      },
       backgroundImage: {
        'btn-orange': 'linear-gradient(180deg, #ff6f37, #ff603c)',
        'home-page-gradient': 'linear-gradient(200deg, #1f2127 -5.65%, #6545d7 45.63%, #27253a 97.6%)',
        'home-hover':' background: linear-gradient(180deg, #1f2127 -5.65%, #34247d 45.63%, #804494 97.6%);',
        btnOrangeGradient: "linear-gradient(180deg, #ff6f37, #ff603c)",
      },
      boxShadow: {
        btnOrange: "0 8px 24px rgba(255, 111, 55, 0.25)",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        figtree: ["Figtree", "system-ui", "sans-serif"],
         openSans: ['Open Sans', 'sans-serif'],
         grotesque: ['"Darker Grotesque"', "Helvetica", "Arial", "Lucida", "sans-serif"],
        sans:['"Darker Grotesque"', "Helvetica", "Arial", "Lucida", "sans-serif"],
         publicSans: ['"Public Sans"', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        menu:"var(--color-menucolor)",
        greytext: "#6D6D6D",
        exploreHeading: "#8938F7",
      },
    },
  },
  plugins: [],
}

