import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared_comp/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: '320px',   // Extra small devices
        sm: '425px',   // Small devices
        md: '768px',   // Medium devices (tablets)
        lg: '1024px',  // Large devices (laptops)
        exl: '1440px',  // Extra large devices
        uws: '2560px' // Ultra-wide screens
      },
    },
  },
  plugins: [],
} satisfies Config;
