import { z } from 'zod'

const caseTypeLabels = {
  civil: 'Гражданское дело',
  criminal: 'Уголовное дело',
  administrative: 'Административное дело',
} as const

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/),
  caseType: z.enum(['civil', 'criminal', 'administrative']),
  message: z.string().trim().min(10).max(2000),
  consent: z.literal(true),
  page: z.string().max(300).optional(),
  // Honeypot: real users never see this field, bots tend to fill it.
  website: z.string().max(500).optional(),
})

// Simple in-memory limiter: max 5 leads per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

const isRateLimited = (ip: string) => {
  const now = Date.now()
  if (hits.size > 5000) hits.clear()
  const recent = (hits.get(ip) || []).filter((time) => now - time < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  if (isRateLimited(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Too Many Requests', data: { message: 'Слишком много заявок. Попробуйте позже или позвоните нам.' } })
  }

  const parsed = leadSchema.safeParse(await readBody(event))
  if (!parsed.success) {
    throw createError({ statusCode: 422, statusMessage: 'Invalid lead payload', data: { message: 'Проверьте правильность заполнения формы.' } })
  }

  const lead = parsed.data
  const successResponse = {
    success: true,
    message: 'Заявка принята. Мы свяжемся с вами в ближайшее время.',
  }

  // Pretend success for bots so they don't retry.
  if (lead.website) return successResponse

  const date = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' })
  const lines = [
    '<b>⚖️ Новая заявка на консультацию</b>',
    '',
    `<b>Имя:</b> ${escapeHtml(lead.name)}`,
    `<b>Телефон:</b> <a href="tel:${lead.phone.replace(/\s/g, '')}">${lead.phone}</a>`,
    `<b>Категория:</b> ${caseTypeLabels[lead.caseType]}`,
    '',
    `<b>Вопрос:</b>`,
    escapeHtml(lead.message),
    '',
    `<i>${date}${lead.page ? ` · ${escapeHtml(lead.page)}` : ''}</i>`,
  ]

  try {
    await sendTelegramMessage(lines.join('\n'))
  } catch (error) {
    // Never log the raw error: its URL contains the bot token.
    const status = (error as { statusCode?: number }).statusCode
    console.error(`[lead] Telegram delivery failed${status ? ` (HTTP ${status})` : ''}: ${(error as Error).message.replace(/bot[^/]+/g, 'bot***')}`)
    throw createError({ statusCode: 502, statusMessage: 'Lead delivery failed', data: { message: 'Не удалось отправить заявку. Позвоните нам или напишите в Telegram.' } })
  }

  return successResponse
})
