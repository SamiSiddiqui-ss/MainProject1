/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-out': {
          '0%, 25%, 75%, 100%': { opacity: '0' },
          '10%, 60%': { opacity: '1' },   
         }
      },
      animation: {
        'fade-in-out': 'fade-in-out 5s infinite', // Adjust the duration to 4s for two 1s animations with gaps
      },
    },
  },
  plugins: [],
}
