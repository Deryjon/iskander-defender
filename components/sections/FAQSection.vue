<template>
  <section class="section-padding bg-graphite text-white" id="faq">
    <div class="container-page">
      <SectionTitle
        eyebrow="FAQ"
        title="Частые вопросы"
        text="Кратко отвечаем на важные организационные вопросы перед началом работы."
        variant="light"
      />
      <div class="mt-10 grid gap-3">
        <FaqItem
          v-for="(item, index) in faqItems"
          :key="item.question"
          :question="item.question"
          :answer="item.answer"
          :initially-open="index === 0"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqItems } from '~/data/landing'
</script>
