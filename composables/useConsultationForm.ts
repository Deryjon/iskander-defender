import type { ConsultationLeadPayload } from '~/types/form'
import { consultationSchema } from '~/utils/validation'

export const useConsultationForm = () => {
  const route = useRoute()
  const config = useRuntimeConfig()
  const loading = ref(false)
  const success = ref('')
  const serverError = ref('')
  const errors = ref<Record<string, string>>({})
  const form = reactive<ConsultationLeadPayload>({
    name: '',
    phone: '',
    caseType: 'civil',
    message: '',
    contactMethod: 'phone',
    consent: false,
    page: route.path,
    source: 'website',
  })

  const validate = () => {
    errors.value = {}
    const result = consultationSchema.safeParse(form)
    if (result.success) return true
    for (const issue of result.error.issues) {
      errors.value[String(issue.path[0])] = issue.message
    }
    return false
  }

  const submit = async () => {
    serverError.value = ''
    success.value = ''
    if (!validate()) return false

    loading.value = true
    try {
      const endpoint = `${config.public.apiBase}/api/leads/consultation`
      const response = await $fetch<{ success: boolean; message: string }>(endpoint, {
        method: 'POST',
        body: form,
      })

      success.value = response.message || 'Заявка принята. Мы свяжемся с вами в ближайшее время.'
      await navigateTo('/thanks')
      return true
    } catch {
      serverError.value = 'Сервис временно недоступен. Позвоните нам или попробуйте отправить форму позже.'
      return false
    } finally {
      loading.value = false
    }
  }

  watch(form, validate, { deep: true })

  return { form, errors, loading, success, serverError, submit }
}
