/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12263f',
        muted: '#5f6b7a',
        line: '#d8dee6',
        soft: '#f6f8fb',
        accent: '#b88a3b',
        accentSoft: '#f2ece1',
        navy: '#0d2238',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      maxWidth: {
        content: '78rem',
      },
    },
  },
  plugins: [],
}
