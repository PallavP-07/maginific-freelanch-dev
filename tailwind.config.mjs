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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
		container: {
		
			center: true,
	  
			
			padding: '4rem',
	  
			
			screens: {
			  sm: '600px',
			  md: '728px',
			  lg: '984px',
			  xl: '1240px',
			  '2xl': '1496px',
			},
    },
  },
  
},
plugins: [require("tailwindcss-animate")],
}