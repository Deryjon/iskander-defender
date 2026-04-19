export const useAnalytics = () => {
  const track = (event: string, payload: Record<string, unknown> = {}) => {
    if (import.meta.client) {
      window.dispatchEvent(new CustomEvent('analytics:event', { detail: { event, payload } }))
    }
  }

  return { track }
}
