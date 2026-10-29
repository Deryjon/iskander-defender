<template>
  <section class="bg-paper pb-20 pt-12 sm:pb-28 sm:pt-16">
    <div class="container-page max-w-3xl">
      <nav aria-label="Хлебные крошки" class="flex flex-wrap items-center gap-2 text-xs text-steel">
        <NuxtLink to="/" class="transition hover:text-graphite">Главная</NuxtLink>
        <span aria-hidden="true">/</span>
        <span class="text-graphite">Политика конфиденциальности</span>
      </nav>
      <p class="eyebrow mt-12">Документы</p>
      <h1 class="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] sm:text-6xl">Политика конфиденциальности</h1>
      <div class="mt-10 grid gap-6 border-t border-line pt-10 text-[17px] leading-8 text-graphite/80">
        <p>Настоящая политика описывает принципы обработки персональных данных посетителей сайта Iskander-Defender.</p>
        <p>Данные из форм используются для связи с заявителем, первичной оценки обращения и передачи заявки в рабочие системы фирмы.</p>
        <p>Финальный текст политики должен быть согласован с юристом и адаптирован под фактические процессы обработки данных.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности сайта Iskander-Defender.',
  path: '/privacy-policy',
  robots: 'noindex, nofollow',
})
</script>
