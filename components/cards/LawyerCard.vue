<template>
  <article class="group">
    <div class="relative aspect-[4/5] overflow-hidden bg-line">
      <NuxtImg :src="lawyer.photo" :alt="lawyer.name" class="h-full w-full object-cover object-top grayscale-[35%] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" loading="lazy" />
      <span class="absolute left-5 top-5 bg-graphite/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brass backdrop-blur-sm">
        {{ lawyer.experience }}
      </span>
    </div>
    <div class="mt-6 border-b border-line pb-6">
      <p class="text-[11px] font-semibold uppercase tracking-eyebrow text-bronze">{{ lawyer.role }}</p>
      <h3 class="mt-2 font-display text-2xl font-medium text-graphite sm:text-3xl">{{ lawyer.name }}</h3>
      <p class="mt-2 text-[15px] text-steel">{{ lawyer.specialization }}</p>
    </div>
    <p class="mt-5 text-[15px] leading-7 text-steel">{{ lawyer.bio }}</p>
    <div class="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-graphite">
      <span class="text-steel">Языки:</span>
      <span v-for="language in lawyer.languages" :key="language" class="border border-line px-2.5 py-1">{{ language }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Lawyer } from '~/types/lawyer'

defineProps<{ lawyer: Lawyer }>()
</script>
