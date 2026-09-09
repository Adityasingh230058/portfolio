/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        paper: {
          50: '#faf9f5',
          100: '#f4f3ed',
          200: '#e5e3d8',
          300: '#c8c5b6',
          900: '#141413',
        },
        night: {
          950: '#09090b',
          900: '#121215',
          800: '#18181b',
          700: '#27272a',
          100: '#f4f4f5',
        }
      }
    },
  },
  plugins: [],
}
