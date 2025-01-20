import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'phone' : '375px',
        'pc' : '1366px',
        'xlmax' : '1340px',
        's' : '100px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif',],
        sfprodisplay: ['SfProDisplayRegular','sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
