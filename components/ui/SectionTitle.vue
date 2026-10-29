<template>
  <div class="text-mobile-safe" :class="aside ? 'grid gap-6 lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-end lg:gap-16' : 'max-w-3xl'">
    <div>
      <p v-if="eyebrow" class="eyebrow" :class="variant === 'light' ? '!text-brass' : ''">
        <span v-if="index" class="font-display text-sm normal-case tracking-normal">{{ index }}</span>
        {{ eyebrow }}
      </p>
      <h2
        class="mt-5 font-display text-[2.1rem] font-medium leading-[1.05] sm:text-5xl lg:text-[3.5rem]"
        :class="variant === 'light' ? 'text-white' : 'text-graphite'"
      >
        {{ title }}
      </h2>
    </div>
    <p
      v-if="text"
      class="text-[15px] leading-7 sm:text-base sm:leading-8"
      :class="[variant === 'light' ? 'text-white/60' : 'text-steel', aside ? '' : 'mt-5 max-w-2xl']"
    >
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
    index?: string
    aside?: boolean
    variant?: 'default' | 'light'
  }>(),
  {
    variant: 'default',
    aside: false,
  },
)
</script>
