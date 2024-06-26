/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'purple':'#8C2B59',
        'darkSpace':'#160B26',
        'softRed':'#D94343',
        'offwhite':'#F2F2F2',
        'cyanish':'#548C7C'
      },
      screens:{
        'sm':'320px'
      }
    },
  },
  plugins: [],
};
