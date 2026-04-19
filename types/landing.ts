export type CaseCategory = 'civil' | 'criminal' | 'administrative'

export interface NavAnchor {
  label: string
  href: string
}

export interface HeroStat {
  value: string
  label: string
}

export interface ServiceItem {
  key: CaseCategory
  title: string
  description: string
  points: string[]
}

export interface BenefitItem {
  title: string
  description: string
  icon: 'shield' | 'user-check' | 'briefcase' | 'route' | 'timer' | 'target'
}

export interface ProcessStep {
  title: string
  description: string
}

export interface CaseItem {
  category: string
  situation: string
  actions: string
  result: string
}

export interface TeamMember {
  name: string
  position: string
  specialization: string
  experience: string
  image: string
}

export interface ReviewItem {
  client: string
  text: string
  category: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ContactInfo {
  phone: string
  phoneHref: string
  email: string
  address: string
  schedule: string
  telegram: string
  whatsapp: string
  mapEmbed: string
}
