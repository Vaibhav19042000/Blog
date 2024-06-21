const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    //    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    //    require("flowbite/plugin"), // Add Flowbite as a plugin
    flowbite.plugin(),
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
  ],
};
