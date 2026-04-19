import { contacts } from '~/data/site'

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'LocalBusiness'],
  name: contacts.brand,
  url: 'https://iskander-defender.uz',
  telephone: contacts.phone,
  email: contacts.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contacts.address,
    addressLocality: 'Ташкент',
    addressCountry: 'UZ',
  },
  areaServed: 'Uzbekistan',
})

export const faqSchema = (items: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})
