/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mido: {
          bg: '#060B18',
          dark: '#030610',
          navy: '#0A1224',
          card: '#0E1933',
          elevated: '#142347',
          border: 'rgba(255, 255, 255, 0.1)',
          // Official Brand Royal Blue & Sky Accents
          royal: {
            DEFAULT: '#0A188F',
            deep: '#001080',
            light: '#1D2ECC',
          },
          blue: {
            lightest: '#F0F9FF',
            ice: '#E0F2FE',
            sky: '#38BDF8',
            DEFAULT: '#0EA5E9',
            deep: '#0284C7',
          },
          white: '#FFFFFF',
          pearl: '#F8FAFC',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
