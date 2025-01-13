/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        grid: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 -200%' },
        }
      },
      animation: {
        glimmer: 'glimmer 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        grid: 'grid 3s linear infinite',
      },
    },
  },
  plugins: [],
}
