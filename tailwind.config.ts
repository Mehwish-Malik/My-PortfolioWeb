import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    ".//src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ".//src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0E27",
        foreground: "#FFFFFF",
        surface: {
          DEFAULT: "#111827",
          soft: "#1A1F36",
          card: "#141B2D",
        },
        primary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        secondary: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
        },
        accent: {
          DEFAULT: "#E5E7EB",
          muted: "#9CA3AF",
          subtle: "#6B7280",
        },
        border: {
          DEFAULT: "rgba(139, 92, 246, 0.1)",
          light: "rgba(139, 92, 246, 0.2)",
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in-slow': 'fadeIn 1s ease-out',
        'slide-up-slow': 'slideUp 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(169, 120, 244, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(169, 120, 244, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-slow': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up-slow': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(#A978F4 1px, transparent 1px), linear-gradient(90deg, #A978F4 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },

  plugins: [],
};

export default config;