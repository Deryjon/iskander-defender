<template>
  <div>
    <section class="dark-panel">
      <div class="container-page py-20 lg:py-28">
        <BaseBadge>Блог</BaseBadge>
        <h1 class="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">Юридические заметки и разборы</h1>
        <p class="mt-6 max-w-3xl text-xl leading-9 text-white/72">Раздел подготовлен под SEO-статьи, категории, связанные материалы и будущую CMS.</p>
      </div>
    </section>
    <section class="section-padding bg-ivory">
      <div class="container-page grid gap-6 md:grid-cols-2">
        <ArticleCard v-for="article in articles" :key="article.slug" :article="article" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { articles } from '~/data/articles'

usePageSeo({
  title: 'Блог',
  description: 'Полезные юридические статьи Iskander-Defender о консультациях, защите, документах и судебных сценариях.',
  path: '/blog',
})
</script>
