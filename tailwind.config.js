/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        projectBackground: "url('/public/images/decoration3.jpg')",
      },
    },
  },
  plugins: [],
};
