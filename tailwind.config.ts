import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pumpkin: {
          50: "#fdf3ec",
          100: "#fbe3d3",
          200: "#f5c3a3",
          300: "#ec9d6d",
          400: "#dd7843",
          500: "#c25e2e",
          600: "#a34a22",
          700: "#7e3a1c",
          800: "#55291a",
          900: "#331a10",
        },
        sage: {
          DEFAULT: "#5a6b4f",
          dark: "#45543c",
          light: "#e8ece2",
        },
        honey: "#d9a441",
        caramel: {
          DEFAULT: "#d98a2b",
          dark: "#b06d1d",
          light: "#fdf0dc",
        },
        ivory: "#fdf8f0",
        sand: "#f6ecdd",
        blush: "#f3d9d7",
        amberstar: "#e8a33d",
        ink: "#2e2118",
        muted: "#6b5a4e",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
