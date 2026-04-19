<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <BenefitsSection />
    <ProcessSection />
    <AboutSection />
    <CasesSection />
    <TeamSection />
    <ReviewsSection />
    <FAQSection />
    <ConsultationSection />
    <ContactsSection />
  </div>
</template>

<script setup lang="ts">
import { contacts, faqItems } from '~/data/landing'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string
const pageTitle = 'Адвокатские услуги в Ташкенте — Iskander-Defender'
const pageDescription =
  'Гражданские, уголовные и административные дела. Консультация, правовая защита и представление интересов клиента. Iskander-Defender.'
const canonical = `${siteUrl}/`
const ogImage = `${siteUrl}/og-image.svg`

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogImage,
  ogType: 'website',
  ogUrl: canonical,
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'Iskander-Defender',
            url: siteUrl,
            telephone: contacts.phone,
            email: contacts.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Tashkent',
              streetAddress: contacts.address,
            },
          },
          {
            '@type': 'LegalService',
            name: 'Iskander-Defender',
            url: siteUrl,
            areaServed: 'Tashkent',
            telephone: contacts.phone,
            email: contacts.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Tashkent',
              streetAddress: contacts.address,
            },
            serviceType: ['Гражданские дела', 'Уголовные дела', 'Административные дела'],
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
        ],
      }),
    },
  ],
})
</script>
