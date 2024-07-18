/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      gopher: ["Gopher"],
      gotham: ["Gotham"],
    },
    extend: {
      colors: {
        primary: "hsl(var(--blue))",
        cta: "hsl(var(--red))",
        text: "hsl(var(--black))",
        dark: "hsl(var(--navy))",
        light: "hsl(var(--white))",       
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
