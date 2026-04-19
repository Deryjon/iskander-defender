<template>
  <section class="section-padding bg-white">
    <div class="container-page max-w-4xl">
      <BaseBadge>Документы</BaseBadge>
      <h1 class="mt-6 font-display text-4xl font-extrabold">Пользовательское соглашение</h1>
      <div class="mt-8 grid gap-5 leading-8 text-steel">
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
})
</script>
