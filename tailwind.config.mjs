/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			green: {
			  light: '#A8E6CF', // light green
			  DEFAULT: '#56C596', // default green
			  dark: '#379683', // dark green
			},
			gray: {
			  light: '#E0E0E0', // light gray
			  DEFAULT: '#BDBDBD', // default gray
			  dark: '#757575', // dark gray
			},
		  },
  		fontFamily: {
			sans: ['Inter', 'sans-serif'],
  		},
  		container: {
  			center: true,
  			padding: '8rem',
  			maxWidth: {
  				sm: '100%',
  				md: '100%',
  				lg: '100%',
  				xl: '1240px',
  				'2xl': '1240px'
  			},
  			screens: {
  				sm: '600px',
  				md: '728px',
  				lg: '984px',
  				xl: '1240px',
  				'2xl': '1496px'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
plugins: [require("tailwindcss-animate")],
}