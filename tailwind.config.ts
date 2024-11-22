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
        searchGray: "#EBEBEB"
      },
    },
  },
  plugins: [],
} satisfies Config;
