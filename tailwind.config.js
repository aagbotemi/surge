module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'biotif': ['Biotif', 'sans-serif'],
      },
      colors: {
        blue: {
          light: '#233E8B',
        },
        grey: {
          light: '#F2F3F4',
        },
        brown: {
          light: '#33220A',
        }
      }
    },
  },
  plugins: [],
}