/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,tippy.js}",
   
  ],
  theme: {
    extend: {
      backgroundImage:{
        circularLight:"repeating-radial-gradient(rgba(0,0,0,0.5) 2px,#f5f5f5 5px,#f5f5f5 100px)",
        circularLightLg:"repeating-radial-gradient(rgba(0,0,0,0.5) 2px,#f5f5f5 5px,#f5f5f5 75px)",
        circularLightMd:"repeating-radial-gradient(rgba(0,0,0,0.5) 2px,#f5f5f5 5px,#f5f5f5 44px)",
        circularLightSm:"repeating-radial-gradient(rgba(0,0,0,0.5) 2px,#f5f5f5 5px,#f5f5f5 38px)",
        circularLightXs:"repeating-radial-gradient(rgba(0,0,0,0.5) 2px,#f5f5f5 5px,#f5f5f5 35px)",
        homeImage : "url('https://source.unsplash.com/MP0IUfwrn0A')",
        gradientLinear : 'linear-gradient(80deg, #eb0f97, #f566f0, #3b098b)',
      },
      fontFamily: {
        Geologica: '"Geologica", sans-serif'
      },
      boxShadow: {
        insetWhite: 'inset 0 0 0 6px rgba(255 255 255 / 30%)',
      },
      animation: {
        profile_animate: 'profile_animate 8s ease-in-out infinite',
        gradient: 'gradient 8s ease-in-out infinite',
      },
      keyframes: {
        profile_animate: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
    screens: {
      '2xl': {max: "1535px"},
      // => @media (max-width: 1535px) { ... }

      xl: {max:" 1280px"},
      // => @media (max-width: 1279px) { ... }

      lg: {max: "1023px"},
      // => @media (max-width: 1023px) { ... }

      md: {max: "767px"},
      // => @media (max-width: 767px) { ... }

      sm: {max: "639px"},
      // => @media (max-width: 639px) { ... }
      xs: {max: "479px"},
      // => @media (max-width: 479px) { ... }
    },
   
 
},
  plugins: [require("daisyui")],


}