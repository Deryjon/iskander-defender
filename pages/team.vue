<template>
  <div>
    <PageHero
      eyebrow="Команда"
      title="Адвокаты Iskander-Defender"
      text="Каждое дело ведётся лично партнёром — с профильным опытом и персональной ответственностью за результат."
      :crumbs="[{ label: 'Команда' }]"
    />
    <section class="section-padding bg-ivory">
      <div class="container-page grid gap-14 md:grid-cols-2">
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
