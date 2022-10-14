/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			fontFamily: {
				VeryLight: ["Vary-Light"],
			},
			textColor: {
				skin: {
					base: "var(--text-color)",
					light: "var(--light-color)",
					extraLight: "var(--extraLight-color)",
					normal: "var(--normal-color)",
				},
			},
			backgroundColor: {
				skin: {
					base: "var(--fill-color)",
					normal: "var(--normal-color)",
					colorHover: "var(--hover-color)",
				},
			},
			borderColor: {
				normal: "var(--normal-color)",
				"color-opacity": "var(--border-color-opacity)",
			},
		},
	},
	plugins: [],
};
