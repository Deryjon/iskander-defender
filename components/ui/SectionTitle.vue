<template>
  <div class="max-w-3xl text-mobile-safe">
    <p v-if="eyebrow" class="eyebrow" :class="variant === 'light' ? '!text-bronze' : ''">{{ eyebrow }}</p>
    <h2
      class="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl"
      :class="variant === 'light' ? 'text-white' : 'text-graphite'"
    >
      {{ title }}
    </h2>
    <p v-if="text" class="mt-4 text-sm leading-7 sm:text-base sm:leading-8" :class="variant === 'light' ? 'text-white/75' : 'text-steel'">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    text?: string
    variant?: 'default' | 'light'
  }>(),
  {
    variant: 'default',
  },
)
</script>
