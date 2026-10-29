<template>
  <section class="dark-panel grain relative overflow-hidden">
    <div class="pointer-events-none absolute -right-40 -top-20 h-[34rem] w-[34rem] rounded-full bg-brass/[0.07] blur-3xl" aria-hidden="true" />
    <div
      class="container-page relative grid gap-10 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24"
      :class="$slots.aside ? 'lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16' : ''"
    >
      <div class="text-mobile-safe">
        <nav aria-label="Хлебные крошки" class="flex flex-wrap items-center gap-2 text-xs text-white/40">
          <NuxtLink to="/" class="transition hover:text-white">Главная</NuxtLink>
          <template v-for="crumb in crumbs" :key="crumb.label">
            <span aria-hidden="true">/</span>
            <NuxtLink v-if="crumb.to" :to="crumb.to" class="transition hover:text-white">{{ crumb.label }}</NuxtLink>
            <span v-else class="text-white/70">{{ crumb.label }}</span>
          </template>
        </nav>
        <p v-if="eyebrow" class="eyebrow mt-10 !text-brass sm:mt-14">{{ eyebrow }}</p>
        <h1 class="mt-6 max-w-4xl font-display text-[2.5rem] font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
          <slot name="title">{{ title }}</slot>
        </h1>
        <p v-if="text" class="mt-6 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-lg sm:leading-8">{{ text }}</p>
        <div v-if="$slots.actions" class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <slot name="actions" />
        </div>
      </div>
      <div v-if="$slots.aside">
        <slot name="aside" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    eyebrow?: string
    text?: string
    crumbs?: Array<{ label: string; to?: string }>
  }>(),
  { crumbs: () => [] },
)
</script>
