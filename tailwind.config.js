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
      boxShadow: {
        "4xl": "4px 8px 5px rgba(0, 0, 0, 0.15)",
        "3xl": "0px 3px 4px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "mw-green": "#2BD9AF",
        "mw-pink": "#FF5E84",
        "mw-blue": "#0E42FD",
      },
    },
  },
  plugins: [],
};
