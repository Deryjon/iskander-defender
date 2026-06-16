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
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'ru' },
      titleTemplate: '%s | Iskander-Defender',
      meta: [
        {
          name: 'description',
          content:
            'Адвокатская фирма Iskander-Defender в Ташкенте. Гражданские, уголовные и административные дела. Юридическая помощь в Узбекистане.',
        },
        {
          name: 'keywords',
          content:
            'адвокат Ташкент, юридические услуги Ташкент, адвокат Узбекистан, адвокатская фирма Ташкент, юридическая помощь',
        },
        { name: 'author', content: 'Iskander-Defender' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Iskander-Defender' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:locale:alternate', content: 'uz_UZ' },
        { property: 'og:locale:alternate', content: 'en_US' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
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
      { code: 'uz', name: "O‘zbekcha", file: 'uz.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    langDir: 'locales',
    detectBrowserLanguage: false,
  },
  sitemap: {
    exclude: ['/thanks', '/privacy-policy', '/terms'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  },
  image: {
    domains: ['images.unsplash.com'],
  },
})
