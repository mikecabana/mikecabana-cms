/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundColor: {
        mc: '#202024',
      },
      textColor: {
        mc: {
          50: '#fff6eb',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdb974',
          400: '#fb913c',
          500: '#f97216',
          600: '#ea570c',
          700: '#c2400c',
          800: '#9a3312',
          900: '#7c2c12',
          950: '#431407',
        },
      },
    },
  },
  plugins: [],
}

export default config
