<template>
  <div :class="['max-w-3xl text-mobile-safe', center ? 'mx-auto text-center' : '']">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2 class="mt-3 font-display text-2xl font-bold leading-tight text-graphite sm:text-4xl lg:text-5xl">
      {{ title }}
    </h2>
    <p v-if="text" class="mt-4 text-sm leading-7 text-steel sm:mt-5 sm:text-lg sm:leading-8">
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
    center?: boolean
  }>(),
  { center: false },
)
</script>
