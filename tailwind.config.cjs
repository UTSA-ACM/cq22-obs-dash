/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"cq-lightgreen": "#a2b79b",
				"cq-darkgreen": "#6e8b64",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
