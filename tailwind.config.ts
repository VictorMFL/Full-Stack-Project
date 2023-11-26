import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        text: "#FAFAFA",
        secondary: "#F5F5F5",
        secondary2: "#DB4444",
        black: "#000",
        button01: "#00FF66"
      },
    },
  },
  plugins: [],
};
export default config;
