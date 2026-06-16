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
import { lawyers } from '~/data/team'
import { localBusinessSchema, personSchema } from '~/utils/schema'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string
const canonical = `${siteUrl}/`
const ogImage = `${siteUrl}/og-image.svg`

const pageTitle = 'Адвокат в Ташкенте — Юридические услуги | Iskander-Defender'
const pageDescription =
  'Адвокатская фирма Iskander-Defender в Ташкенте. Гражданские, уголовные и административные дела. 10+ лет практики, 5000+ клиентов. Консультация в день обращения. Тел: +998 98 364 83 94'
const pageKeywords =
  'адвокат Ташкент, юридические услуги Ташкент, адвокат Узбекистан, адвокатская фирма Ташкент, юридическая помощь Ташкент, уголовный адвокат Ташкент, гражданский адвокат Ташкент, административный адвокат Ташкент, юрист Ташкент, правовая защита Ташкент, Iskander-Defender, адвокат онлайн Узбекистан, консультация адвоката Ташкент'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogImage,
  ogType: 'website',
  ogUrl: canonical,
  ogSiteName: 'Iskander-Defender',
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: ogImage,
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  meta: [
    { name: 'geo.region', content: 'UZ-TO' },
    { name: 'geo.placename', content: 'Ташкент' },
    { name: 'geo.position', content: '41.2983;69.2401' },
    { name: 'ICBM', content: '41.2983, 69.2401' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['LegalService', 'LocalBusiness'],
            '@id': `${siteUrl}/#organization`,
            name: 'Iskander-Defender',
            alternateName: 'Адвокатская фирма Iskander-Defender',
            description: pageDescription,
            url: siteUrl,
            telephone: contacts.phone,
            email: contacts.email,
            foundingDate: '2014',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 2 },
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
            areaServed: [
              { '@type': 'City', name: 'Ташкент' },
              { '@type': 'Country', name: 'Узбекистан' },
            ],
            serviceType: [
              'Адвокатские услуги',
              'Юридические консультации',
              'Гражданские дела',
              'Уголовные дела',
              'Административные дела',
              'Правовая защита',
            ],
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
            ],
            sameAs: [contacts.telegram, contacts.whatsapp],
            hasMap: contacts.mapEmbed,
            priceRange: '$$',
            currenciesAccepted: 'UZS',
            paymentAccepted: 'Cash, Bank Transfer',
            employee: lawyers.map((l) => ({
              '@type': 'Person',
              name: l.name,
              jobTitle: l.role,
            })),
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Iskander-Defender',
            description: 'Адвокатская фирма в Ташкенте, Узбекистан',
            inLanguage: ['ru', 'uz', 'en'],
            potentialAction: {
              '@type': 'SearchAction',
              target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/blog?q={search_term_string}` },
              'query-input': 'required name=search_term_string',
            },
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
        ],
      }),
    },
  ],
})
</script>
