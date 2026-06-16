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
import { breadcrumbSchema } from '~/utils/schema'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string

usePageSeo({
  title: 'Юридические услуги в Ташкенте — Адвокат по гражданским, уголовным и административным делам',
  description:
    'Адвокатская фирма Iskander-Defender в Ташкенте: гражданское право, уголовная защита, административные споры. Консультация, стратегия, документы, представительство в суде.',
  keywords:
    'юридические услуги Ташкент, адвокат по гражданским делам Ташкент, уголовный адвокат Ташкент, административный адвокат Ташкент, юридическая помощь Узбекистан, адвокатские услуги Ташкент',
  path: '/services',
  schema: breadcrumbSchema([
    { name: 'Главная', url: siteUrl },
    { name: 'Услуги', url: `${siteUrl}/services` },
  ]),
})
</script>
