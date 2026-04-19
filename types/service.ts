export type ServiceKey = 'civil' | 'criminal' | 'administrative'

export interface ServiceItem {
  key: ServiceKey
  title: string
  shortTitle: string
  description: string
  href: string
  icon: string
  services: string[]
  suitableFor: string[]
  workflow: string[]
  faq: Array<{ question: string; answer: string }>
}
