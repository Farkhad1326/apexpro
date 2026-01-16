const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class", // Aceternity UI üçün bu mütləqdir
  theme: {
    extend: {
      // 1. Bizim Xüsusi Rənglər
      colors: {
        'neon-green': '#D4F458', // Sənin əsas Lime rəngin
        'accent': '#D4F458',     // Eyni rəng (alternativ ad)
      },

      // 2. Xüsusi Animasiyalar
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Çox yavaş yanib-sönmə (Fon üçün)
        'slow-zoom': 'zoom 20s infinite alternate', // Yavaşca yaxınlaşma (Hero şəkilləri üçün)
        'in': 'fadeIn 0.5s ease-out', // Səhifə açılanda elementlərin gəlişi
        "meteor-effect": "meteor 5s linear infinite", // Meteor effekti üçün
        // YENİ ƏLAVƏLƏR: Pulsating, Shiny, Gradient, Sparkle, FadeInOut animasiyaları
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shine: 'shine 1s linear infinite',
        gradient: 'gradient 3s ease infinite',
        sparkle: 'sparkle 1s ease-in-out infinite',
        fadeInOut: 'fadeInOut 3s ease-in-out infinite',
      },

      // 3. Animasiya Qaydaları (Keyframes)
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // YENİ ƏLAVƏ: Meteorun hərəkət trayektoriyası
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        // YENİ ƏLAVƏLƏR: Pulsating, Shiny, Gradient, Sparkle, FadeInOut keyframes
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        sparkle: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0)' },
        },
        fadeInOut: {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [
    // Aceternity UI rəng dəyişənlərini yaradan plugin
    addVariablesForColors,
  ],
};

// --- Helper Function ---
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}