# Iskander-Defender Frontend

Nuxt 3 frontend для адвокатской фирмы Iskander-Defender.

## Stack

- Nuxt 3, Vue 3, TypeScript
- Tailwind CSS
- Pinia
- Zod
- Nuxt Image, Nuxt Icon
- @nuxtjs/i18n
- @nuxtjs/sitemap

## Commands

```bash
npm install
npm run dev
npm run build
npx nuxi typecheck
```

## Environment

Скопируйте `.env.example` в `.env` и задайте:

```bash
NUXT_PUBLIC_SITE_URL=https://iskander-defender.uz
NUXT_PUBLIC_API_BASE=
```

Если `NUXT_PUBLIC_API_BASE` пустой, форма отправляет заявку в локальный Nuxt endpoint `POST /api/leads/consultation`.

## Content

Статический контент вынесен в `data/`:

- `data/site.ts`
- `data/services.ts`
- `data/team.ts`
- `data/cases.ts`
- `data/articles.ts`
- `data/faq.ts`

Эти файлы можно заменить на CMS/API без изменения структуры страниц.
