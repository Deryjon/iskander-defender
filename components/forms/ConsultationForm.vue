<template>
  <form class="grid gap-4" novalidate @submit.prevent="onSubmit">
    <BaseInput
      :model-value="values.name"
      label="Имя"
      placeholder="Ваше имя"
      autocomplete="name"
      :error="errors.name"
      @update:model-value="setFieldValue('name', $event)"
    />

    <BaseInput
      :model-value="values.phone"
      label="Номер телефона"
      placeholder="+998 90 000 00 00"
      autocomplete="tel"
      :error="errors.phone"
      @update:model-value="onPhoneInput"
    />

    <BaseSelect
      :model-value="values.caseType"
      label="Категория дела"
      :options="caseTypeOptions"
      :error="errors.caseType"
      @update:model-value="setFieldValue('caseType', $event as ConsultationCaseType)"
    />

    <BaseTextarea
      :model-value="values.message"
      label="Краткое описание вопроса"
      placeholder="Опишите ситуацию в 2-3 предложениях"
      :error="errors.message"
      @update:model-value="setFieldValue('message', $event)"
    />

    <BaseCheckbox :model-value="values.consent" :error="errors.consent" @update:model-value="setFieldValue('consent', $event)">
      Согласен на обработку персональных данных
    </BaseCheckbox>

    <p v-if="submitState === 'success'" class="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
      {{ successMessage }}
    </p>
    <p v-if="submitState === 'error'" class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      {{ submitError }}
    </p>

    <BaseButton type="submit" size="lg" class="w-full sm:w-auto" :loading="isSubmitting" :icon-component="SendHorizontal">
      Отправить заявку
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { SendHorizontal } from 'lucide-vue-next'
import { z } from 'zod'

type ConsultationCaseType = 'civil' | 'criminal' | 'administrative'

const caseTypeOptions = [
  { label: 'Гражданские дела', value: 'civil' },
  { label: 'Уголовные дела', value: 'criminal' },
  { label: 'Административные дела', value: 'administrative' },
]

const consultationSchema = z.object({
  name: z.string().trim().min(2, 'Укажите имя'),
  phone: z
    .string()
    .trim()
    .regex(/^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/, 'Введите номер в формате +998 90 000 00 00'),
  caseType: z.enum(['civil', 'criminal', 'administrative']),
  message: z.string().trim().min(10, 'Кратко опишите вопрос (минимум 10 символов)'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Необходимо согласие на обработку персональных данных' }),
  }),
})

type ConsultationFormValues = z.infer<typeof consultationSchema>

const { submitRequest } = useConsultationRequest()

const { values, errors, setFieldValue, setErrors, handleSubmit, isSubmitting, resetForm } = useForm<ConsultationFormValues>({
  initialValues: {
    name: '',
    phone: '',
    caseType: 'civil',
    message: '',
    consent: false,
  },
})

const submitState = ref<'idle' | 'success' | 'error'>('idle')
const submitError = ref('')
const successMessage = ref('')

const formatPhone = (rawValue: string) => {
  const digits = rawValue.replace(/\D/g, '')
  const tail = digits.startsWith('998') ? digits.slice(3) : digits
  const normalized = tail.slice(0, 9)

  const part1 = normalized.slice(0, 2)
  const part2 = normalized.slice(2, 5)
  const part3 = normalized.slice(5, 7)
  const part4 = normalized.slice(7, 9)

  let masked = '+998'
  if (part1) masked += ` ${part1}`
  if (part2) masked += ` ${part2}`
  if (part3) masked += ` ${part3}`
  if (part4) masked += ` ${part4}`

  return masked
}

const onPhoneInput = (value: string) => {
  setFieldValue('phone', formatPhone(value))
}

watch(
  () => ({ ...values }),
  () => {
    if (!isSubmitting.value) {
      submitState.value = 'idle'
      submitError.value = ''
      successMessage.value = ''
    }
  },
)

const onSubmit = handleSubmit(async (formValues) => {
  submitState.value = 'idle'
  submitError.value = ''
  successMessage.value = ''

  const parsed = consultationSchema.safeParse(formValues)
  if (!parsed.success) {
    const nextErrors: Partial<Record<keyof ConsultationFormValues, string>> = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof ConsultationFormValues
      nextErrors[field] = issue.message
    }
    setErrors(nextErrors)
    return
  }

  try {
    const response = await submitRequest(parsed.data)
    if (!response.success) {
      submitState.value = 'error'
      submitError.value = 'Не удалось отправить заявку. Попробуйте еще раз или свяжитесь с нами по телефону.'
      return
    }

    submitState.value = 'success'
    successMessage.value = response.message
    resetForm({
      values: {
        name: '',
        phone: '',
        caseType: 'civil',
        message: '',
        consent: false,
      },
    })
  } catch {
    submitState.value = 'error'
    submitError.value = 'Сервис временно недоступен. Попробуйте отправить форму позже.'
  }
})
</script>
