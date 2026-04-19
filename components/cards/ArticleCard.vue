<template>
  <NuxtLink :to="`/blog/${article.slug}`" class="group block overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
    <NuxtImg :src="article.cover" :alt="article.title" class="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" />
    <div class="p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{{ article.topic }}</p>
      <h3 class="mt-3 font-display text-2xl font-bold group-hover:text-navy">{{ article.title }}</h3>
      <p class="mt-3 leading-7 text-steel">{{ article.excerpt }}</p>
      <time class="mt-5 block text-sm text-steel" :datetime="article.date">{{ formattedDate }}</time>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import type { Article } from '~/types/article'

const props = defineProps<{ article: Article }>()
const formattedDate = computed(() => dayjs(props.article.date).locale('ru').format('D MMMM YYYY'))
</script>
