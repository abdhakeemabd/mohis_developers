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
          DEFAULT: "#081628",
          50: "#f0f4f9",
          100: "#dbe5f2",
          800: "#0b203c",
          900: "#081628",
          950: "#030a14",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F3E5AB",
          dark: "#996515",
          50: "#fdfbf5",
          100: "#f8f2de",
          500: "#D4AF37",
          600: "#B89228",
        },
        emeraldAcc: {
          DEFAULT: "#10b981",
          light: "#34d399",
        }
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'navy-glow': '0 0 30px -5px rgba(8, 22, 40, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
        'glass-hover': '0 20px 40px 0 rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'blueprint-pattern': "radial-gradient(circle, rgba(212, 175, 55, 0.08) 1px, transparent 1px)",
        'gold-gradient': "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #996515 100%)",
        'navy-card-gradient': "linear-gradient(145deg, rgba(11, 32, 60, 0.9) 0%, rgba(3, 10, 20, 0.95) 100%)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
