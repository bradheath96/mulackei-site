/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#d10b0b",
				secondary: "#BF0603",
				boxBG: "#001427",
			},
			screens: {
				sm: "480px",
				md: "768px",
				lg: "976px",
				xl: "1440px",
			},
		},
	},
};
