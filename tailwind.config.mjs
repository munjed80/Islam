/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a5276',
        secondary: '#2ecc71',
        accent: '#f39c12',
      },
    },
  },
  plugins: [],
};
