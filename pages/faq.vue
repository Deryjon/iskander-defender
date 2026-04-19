<template>
  <div>
    <section class="dark-panel">
      <div class="container-page py-20 lg:py-28">
        <BaseBadge>FAQ</BaseBadge>
        <h1 class="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">Ответы на частые вопросы</h1>
      </div>
    </section>
    <FAQSection :items="faqItems" />
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
