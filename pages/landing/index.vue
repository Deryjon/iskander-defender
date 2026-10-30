<template>
  <div>
    <PageHero
      eyebrow="Направления"
      title="Помощь под вашу конкретную ситуацию"
      text="Срочный адвокат, уголовная защита, гражданские споры, административные штрафы и сопровождение бизнеса."
      :crumbs="[{ label: 'Направления' }]"
    />
    <section class="section-padding bg-ivory">
      <div class="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="landing in landings"
          :key="landing.slug"
          :to="`/landing/${landing.slug}`"
          class="group flex flex-col border border-line bg-paper transition duration-500 hover:border-bronze/40 hover:shadow-soft"
        >
          <div class="aspect-[16/10] overflow-hidden bg-line">
            <NuxtImg :src="landing.image" format="webp" quality="75" width="800" height="500" sizes="sm:100vw md:50vw lg:400px" :alt="landing.title" class="h-full w-full object-cover grayscale-[30%] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" loading="lazy" />
          </div>
          <div class="flex flex-1 flex-col p-7">
            <BaseBadge>{{ landing.badge }}</BaseBadge>
            <h2 class="mt-5 font-display text-2xl font-medium leading-snug transition group-hover:text-bronze">{{ landing.title }}</h2>
            <p class="mt-3 text-[15px] leading-7 text-steel">{{ landing.subtitle }}</p>
            <span class="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-bronze">
              Подробнее
              <ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { landings } from '~/data/landings'

usePageSeo({
  title: 'Направления помощи',
  description: 'Юридическая помощь Iskander-Defender: срочная помощь, уголовные, гражданские, административные дела и бизнес.',
  path: '/landing',
})
</script>
