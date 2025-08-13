/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
   gold: {
          50:  '#fff3cf',
          100: '#ffe7a0',
          200: '#9bf732ff',
          300: '#a30a96c9',
          400: '#a30a96c9',
          500: '#a30a96c9',
          600: '#a30a96c9',
          700: '#a30a96c9',
          800: '#a30a96c9',
          900: '#a30a96c9',
          950: '#a30a96c9',
        },

      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
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
      },
    },
  },
  plugins: [],
}