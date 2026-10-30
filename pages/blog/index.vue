<template>
  <div>
    <PageHero
      eyebrow="Блог"
      title="Юридические заметки и разборы"
      text="Объясняем сложные правовые вопросы простым языком: что делать, куда обращаться и как защитить свои интересы."
      :crumbs="[{ label: 'Блог' }]"
    />
    <section class="section-padding bg-ivory">
      <div class="container-page grid gap-6 md:grid-cols-2">
        <ArticleCard v-for="article in articles" :key="article.slug" :article="article" />
      </div>
    </section>
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
import { articles } from '~/data/articles'

usePageSeo({
  title: 'Юридический блог',
  description: 'Полезные юридические статьи Iskander-Defender о консультациях, защите, документах и судебных сценариях.',
  path: '/blog',
})
</script>
