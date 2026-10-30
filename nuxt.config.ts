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
        { name: 'theme-color', content: '#11151B' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Non-blocking font stylesheet: loads as print, switches to all once fetched.
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600;700&display=swap',
          media: 'print',
          onload: "this.media='all'",
        },
      ],
    },
  },
  runtimeConfig: {
    telegramBotToken: '',
    telegramChatId: '',
    public: {
      siteUrl,
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '',
    },
  },
  site: {
    url: siteUrl,
    name: 'Iskander-Defender',
  },
  nitro: {
    compressPublicAssets: { gzip: true, brotli: true },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/robots.txt'],
      // Images are optimized on demand at runtime; prerendering them would make
      // the build depend on fetching remote (Unsplash) images.
      ignore: ['/_ipx'],
    },
  },
  routeRules: {
    '/images/**': { headers: { 'cache-control': 'public, max-age=2592000, stale-while-revalidate=86400' } },
    '/_ipx/**': { headers: { 'cache-control': 'public, max-age=2592000, stale-while-revalidate=86400' } },
    '/api/**': { prerender: false, headers: { 'cache-control': 'no-store' } },
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    bundle: {
      optimizeTranslationDirective: false,
    },
    baseUrl: siteUrl,
    // uz/en are disabled until real translations exist: they rendered Russian copies
    // under /uz and /en, which search engines treat as duplicate content.
    locales: [{ code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' }],
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
