import { organizationSchema } from '~/utils/schema'

export const usePageSeo = (options: {
  title: string
  description: string
  path?: string
  image?: string
  schema?: Record<string, unknown>
}) => {
  const config = useRuntimeConfig()
  const url = `${config.public.siteUrl}${options.path || useRoute().path}`
  const image = options.image || `${config.public.siteUrl}/og.jpg`

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: url,
    ogImage: image,
    twitterCard: 'summary_large_image',
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(options.schema || organizationSchema()),
      },
    ],
  })
}
