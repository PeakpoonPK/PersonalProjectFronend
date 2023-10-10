/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'lightest': '#DBEAFE',
          'light': '#93C5FD',
          'main': '#2563EB',
          'dark': '#1E40AF',
          'darker': '#1E3A8A'
        },
        'secondary': {
          'lightest': '#FEF2F2',
          'light': '#FECACA',
          'main': '#EF4444',
          'dark': '#B91C1C',
          'darker': '#7F1D1D'
        },
        'error': {
          'main': '#7F1D1D',
          'hover': '#B91C1C',
          'pressed': '#F59E0B'
        },
        'semantic': {
          'focused': '#FCD34D',
          'disabledFg': '#DBEAFE',
          'disabledBg': '#F1F5F9',
          'textPrimary': '#1E3A8A',
          'textSecondary': '#EF4444',
          'lightCream': '#F6F0EC',
          'darkCream': '#EFD7C8'
        },

      }
    },
  },
  plugins: [],
}

