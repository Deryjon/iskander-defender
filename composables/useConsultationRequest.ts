interface ConsultationRequestPayload {
  name: string
  phone: string
  caseType: 'civil' | 'criminal' | 'administrative'
  message: string
  consent: boolean
  website?: string
}

export const useConsultationRequest = () => {
  const config = useRuntimeConfig()
  const route = useRoute()

  const submitRequest = async (payload: ConsultationRequestPayload) => {
    try {
      return await $fetch<{ success: boolean; message: string }>(`${config.public.apiBase}/api/leads/consultation`, {
        method: 'POST',
        body: { ...payload, page: route.fullPath },
      })
    } catch (error) {
      const message = (error as { data?: { data?: { message?: string } } }).data?.data?.message
      return { success: false, message: message || '' }
    }
  }

  return { submitRequest }
}
