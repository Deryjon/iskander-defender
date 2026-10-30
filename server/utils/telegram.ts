const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const sendTelegramMessage = async (text: string) => {
  const { telegramBotToken, telegramChatId } = useRuntimeConfig()

  if (!telegramBotToken || !telegramChatId) {
    throw new Error('Telegram is not configured: set NUXT_TELEGRAM_BOT_TOKEN and NUXT_TELEGRAM_CHAT_ID')
  }

  await $fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
    method: 'POST',
    body: {
      chat_id: telegramChatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    },
    timeout: 10_000,
    retry: 2,
  })
}

export { escapeHtml }
