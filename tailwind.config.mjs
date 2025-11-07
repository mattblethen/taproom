/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        oak: '#7A5832',
        amber: '#D5A253',
        cream: '#F5F2E8',
        muted: '#A8A8A8',
      },
    },
  },
  plugins: [],
};
