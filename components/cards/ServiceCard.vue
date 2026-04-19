<template>
  <BaseCard>
    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
      <Icon :name="service.icon" class="h-6 w-6" />
    </div>
    <h3 class="mt-6 font-display text-2xl font-bold">{{ service.shortTitle }}</h3>
    <p class="mt-3 leading-7 text-steel">{{ service.description }}</p>
    <ul class="mt-5 grid gap-2 text-sm text-graphite">
      <li v-for="item in service.services.slice(0, 4)" :key="item" class="flex gap-2">
        <Icon name="lucide:check" class="mt-0.5 h-4 w-4 shrink-0 text-bronze" />
        <span>{{ item }}</span>
      </li>
    </ul>
    <BaseButton :href="service.href" variant="secondary" class="mt-6">Подробнее</BaseButton>
  </BaseCard>
</template>

<script setup lang="ts">
import type { ServiceItem } from '~/types/service'

defineProps<{ service: ServiceItem }>()
</script>
