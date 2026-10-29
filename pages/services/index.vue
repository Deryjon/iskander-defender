<template>
  <div>
    <PageHero
      eyebrow="Услуги"
      title="Юридическое сопровождение по ключевым направлениям права"
      text="Выберите практику, чтобы увидеть типовые вопросы, этапы работы, кейсы и ответы на частые вопросы."
      :crumbs="[{ label: 'Услуги' }]"
    />
    <section class="section-padding bg-ivory">
      <div class="container-page grid gap-6 lg:grid-cols-3">
        <ServiceCard v-for="service in services" :key="service.key" :service="service" />
      </div>
    </section>
    <CTASection />
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
