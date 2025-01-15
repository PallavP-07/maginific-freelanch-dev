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
        padding: '8rem',
        maxWidth: '100%', // Make sure the container doesn't exceed the screen width
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
        maxWidth: {
          sm: '100%', // Ensure small screen sizes have no restrictions
          md: '100%', 
          lg: '100%', // Limits container on larger screens as well
          xl: '1240px', // Defines a maximum width on larger screens
          '2xl': '1240px', // Keep a consistent max-width on extra large screens
        },
      },
  },
  
},
plugins: [require("tailwindcss-animate")],
}