<template>
  <header
    class="sticky top-0 z-50 text-white transition-all duration-500"
    :class="isScrolled ? 'bg-graphite/90 shadow-deep backdrop-blur-md' : 'bg-graphite'"
  >
    <div class="container-page flex h-16 items-center justify-between gap-4 sm:h-[76px]">
      <NuxtLink to="/" class="flex items-center gap-3" aria-label="Iskander-Defender">
        <span class="flex h-9 w-9 items-center justify-center border border-brass/60 font-display text-lg font-semibold text-brass">ID</span>
        <span class="font-display text-xl font-semibold tracking-wide sm:text-2xl">
          Iskander<span class="text-brass">·</span>Defender
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
        <a
          v-for="item in navigationAnchors"
          :key="item.href"
          :href="item.href"
          class="link-underline pb-1 text-[13px] font-medium text-white/70 transition hover:text-white"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-6 lg:flex">
        <a :href="contacts.phoneHref" class="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-brass">
          <Phone class="h-3.5 w-3.5 text-brass" aria-hidden="true" />
          {{ contacts.phone }}
        </a>
        <BaseButton :href="consultationHref" size="sm">Консультация</BaseButton>
      </div>

      <button
        class="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 transition hover:border-white lg:hidden"
        aria-label="Открыть меню"
        @click="isOpen = true"
      >
        <Menu class="h-5 w-5" />
      </button>
    </div>
    <div class="h-px w-full bg-gradient-to-r from-transparent via-brass/40 to-transparent" aria-hidden="true" />

    <AppMobileMenu :open="isOpen" @close="isOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { Menu, Phone } from 'lucide-vue-next'
import { useWindowScroll } from '@vueuse/core'
import { contacts, navigationAnchors } from '~/data/landing'

const consultationHref = useConsultationHref()

const isOpen = ref(false)
const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 12)
</script>
