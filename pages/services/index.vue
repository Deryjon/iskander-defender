<template>
  <div>
    <section class="dark-panel">
      <div class="container-page py-20 lg:py-28">
        <BaseBadge>Услуги</BaseBadge>
        <h1 class="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">Юридическое сопровождение по ключевым направлениям права</h1>
        <p class="mt-6 max-w-3xl text-xl leading-9 text-white/72">Выберите практику, чтобы увидеть типовые вопросы, этапы работы, кейсы и FAQ по направлению.</p>
      </div>
    </section>
    <section class="section-padding bg-ivory">
      <div class="container-page grid gap-6 lg:grid-cols-3">
        <ServiceCard v-for="service in services" :key="service.key" :service="service" />
      </div>
    </section>
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

usePageSeo({
  title: 'Услуги',
  description: 'Гражданское, уголовное и административное право: консультации, стратегия, документы, представительство.',
  path: '/services',
})
</script>
