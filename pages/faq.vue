<template>
  <div>
    <PageHero
      eyebrow="FAQ"
      title="Ответы на частые вопросы"
      text="Организационные вопросы о консультациях, стоимости и порядке работы."
      :crumbs="[{ label: 'FAQ' }]"
    />
    <FAQSection :items="faqItems" index="" />
    <CTASection />
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
import { faqItems } from '~/data/faq'
import { faqSchema } from '~/utils/schema'

usePageSeo({
  title: 'FAQ',
  description: 'Частые вопросы о консультациях, документах, оплате, суде и конфиденциальности.',
  path: '/faq',
  schema: faqSchema(faqItems),
})
</script>
