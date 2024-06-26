/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "sprotBg": "#1D1F21",
        "sprotBg1": "#000000",
        "sprotText": "#D0CECF",
        "sprotDanger": "#C3423F",
        "sprotSuccess": "#12664F",
        "sprotPrimary": "#1D9BF6",
        "sprotPrimary25": "rgba(94, 124, 226, 0.25)",
        "sprotBgLight20": "rgb(50, 52, 55)",
        "sprotBgLight60": "#5C5E61",
        "sprotLightBorder": "#909090"
      }
    }
  },
  plugins: []
};
// "sprotBgLight20": "#323537",
// "sprotBg1": "#1D1D1D",
// "sprotBg": "#202124",
// "sprotBgLight20": "#303134",
// "sprotPrimary": "#5E7CE2",
// "sprotBg1": "#202225",
// "sprotBgLight20": "#343639",
// "sprotBg": "rgb(32, 34, 50)",
// "sprotText": "#E6E6E6",