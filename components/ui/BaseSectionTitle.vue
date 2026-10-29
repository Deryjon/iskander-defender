<template>
  <div :class="['max-w-3xl text-mobile-safe', center ? 'mx-auto text-center' : '']">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2 class="mt-5 font-display text-[2rem] font-medium leading-[1.08] text-graphite sm:text-[2.75rem] lg:text-5xl">
      {{ title }}
    </h2>
    <p v-if="text" class="mt-5 text-[15px] leading-7 text-steel sm:text-base sm:leading-8">
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
