const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://iskander-defender.uz'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  experimental: {
    appManifest: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/styles/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      titleTemplate: '%s | Iskander-Defender',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl,
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '',
    },
  },
  site: {
    url: siteUrl,
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'uz', name: 'O‘zbekcha', file: 'uz.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    langDir: 'locales',
    detectBrowserLanguage: false,
  },
  sitemap: {},
  image: {
    domains: ['images.unsplash.com'],
  },
})
