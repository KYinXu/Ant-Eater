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
        gradientFront: '#FA9E00',
        gradientEnd: '#FF00AE'
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
        typewriter: 'typewrite 3s steps(11) forwards',
        caret: 'typewriter 3s steps(11) forwards, blink 1s steps(11) infinite 3s'
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
