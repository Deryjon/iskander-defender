import { organizationSchema } from '~/utils/schema'

export const usePageSeo = (options: {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string
  ogType?: string
  robots?: string
  schema?: Record<string, unknown> | Record<string, unknown>[]
}) => {
  const config = useRuntimeConfig()
  const url = `${config.public.siteUrl}${options.path || useRoute().path}`
  const image = options.image || `${config.public.siteUrl}/og-image.svg`

  useSeoMeta({
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: url,
    ogImage: image,
    ogType: (options.ogType as 'website' | 'article') || 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
    robots: options.robots,
  })

  const schemas = Array.isArray(options.schema)
    ? options.schema
    : [options.schema || organizationSchema()]

  useHead({
    link: [{ rel: 'canonical', href: url }],
    script: schemas.map((s) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(s),
    })),
  })
}
