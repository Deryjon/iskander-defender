<template>
  <article class="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
    <NuxtImg :src="lawyer.photo" :alt="lawyer.name" class="h-72 w-full object-cover" loading="lazy" />
    <div class="p-6">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">{{ lawyer.role }}</p>
      <h3 class="mt-2 font-display text-2xl font-bold">{{ lawyer.name }}</h3>
      <p class="mt-3 leading-7 text-steel">{{ lawyer.specialization }}</p>
      <div class="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
        <span class="rounded-full bg-ivory px-3 py-1">{{ lawyer.experience }}</span>
        <span v-for="language in lawyer.languages" :key="language" class="rounded-full bg-ivory px-3 py-1">{{ language }}</span>
      </div>
      <p class="mt-5 text-sm leading-7 text-steel">{{ lawyer.bio }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Lawyer } from '~/types/lawyer'

defineProps<{ lawyer: Lawyer }>()
</script>
