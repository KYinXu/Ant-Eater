import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        selected: "#fb7185",
        big1: "#FA9E00",
        big2: "#FF00AE",
        x: "#FD4F57",
        offwhite: "#F7F7F7",
        whitewhite: "#F6F6FF",
        searchGray: "#EBEBEB",
        gradientFront: "#FA9E00",
        gradientEnd: "#FF00AE",
        bg1: "#D0D0FF",
        bg2: "#FA9E00"
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      fontFamily: {
        ibarra: ['Ibarra Real Nova'],
        bebas: ['Bebas Neue'],
        rokkitt: ['Rokkitt']
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
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
        }
      },

    },
  },
  plugins: [],
} satisfies Config;
