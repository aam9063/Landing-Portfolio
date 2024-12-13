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
        secondary: "#52b788",
        darkBg: "#1c1c1c",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(28, 30, 30, 0.8) -5.91%, rgba(28, 30, 30, 0.8) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
