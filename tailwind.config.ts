import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#111111",
        darkGray: "#333333",
        lightGray: "#B9B9B9",
        primaryWhite: "#FEFEFE",
      },
      fontFamily: {
        saira: ["Saira Extra Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
