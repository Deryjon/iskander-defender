import { contacts } from '~/data/site'

const SITE_URL = 'https://iskander-defender.uz'

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'LocalBusiness'],
  name: contacts.brand,
  url: SITE_URL,
  telephone: contacts.phone,
  email: contacts.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contacts.address,
    addressLocality: 'Ташкент',
    addressRegion: 'Ташкентская область',
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'UZS',
  paymentAccepted: 'Cash, Bank Transfer',
  hasMap: contacts.mapEmbed,
  sameAs: [contacts.telegram, contacts.whatsapp],
})

export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Iskander-Defender',
  alternateName: 'Адвокатская фирма Iskander-Defender',
  description:
    'Адвокатская фирма в Ташкенте. Специализация: гражданские, уголовные и административные дела. 10+ лет практики, 5000+ клиентов.',
  url: SITE_URL,
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
  priceRange: '$$',
  hasMap: contacts.mapEmbed,
  sameAs: [contacts.telegram, contacts.whatsapp],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contacts.phone,
    contactType: 'customer service',
    availableLanguage: ['Russian', 'Uzbek'],
    contactOption: 'TollFree',
    areaServed: 'UZ',
  },
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

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const personSchema = (lawyer: {
  name: string
  role: string
  specialization: string
  experience: string
  bio: string
  languages: string[]
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: lawyer.name,
  jobTitle: lawyer.role,
  description: lawyer.bio,
  knowsAbout: lawyer.specialization,
  worksFor: {
    '@type': 'LegalService',
    name: 'Iskander-Defender',
    url: SITE_URL,
  },
  knowsLanguage: lawyer.languages.map((lang) => ({
    '@type': 'Language',
    name: lang === 'RU' ? 'Russian' : lang === 'UZ' ? 'Uzbek' : lang,
  })),
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Адвокат',
    recognizedBy: { '@type': 'Organization', name: 'Адвокатская палата Узбекистана' },
  },
})

export const serviceSchema = (service: {
  title: string
  description: string
  href: string
  services: string[]
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description,
  url: `${SITE_URL}${service.href}`,
  provider: {
    '@type': 'LegalService',
    name: 'Iskander-Defender',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ташкент',
      addressCountry: 'UZ',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Ташкент' },
    { '@type': 'Country', name: 'Узбекистан' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: service.title,
    itemListElement: service.services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s },
    })),
  },
})
