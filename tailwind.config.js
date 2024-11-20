/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunshine: '#ffbc42',  // Bright yellow
        crimson: '#d81159',   // Vibrant red
        mulberry: '#8f2d56',  // Deep wine/burgundy
        lagoon: '#218380',    // Dark teal
        reef: '#73d2de',      // Light blue/azure
        reefHalf: 'rgba(115,210,222,0.45)',      // Light blue/azure
        offwhite: '#F8F8F8',
        t_black: 'rgba(0,0,0,0.25)',
        overlay: 'rgba(0,0,0,0.6)',
        offblack: '#222121',
        subwhite: '#f4efef',
      }
    },
  },
  plugins: [],
}