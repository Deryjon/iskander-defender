import type { ServiceKey } from './service'

export type ContactMethod = 'phone' | 'telegram' | 'whatsapp'
export type LeadType = 'consultation' | 'callback' | 'urgent-request' | 'contact-message'

export interface ConsultationLeadPayload {
  name: string
  phone: string
  caseType: ServiceKey
  message: string
  contactMethod?: ContactMethod
  consent: boolean
  page?: string
  source?: string
}
