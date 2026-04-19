<template>
  <article class="rounded-2xl border border-line/80 bg-white/80 backdrop-blur-sm">
    <button
      class="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-6"
      type="button"
      :aria-expanded="open"
      @click="open = !open"
    >
      <span class="text-mobile-safe font-display text-base font-bold text-graphite sm:text-lg">{{ props.question }}</span>
      <ChevronDown class="mt-0.5 h-5 w-5 shrink-0 text-bronze transition-transform duration-300" :class="open ? 'rotate-180' : ''" />
    </button>
    <Transition name="faq">
      <div v-if="open" class="px-4 pb-5 sm:px-6 sm:pb-6">
        <p class="text-sm leading-7 text-steel sm:text-base">{{ props.answer }}</p>
      </div>
    </Transition>
  </article>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

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

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.25s ease;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
