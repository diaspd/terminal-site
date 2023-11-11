/** @type {import('tailwindcss').Config} */
import("tailwind-scrollbar")
module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: "var(--font-prompt)",
			},

			keyframes: {
				overlayShow: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				contentShow: {
					from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
					to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
				},
			},
			
			animation: {
				overlayShow: "overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)",
				contentShow: "contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
}