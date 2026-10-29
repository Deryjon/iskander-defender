<template>
  <section class="bg-paper pb-20 pt-12 sm:pb-28 sm:pt-16">
    <div class="container-page max-w-3xl">
      <nav aria-label="Хлебные крошки" class="flex flex-wrap items-center gap-2 text-xs text-steel">
        <NuxtLink to="/" class="transition hover:text-graphite">Главная</NuxtLink>
        <span aria-hidden="true">/</span>
        <span class="text-graphite">Пользовательское соглашение</span>
      </nav>
      <p class="eyebrow mt-12">Документы</p>
      <h1 class="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] sm:text-6xl">Пользовательское соглашение</h1>
      <div class="mt-10 grid gap-6 border-t border-line pt-10 text-[17px] leading-8 text-graphite/80">
        <p>Сайт предоставляет информационные материалы и форму связи с адвокатской фирмой Iskander-Defender.</p>
        <p>Информация на сайте не заменяет индивидуальную юридическую консультацию по конкретному делу.</p>
        <p>Финальная редакция соглашения должна учитывать фактические услуги, юрисдикцию и порядок коммуникации с клиентами.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Пользовательское соглашение',
  description: 'Пользовательское соглашение сайта Iskander-Defender.',
  path: '/terms',
  robots: 'noindex, nofollow',
})
</script>
