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
        graphite: '#0D1B3E',
        charcoal: '#162447',
        ivory: '#F4F8FF',
        navy: '#173087',
        bronze: '#1E56D9',
        steel: '#5A6E87',
        line: '#D0DDF5',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(13, 27, 62, 0.10)',
        deep: '0 24px 70px rgba(13, 27, 62, 0.22)',
      },
    },
  },
}
