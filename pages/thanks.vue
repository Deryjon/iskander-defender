<template>
  <section class="dark-panel grain relative overflow-hidden">
    <div class="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-brass/[0.07] blur-3xl" aria-hidden="true" />
    <div class="container-page relative flex min-h-[75vh] flex-col items-start justify-center py-20">
      <span class="flex h-16 w-16 items-center justify-center rounded-full border border-brass/60 text-brass">
        <Check class="h-7 w-7" stroke-width="1.5" />
      </span>
      <p class="eyebrow mt-10 !text-brass">Заявка принята</p>
      <h1 class="mt-6 max-w-3xl font-display text-[2.5rem] font-medium leading-[1.05] sm:text-6xl">
        Спасибо. Мы свяжемся с вами <em class="text-brass">в ближайшее время</em>
      </h1>
      <p class="mt-6 max-w-xl text-[15px] leading-7 text-white/60 sm:text-lg sm:leading-8">По срочному вопросу можно дополнительно позвонить или написать в мессенджер.</p>
      <div class="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <BaseButton :href="contacts.phoneHref" size="lg" :icon-component="Phone">Позвонить</BaseButton>
        <BaseButton href="/" size="lg" variant="light">На главную</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check, Phone } from 'lucide-vue-next'
import { contacts } from '~/data/site'

usePageSeo({
  title: 'Спасибо за заявку',
  description: 'Заявка отправлена в Iskander-Defender.',
  path: '/thanks',
  robots: 'noindex, nofollow',
})
</script>
