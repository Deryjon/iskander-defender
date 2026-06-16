<template>
  <article v-if="article">
    <section class="dark-panel">
      <div class="container-page py-16 lg:py-24">
        <BaseBadge>{{ article.topic }}</BaseBadge>
        <h1 class="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">{{ article.title }}</h1>
        <time class="mt-6 block text-white/60" :datetime="article.date">{{ formattedDate }}</time>
      </div>
    </section>
    <NuxtImg :src="article.cover" :alt="article.title" class="h-[420px] w-full object-cover" />
    <section class="section-padding bg-white">
      <div class="container-page grid gap-10 lg:grid-cols-[minmax(0,760px)_1fr]">
        <div class="prose prose-lg max-w-none">
          <p v-for="paragraph in article.body" :key="paragraph" class="leading-9 text-steel">{{ paragraph }}</p>
        </div>
        <aside class="rounded-2xl border border-line bg-ivory p-6">
          <h2 class="font-display text-2xl font-bold">Похожие статьи</h2>
          <div class="mt-5 grid gap-4">
            <NuxtLink v-for="item in related" :key="item.slug" :to="`/blog/${item.slug}`" class="font-semibold hover:text-bronze">
              {{ item.title }}
            </NuxtLink>
          </div>
        </aside>
      </div>
    </section>
    <ConsultationFormSection />
  </article>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { articles } from '~/data/articles'
import { breadcrumbSchema } from '~/utils/schema'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string

const route = useRoute()
const article = computed(() => articles.find((item) => item.slug === route.params.slug))
if (!article.value) throw createError({ statusCode: 404, statusMessage: 'Article not found' })

const formattedDate = computed(() => dayjs(article.value?.date).locale('ru').format('D MMMM YYYY'))
const related = computed(() => articles.filter((item) => item.slug !== article.value?.slug).slice(0, 3))

usePageSeo({
  title: article.value.title,
  description: article.value.excerpt,
  path: `/blog/${article.value.slug}`,
  image: article.value.cover,
  ogType: 'article',
  keywords: `${article.value.topic}, адвокат Ташкент, юридическая статья Узбекистан, правовой блог Ташкент`,
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.value.title,
      description: article.value.excerpt,
      datePublished: article.value.date,
      dateModified: article.value.date,
      image: {
        '@type': 'ImageObject',
        url: article.value.cover,
      },
      author: {
        '@type': 'Organization',
        name: 'Iskander-Defender',
        url: siteUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Iskander-Defender',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/favicon-16.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${siteUrl}/blog/${article.value.slug}`,
      },
      articleSection: article.value.topic,
      inLanguage: 'ru',
      about: {
        '@type': 'Thing',
        name: 'Юридические услуги в Ташкенте',
      },
    },
    breadcrumbSchema([
      { name: 'Главная', url: siteUrl },
      { name: 'Блог', url: `${siteUrl}/blog` },
      { name: article.value.title, url: `${siteUrl}/blog/${article.value.slug}` },
    ]),
  ],
})
</script>
