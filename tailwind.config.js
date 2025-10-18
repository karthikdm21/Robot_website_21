/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#0e0e0e',
        'space-blue': '#0a0f1f',
        'soft-white': '#f2f2f2',
        'neon-aqua': '#00ffe5',
        'electric-blue': '#1f8fff',
        'cyber-mint': '#2efec8',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
} 