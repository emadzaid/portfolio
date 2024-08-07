/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
  extend: {
    colors: 
    {
      // background and text colors for dark/light mode
      primary_grey: '#f3f3f3',
      primary_white: "#fff",

      primary_black: '#18181b',
      secondary_black: "#27272ae6",

      // fixed colors
      primary_blue: '#14b8a6d9',
      
      brownLight: '#F5D3C8',
      brownDark: '#C08552',


    },

    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }
      },

      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "white"
        }
      },

      infiniteScroll: {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }

    },

    animation: {
      typing: "typing 3s steps(20) infinite alternate, blink .7s infinite",
      infiniteScroll: 'infiniteScroll 25s linear infinite',
    },

    
  },
  },
  plugins: [
    require('daisyui')
  ],
  darkMode: "class",
};

