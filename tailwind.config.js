/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#8D0801",
				floralWhite: "#fff8f0ff",
				engineeringOrange: "#ca140aff",
				boxYellow: "#ffbd24ff",
				federalBlue: "#0D0B47",
				secondary: "#BF0603",
				boxBG: "#001427",
			},
			fontFamily: {
				titleFont: ["Noto Serif Display", "serif"],
				bodyFont: ["Poppins", "sans-serif"],
				logoFont: ["Noto Sans", "sans-serif"],
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
