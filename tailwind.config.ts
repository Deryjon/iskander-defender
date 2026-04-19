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
        graphite: '#171A1F',
        charcoal: '#22262D',
        ivory: '#F7F4EF',
        navy: '#17263C',
        bronze: '#B08A57',
        steel: '#6F7783',
        line: '#E6E1D8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(23, 26, 31, 0.10)',
        deep: '0 24px 70px rgba(23, 26, 31, 0.28)',
      },
    },
  },
}
