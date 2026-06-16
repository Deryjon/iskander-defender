<template>
  <section class="dark-panel min-h-[70vh]">
    <div class="container-page flex min-h-[70vh] flex-col items-start justify-center py-20">
      <BaseBadge>Заявка принята</BaseBadge>
      <h1 class="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">Спасибо. Мы свяжемся с вами после обработки обращения.</h1>
      <p class="mt-6 max-w-2xl text-xl leading-9 text-white/70">По срочному вопросу можно дополнительно позвонить или написать в мессенджер.</p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <BaseButton href="/" size="lg" variant="secondary" icon="lucide:home">На главную</BaseButton>
        <BaseButton :href="contacts.phoneHref" size="lg" icon="lucide:phone">Позвонить</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contacts } from '~/data/site'

usePageSeo({
  title: 'Спасибо за заявку',
  description: 'Заявка отправлена в Iskander-Defender.',
  path: '/thanks',
  robots: 'noindex, nofollow',
})
</script>
