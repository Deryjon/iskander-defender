<template>
  <div v-if="service">
    <section class="dark-panel">
      <div class="container-page py-20 lg:py-28">
        <BaseBadge>Практика</BaseBadge>
        <h1 class="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">{{ service.title }}</h1>
        <p class="mt-6 max-w-3xl text-xl leading-9 text-white/72">{{ service.description }}</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <BaseButton href="#consultation" size="lg" icon="lucide:send">Получить консультацию</BaseButton>
          <BaseButton href="/cases" size="lg" variant="secondary" icon="lucide:folder-open">Кейсы</BaseButton>
        </div>
      </div>
    </section>
    <section class="section-padding bg-white">
      <div class="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <BaseSectionTitle eyebrow="Кому подходит" title="Когда нужна помощь" />
          <ul class="mt-8 grid gap-3">
            <li v-for="item in service.suitableFor" :key="item" class="flex gap-3 rounded-2xl border border-line bg-ivory p-4">
              <Icon name="lucide:check" class="mt-1 h-5 w-5 shrink-0 text-bronze" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div>
          <BaseSectionTitle eyebrow="Вопросы" title="С чем работаем" />
          <div class="mt-8 flex flex-wrap gap-3">
            <span v-for="item in service.services" :key="item" class="rounded-full border border-line bg-ivory px-4 py-2 text-sm font-semibold">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding bg-ivory">
      <div class="container-page">
        <BaseSectionTitle eyebrow="Процесс" title="Как проходит работа" />
        <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div v-for="(step, index) in service.workflow" :key="step" class="rounded-2xl border border-line bg-white p-5">
            <p class="font-display text-3xl font-extrabold text-bronze">{{ index + 1 }}</p>
            <p class="mt-3 font-semibold">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding bg-white">
      <div class="container-page">
        <BaseSectionTitle eyebrow="Кейсы" title="Практика по направлению" />
        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <CaseCard v-for="item in serviceCases" :key="item.title" :legal-case="item" />
        </div>
      </div>
    </section>
    <FAQSection :items="service.faq" />
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
import { cases } from '~/data/cases'
import { getService, services } from '~/data/services'
import { faqSchema } from '~/utils/schema'

const route = useRoute()
const service = computed(() => getService(String(route.params.slug)))

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

const serviceCases = computed(() => cases.filter((item) => item.category === service.value?.key))

usePageSeo({
  title: service.value.title,
  description: service.value.description,
  path: service.value.href,
  schema: faqSchema(service.value.faq),
})

definePageMeta({
  validate: (route) => services.some((service) => service.key === route.params.slug),
})
</script>
