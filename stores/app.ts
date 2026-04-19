export const useAppStore = defineStore('app', () => {
  const isConsultationModalOpen = ref(false)
  const openConsultation = () => {
    isConsultationModalOpen.value = true
  }
  const closeConsultation = () => {
    isConsultationModalOpen.value = false
  }

  return { isConsultationModalOpen, openConsultation, closeConsultation }
})
