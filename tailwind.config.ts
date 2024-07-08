import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", 'sans-serif'],
        aeonik: ['"Aeonik Pro"', 'sans-serif']
      },
      backgroundImage: {
        "hero-pattern": "url('../../public/images/bg1.png')"
      },
    },
  },
  plugins: [
    function ({addUtilities}: any) {
      addUtilities([{
        '.no-scrollbar': {
          'scrollbar-width': 'none',
        }
      }])
    }
  ],
};
export default config;
