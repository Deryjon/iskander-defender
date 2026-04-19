import { z } from 'zod'

export const consultationSchema = z.object({
  name: z.string().min(2, 'Укажите имя'),
  phone: z.string().min(7, 'Укажите телефон'),
  caseType: z.enum(['civil', 'criminal', 'administrative']),
  message: z.string().min(10, 'Кратко опишите вопрос'),
  contactMethod: z.enum(['phone', 'telegram', 'whatsapp']),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Нужно согласие на обработку данных' }),
  }),
})
