<template>
  <NuxtLink :to="`/blog/${article.slug}`" class="group flex flex-col border border-line bg-paper transition duration-500 hover:border-bronze/40 hover:shadow-soft">
    <div class="aspect-[16/9] overflow-hidden bg-line">
      <NuxtImg :src="article.cover" format="webp" quality="75" width="800" height="450" sizes="sm:100vw md:50vw lg:620px" :alt="article.title" class="h-full w-full object-cover grayscale-[30%] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" loading="lazy" />
    </div>
    <div class="flex flex-1 flex-col p-7 sm:p-8">
      <div class="flex items-center justify-between gap-4">
        <BaseBadge>{{ article.topic }}</BaseBadge>
        <time class="text-xs text-steel" :datetime="article.date">{{ formattedDate }}</time>
      </div>
      <h3 class="mt-5 font-display text-2xl font-medium leading-snug text-graphite transition group-hover:text-bronze sm:text-[1.75rem]">{{ article.title }}</h3>
      <p class="mt-3 text-[15px] leading-7 text-steel">{{ article.excerpt }}</p>
      <span class="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-bronze">
        Читать статью
        <ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { ArrowRight } from 'lucide-vue-next'
import 'dayjs/locale/ru'
import type { Article } from '~/types/article'

const props = defineProps<{ article: Article }>()
const formattedDate = computed(() => dayjs(props.article.date).locale('ru').format('D MMMM YYYY'))
</script>
