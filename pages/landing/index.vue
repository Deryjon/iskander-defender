<template>
  <div>
    <section class="dark-panel">
      <div class="container-page py-20 lg:py-28">
        <BaseBadge>Лендинги</BaseBadge>
        <h1 class="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Отдельные страницы под юридические обращения
        </h1>
        <p class="mt-6 max-w-3xl text-xl leading-9 text-white/72">
          Пять продающих лендингов для разных сценариев: срочный адвокат, уголовная защита, гражданские споры, административные штрафы и сопровождение бизнеса.
        </p>
      </div>
    </section>
    <section class="section-padding bg-ivory">
      <div class="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="landing in landings"
          :key="landing.slug"
          :to="`/landing/${landing.slug}`"
          class="group overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-deep"
        >
          <NuxtImg :src="landing.image" :alt="landing.title" class="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" />
          <div class="p-6">
            <BaseBadge>{{ landing.badge }}</BaseBadge>
            <h2 class="mt-4 font-display text-2xl font-bold">{{ landing.title }}</h2>
            <p class="mt-3 leading-7 text-steel">{{ landing.subtitle }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { landings } from '~/data/landings'

usePageSeo({
  title: 'Юридические лендинги',
  description: 'Пять посадочных страниц Iskander-Defender под срочную помощь, уголовные, гражданские, административные дела и бизнес.',
  path: '/landing',
})
</script>
