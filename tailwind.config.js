/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#29ABE2',
        secondary: '#FFFFFF',
        accent: '#FFDA63',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
      },
      boxShadow: {
        'depth': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.game-board': {
          // Add your game board styles here
        },
        '.game-cell': {
          // Add your game cell styles here
        },
        '.piece-x': {
          // Add your piece-x styles here
        },
        '.piece-o': {
          // Add your piece-o styles here
        },
      })
    }
  ],
}