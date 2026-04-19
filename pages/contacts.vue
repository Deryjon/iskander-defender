<template>
  <div>
    <section class="dark-panel">
      <div class="container-page py-20 lg:py-28">
        <BaseBadge>Контакты</BaseBadge>
        <h1 class="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">Связаться с Iskander-Defender</h1>
      </div>
    </section>
    <ContactSection />
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Контакты',
  description: 'Телефон, email, адрес, график работы, карта и форма связи адвокатской фирмы Iskander-Defender.',
  path: '/contacts',
})
</script>
