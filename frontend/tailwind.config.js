/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#4ABDAC',
				secondary: '#FC4A1A',
				tertiary: '#F7B733',
				textLight: '#DFDCE3'
			},
			fontFamily: {
				primary: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: []
};
