import type { ServiceKey } from './service'

export interface LegalCase {
  title: string
  category: ServiceKey
  problem: string
  action: string
  result: string
}
