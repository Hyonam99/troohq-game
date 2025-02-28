/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF1975",
				"dark-blue": "#060D1F",
				"primary-thin": "#FCE2E2",
				"stone-gray": "#F4F7FF21",
				"light-gray": "#333333",
			},
		},
	},
	plugins: [],
};
