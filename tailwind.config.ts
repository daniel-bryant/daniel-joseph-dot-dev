import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'japanese-violet': '#5B3256',
      },
    },
  },
  plugins: [],
} satisfies Config;
