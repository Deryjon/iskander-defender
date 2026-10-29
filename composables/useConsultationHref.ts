// Pages without a consultation form send the CTA to the homepage form.
const pagesWithoutForm = ['/thanks', '/privacy-policy', '/terms']

export const useConsultationHref = () => {
  const route = useRoute()
  return computed(() => (pagesWithoutForm.includes(route.path) ? '/#consultation' : '#consultation'))
}
