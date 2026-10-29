import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#11151B',
        charcoal: '#1A2029',
        ivory: '#F4F1EA',
        paper: '#FBFAF6',
        navy: '#252D39',
        bronze: '#A9824A',
        brass: '#C9A56B',
        steel: '#666B73',
        line: '#E1DBCF',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17, 21, 27, 0.04), 0 12px 32px -12px rgba(17, 21, 27, 0.10)',
        deep: '0 24px 60px -20px rgba(17, 21, 27, 0.35)',
      },
      letterSpacing: {
        eyebrow: '0.24em',
      },
    },
  },
}
