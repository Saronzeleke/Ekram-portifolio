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
   puple:{
  50: '#f3e5ff',  // Very light purple
  100: '#e1c2ff', // Pastel purple
  200: '#c79eff', // Soft purple
  300: '#ad7bff', // Medium light purple
  400: '#9359ff', // Vibrant purple
  500: '#7a36ff', // Primary purple (strong)
  600: '#6000ff', // Deep purple
  700: '#4d00cc', // Dark purple
  800: '#3a0099', // Very dark purple
  900: '#260066', // Near-black purple
  950: '#130033', // Almost black with purple undertone
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