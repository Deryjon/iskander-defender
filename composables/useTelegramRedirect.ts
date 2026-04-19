import { contacts } from '~/data/site'

export const useTelegramRedirect = () => {
  const openTelegram = () => {
    if (import.meta.client) window.open(contacts.telegram, '_blank', 'noopener,noreferrer')
  }

  return { openTelegram }
}
