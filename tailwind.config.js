/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "9px",
        "xs-10": "10px",
        "xs-11": "11px",
        "sm-13": "13px",
        "3xxl": "32px",
      },
      screens: {
        screen_md: "992px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-gray": "#4A4A4A",
        "light-gray": "#ADADAE",
        "light-black": "#191919",
        orange: "#EC6707",
        cream: "#FEF8F3",
        green: "#26A212",
        red: "#FF3830",
        gray: "#C6C6C6",
        "medium-gray": "#646464",
        "mist-gray": "#F5F5F5",
        "neutral-gray": "#dedede",
        "cool-silver": "#B9C0C9",
      },
    },
  },
  plugins: [],
};
