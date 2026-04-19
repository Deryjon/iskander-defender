interface ConsultationRequestPayload {
  name: string
  phone: string
  caseType: 'civil' | 'criminal' | 'administrative'
  message: string
  consent: boolean
}

export const useConsultationRequest = () => {
  const submitRequest = async (_payload: ConsultationRequestPayload) => {
    // TODO: replace with backend API call when endpoint is ready.
    await new Promise((resolve) => setTimeout(resolve, 900))

    return {
      success: true,
      message: 'Заявка принята. Мы свяжемся с вами в ближайшее время.',
    }
  }

  return { submitRequest }
}
