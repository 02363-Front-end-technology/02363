module.exports = {
	mode: 'jit',
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "cupcake", "corporate", "synthwave", "retro", "cyberpunk", "valentine"],
	  },
};
