<template>
  <div>
    <section class="dark-panel">
      <div class="container-page py-20 lg:py-28">
        <BaseBadge>Команда</BaseBadge>
        <h1 class="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">Адвокаты и юристы Iskander-Defender</h1>
        <p class="mt-6 max-w-3xl text-xl leading-9 text-white/72">Карточки специалистов готовы к расширению detail-modal, календаря записи и профилей на нескольких языках.</p>
      </div>
    </section>
    <section class="section-padding bg-ivory">
      <div class="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <LawyerCard v-for="lawyer in lawyers" :key="lawyer.name" :lawyer="lawyer" />
      </div>
    </section>
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
import { lawyers } from '~/data/team'
import { breadcrumbSchema, personSchema } from '~/utils/schema'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string

usePageSeo({
  title: 'Команда адвокатов в Ташкенте — Iskander-Defender',
  description:
    'Команда опытных адвокатов Iskander-Defender: 35+ и 30+ лет практики. Специализация: уголовное, гражданское, административное право. Ташкент, Узбекистан.',
  keywords:
    'адвокат Ташкент команда, опытный адвокат Узбекистан, уголовный адвокат Ташкент, гражданский адвокат Ташкент, юрист Ташкент профессионал',
  path: '/team',
  schema: [
    ...lawyers.map((l) => personSchema(l)),
    breadcrumbSchema([
      { name: 'Главная', url: siteUrl },
      { name: 'Команда', url: `${siteUrl}/team` },
    ]),
  ],
})
</script>
