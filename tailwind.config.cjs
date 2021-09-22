const config = {
	mode: 'jit',
	darkMode: 'class',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#042521',
					200: '#084a42',
					300: '#0d6e64',
					400: '#119385',
					500: '#15b8a6',
					600: '#44c6b8',
					700: '#73d4ca',
					800: '#a1e3db',
					900: '#d0f1ed'
				},
				secondary: {
					100: '#290d1b',
					200: '#521b36',
					300: '#7a2850',
					400: '#a3366b',
					500: '#cc4386',
					600: '#d6699e',
					700: '#e08eb6',
					800: '#ebb4cf',
					900: '#f5d9e7'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
