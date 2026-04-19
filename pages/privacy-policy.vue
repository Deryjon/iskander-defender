<template>
  <section class="section-padding bg-white">
    <div class="container-page max-w-4xl">
      <BaseBadge>Документы</BaseBadge>
      <h1 class="mt-6 font-display text-4xl font-extrabold">Политика конфиденциальности</h1>
      <div class="mt-8 grid gap-5 leading-8 text-steel">
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
})
</script>
