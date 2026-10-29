<template>
  <NuxtLink :to="service.href" class="group flex flex-col border border-line bg-paper p-7 transition duration-500 hover:border-bronze/40 hover:shadow-soft sm:p-9">
    <span class="flex h-14 w-14 items-center justify-center border border-line text-bronze transition duration-500 group-hover:border-bronze group-hover:bg-bronze group-hover:text-white">
      <Icon :name="service.icon" class="h-6 w-6" />
    </span>
    <h3 class="mt-8 font-display text-3xl font-medium text-graphite">{{ service.shortTitle }}</h3>
    <p class="mt-4 text-[15px] leading-7 text-steel">{{ service.description }}</p>
    <ul class="mt-7 grid gap-3 text-sm text-graphite">
      <li v-for="item in service.services.slice(0, 4)" :key="item" class="flex items-center gap-3">
        <span class="h-px w-4 shrink-0 bg-bronze" aria-hidden="true" />
        <span>{{ item }}</span>
      </li>
    </ul>
    <span class="mt-auto inline-flex items-center gap-2 pt-9 text-sm font-semibold text-bronze">
      Подробнее о практике
      <ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import type { ServiceItem } from '~/types/service'

defineProps<{ service: ServiceItem }>()
</script>
