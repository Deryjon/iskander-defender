<template>
  <section id="faq" class="section-padding bg-paper">
    <div class="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div class="lg:sticky lg:top-32 lg:self-start">
        <SectionTitle
          :index="index"
          eyebrow="FAQ"
          title="Частые вопросы"
          text="Кратко отвечаем на важные организационные вопросы перед началом работы."
        />
        <div class="mt-9 border border-line bg-ivory p-6">
          <p class="font-display text-xl font-medium text-graphite">Не нашли ответ?</p>
          <p class="mt-2 text-sm leading-6 text-steel">Позвоните — ответим на вопрос за пару минут.</p>
          <a :href="contacts.phoneHref" class="link-underline mt-4 inline-block font-semibold text-bronze">{{ contacts.phone }}</a>
        </div>
      </div>
      <div class="border-t border-line">
        <FaqItem
          v-for="(item, i) in items"
          :key="item.question"
          :question="item.question"
          :answer="item.answer"
          :initially-open="i === 0"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contacts, faqItems } from '~/data/landing'

withDefaults(
  defineProps<{
    items?: Array<{ question: string; answer: string }>
    index?: string
  }>(),
  { items: () => faqItems, index: '07' },
)
</script>
