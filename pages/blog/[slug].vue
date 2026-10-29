<template>
  <article v-if="article">
    <PageHero :title="article.title" :crumbs="[{ label: 'Блог', to: '/blog' }, { label: article.topic }]">
      <template #actions>
        <div class="flex items-center gap-4 text-sm text-white/50">
          <BaseBadge>{{ article.topic }}</BaseBadge>
          <span class="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
          <time :datetime="article.date">{{ formattedDate }}</time>
        </div>
      </template>
    </PageHero>
    <section class="bg-paper pb-16 sm:pb-24 lg:pb-32">
      <div class="container-page">
        <NuxtImg :src="article.cover" :alt="article.title" class="relative -mt-px aspect-[21/9] w-full object-cover" />
        <div class="mt-14 grid gap-14 lg:grid-cols-[minmax(0,720px)_1fr] lg:gap-20">
          <div class="grid gap-6">
            <p
              v-for="(paragraph, i) in article.body"
              :key="paragraph"
              class="text-[17px] leading-8 text-graphite/80"
              :class="i === 0 ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-bronze' : ''"
            >
              {{ paragraph }}
            </p>
          </div>
          <aside class="lg:sticky lg:top-32 lg:self-start">
            <div class="border-t-2 border-bronze bg-ivory p-7">
              <h2 class="font-display text-2xl font-medium">Похожие статьи</h2>
              <ul class="mt-5 grid">
                <li v-for="item in related" :key="item.slug" class="border-t border-line first:border-t-0">
                  <NuxtLink :to="`/blog/${item.slug}`" class="block py-4 text-[15px] font-semibold leading-6 text-graphite transition hover:text-bronze">
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </aside>
        </div>
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
