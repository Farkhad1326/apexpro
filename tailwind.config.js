/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        }
      }
    },
  },
  plugins: [],
}