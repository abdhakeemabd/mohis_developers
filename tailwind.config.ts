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
        navy: {
          DEFAULT: "#001F3F",
          50: "#e6f0fa",
          100: "#cce0f5",
          800: "#002852",
          900: "#001F3F",
          950: "#001328",
        },
        gold: {
          DEFAULT: "#C5A059",
          light: "#D4B475",
          dark: "#A47F3B",
          50: "#fbf8f1",
          100: "#f4eddb",
          500: "#C5A059",
        },
      },
      backgroundImage: {
        'blueprint-pattern': "radial-gradient(circle, rgba(0, 31, 63, 0.07) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
