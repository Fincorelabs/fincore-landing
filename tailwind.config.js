/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        gray: {
          900: '#0f0f0f',
          800: '#1c1c1c',
          700: '#2e2e2e',
          300: '#d1d5db',
          100: '#f3f4f6',
        },
      },
    },
  },
  plugins: [],
}
