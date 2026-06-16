<template>
  <header
    class="sticky top-0 z-50 border-b text-white transition-all duration-300"
    :class="isScrolled ? 'border-white/10 bg-graphite/95 shadow-deep backdrop-blur' : 'border-transparent bg-graphite/80'"
  >
    <div class="container-page flex min-h-16 items-center justify-between gap-3 sm:min-h-20 sm:gap-4">
      <a href="#hero" class="font-display text-xl font-extrabold tracking-wide sm:text-2xl" aria-label="Iskander-Defender">
        Iskander<span class="text-bronze">-Defender</span>
      </a>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
        <a
          v-for="item in navigationAnchors"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-white/80 transition hover:text-white"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        <a :href="contacts.phoneHref" class="text-sm font-semibold text-white transition hover:text-bronze">
          {{ contacts.phone }}
        </a>
        <BaseButton href="#consultation" size="sm" :icon-component="SendHorizontal">Получить консультацию</BaseButton>
      </div>

      <button
        class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 sm:h-11 sm:w-11 lg:hidden"
        aria-label="Открыть меню"
        @click="isOpen = true"
      >
        <Menu class="h-5 w-5" />
      </button>
    </div>

    <AppMobileMenu :open="isOpen" @close="isOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { Menu, SendHorizontal } from 'lucide-vue-next'
import { useWindowScroll } from '@vueuse/core'
import { contacts, navigationAnchors } from '~/data/landing'

const isOpen = ref(false)
const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 12)
</script>
