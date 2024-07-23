/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pokeblue': '#2a74ba',
        'pokedarkblue': '#21386e',
      },
      fontFamily: {
        'luckiest-guy': ['Luckiest Guy'],
      },
      animation: {
        'logo': 'slide-up 2s 1ms 1 forwards',
        'presents': 'fade-in-out 5.5s 2',
        'start': 'fade-in 3s 1',
        'slide-right': 'slide-right 1s 1',
        'slide-left': 'slide-left 1s 1',
        'end': 'end 500ms 1',
        'bounce-200': 'bounce 1s 200ms infinite',
        'bounce-400': 'bounce 1s 400ms infinite',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'fade-in-out': {
          '0%, 100%': { opacity: '0' },
          '30%, 70%': { opacity: '1' },
        },
        'fade-in': {
          '0%, 75%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        'slide-left': {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        'end': {
          '0%': { height: '0'},
          '100%': { height: '33%' },
        },
      },
    },
  },
  plugins: [],
}
