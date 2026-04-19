<template>
  <LandingTemplate v-if="landing" :landing="landing" />
</template>

<script setup lang="ts">
import { faqSchema } from '~/utils/schema'
import { getLanding, landings } from '~/data/landings'

const route = useRoute()
const landing = computed(() => getLanding(String(route.params.slug)))

if (!landing.value) {
  throw createError({ statusCode: 404, statusMessage: 'Landing not found' })
}

usePageSeo({
  title: landing.value.seoTitle,
  description: landing.value.seoDescription,
  path: `/landing/${landing.value.slug}`,
  image: landing.value.image,
  schema: faqSchema(landing.value.faq),
})

definePageMeta({
  validate: (route) => landings.some((landing) => landing.slug === route.params.slug),
})
</script>
