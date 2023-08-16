/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'gen-bold': 'gen-bold',
        'gen-light': 'gen-light',
        'gen-medium': 'gen-medium',
        'gen-regular': 'gen-regular',
        'gen-semibold': 'gen-semibold',
      }
    },
  },
  plugins: [],
}

