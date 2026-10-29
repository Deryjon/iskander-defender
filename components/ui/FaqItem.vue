<template>
  <article class="border-b border-line">
    <button
      class="group flex w-full items-start justify-between gap-6 py-6 text-left"
      type="button"
      :aria-expanded="open"
      @click="open = !open"
    >
      <span class="text-mobile-safe font-display text-xl font-medium leading-snug text-graphite transition group-hover:text-bronze sm:text-2xl">{{ props.question }}</span>
      <span
        class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition duration-300"
        :class="open ? 'rotate-45 border-bronze bg-bronze text-white' : 'border-line text-bronze group-hover:border-bronze'"
      >
        <Plus class="h-4 w-4" />
      </span>
    </button>
    <div class="grid transition-[grid-template-rows] duration-300 ease-out" :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
      <div class="overflow-hidden">
        <p class="max-w-2xl pb-6 text-[15px] leading-7 text-steel">{{ props.answer }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    question: string
    answer: string
    initiallyOpen?: boolean
  }>(),
  {
    initiallyOpen: false,
  },
)

const open = ref(props.initiallyOpen)
</script>
