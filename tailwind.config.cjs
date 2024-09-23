const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	mode: "jit",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				/* primary: colors[process.env.PUBLIC_APP_COLOR], */
				primary: '#7030C4', /* from https://brandfolder.com/lambda/#!asset/75nqpnxcgnb6v7m35ps8g7z */
				'gray': {
					100: '#F5F5F5',
					200: '#E5E5E5',
					300: '#D4D4D4', 
					600: '#525252',
					800: '#2D134E', /* from https://brandfolder.com/lambda/#!asset/9pfjfg56vs8sfwm7kstj2w */
					900: '#160A27',
				},
			},
			fontSize: {
				xxs: "0.625rem",
				smd: "0.94rem",
			},
		},
	},
	plugins: [
		require("tailwind-scrollbar")({ nocompatible: true }),
		require("@tailwindcss/typography"),
	],
};
