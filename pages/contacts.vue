<template>
  <div>
    <PageHero
      eyebrow="Контакты"
      title="Связаться с Iskander-Defender"
      text="Позвоните, напишите в мессенджер или приходите в офис. Уточним задачу и предложим следующий шаг."
      :crumbs="[{ label: 'Контакты' }]"
    />
    <ContactSection />
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
import { contacts } from '~/data/landing'
import { localBusinessSchema } from '~/utils/schema'

usePageSeo({
  title: 'Контакты адвокатской фирмы в Ташкенте — Iskander-Defender',
  description:
    'Адрес: г. Ташкент, ул. Алишера Навои, 5. Телефон: +998 98 364 83 94. Email: office@iskander-defender.uz. Режим работы: Пн-Сб 09:00–19:00.',
  keywords:
    'контакты адвоката Ташкент, адрес адвокатской фирмы Ташкент, телефон адвоката Ташкент, запись на консультацию адвокат Ташкент',
  path: '/contacts',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Iskander-Defender',
    url: 'https://iskander-defender.uz',
    telephone: contacts.phone,
    email: contacts.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contacts.address,
      addressLocality: 'Ташкент',
      addressRegion: 'Ташкентская область',
      postalCode: '100000',
      addressCountry: 'UZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.2983,
      longitude: 69.2401,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contacts.phone,
        contactType: 'customer service',
        availableLanguage: ['Russian', 'Uzbek'],
        areaServed: 'UZ',
      },
      {
        '@type': 'ContactPoint',
        email: contacts.email,
        contactType: 'customer service',
        availableLanguage: ['Russian', 'Uzbek'],
      },
    ],
    hasMap: contacts.mapEmbed,
    sameAs: [contacts.telegram, contacts.whatsapp],
  },
})
</script>
