<template>
  <section class="bg-bronze text-white">
    <div class="container-page flex flex-col justify-between gap-8 py-14 sm:py-16 lg:flex-row lg:items-center">
      <div class="max-w-2xl">
        <p class="text-[11px] font-semibold uppercase tracking-eyebrow text-white/70">Следующий шаг</p>
        <h2 class="mt-4 font-display text-3xl font-medium leading-tight sm:text-[2.75rem]">Получите первичную оценку вашей ситуации</h2>
        <p class="mt-4 text-[15px] leading-7 text-white/80">Оставьте заявку — уточним детали, категорию дела и удобный формат консультации.</p>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row">
        <BaseButton href="#consultation" size="lg" variant="dark" :icon-component="ArrowRight">Оставить заявку</BaseButton>
        <BaseButton :href="contacts.phoneHref" size="lg" variant="light" :icon-component="Phone">{{ contacts.phone }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Phone } from 'lucide-vue-next'
import { contacts } from '~/data/site'
</script>
