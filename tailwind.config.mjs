/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      gopher: ["Gopher"],
      gotham: ["Gotham"],
    },
    extend: {
      colors: {
        blue: "hsl(240, 80%, 61%)",
        red: "hsl(357, 100%, 63%)",
      },
      // backgroundColor: {
      //   skin: {
      //     base: 'hsl(var(--bg)/ <alpha-value>)',
      //     primary: 'hsl(var(--primary)/ <alpha-value>)',
      //     button: 'hsl(var(--button)/ <alpha-value>)'
      //   }
      // },
      // textColor: {
      //   skin: {
      //     base: 'hsl(var(--content)/ <alpha-value>)',
      //     primary: 'hsl(var(--content)/ <alpha-value>)',
      //     button: 'hsl(var(--content)/ <alpha-value>)'
      //   }
      // }
      // colors: {
      //   base: "hsl(var(--bg)/ <alpha-value>)",
      //   primary: "hsl(var(--primary)/ <alpha-value>)",
      //   button: "hsl(var(--button)/ <alpha-value>)",
      // },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
