<template>
  <div v-if="service">
    <PageHero
      eyebrow="Практика"
      :title="service.title"
      :text="service.description"
      :crumbs="[{ label: 'Услуги', to: '/services' }, { label: service.shortTitle }]"
    >
      <template #actions>
        <BaseButton href="#consultation" size="lg" :icon-component="ArrowRight">Получить консультацию</BaseButton>
        <BaseButton href="/cases" size="lg" variant="light">Смотреть кейсы</BaseButton>
      </template>
    </PageHero>

    <section class="section-padding bg-paper">
      <div class="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <BaseSectionTitle eyebrow="Кому подходит" title="Когда нужна помощь" />
          <ul class="mt-10 border-t border-line">
            <li v-for="item in service.suitableFor" :key="item" class="flex items-start gap-4 border-b border-line py-5">
              <Check class="mt-1 h-4 w-4 shrink-0 text-bronze" aria-hidden="true" />
              <span class="text-[15px] font-medium text-graphite">{{ item }}</span>
            </li>
          </ul>
        </div>
        <div>
          <BaseSectionTitle eyebrow="Вопросы" title="С чем работаем" />
          <div class="mt-10 flex flex-wrap gap-2.5">
            <span v-for="item in service.services" :key="item" class="border border-line bg-ivory px-4 py-2.5 text-sm font-medium text-graphite">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="grain section-padding relative overflow-hidden bg-graphite text-white">
      <div class="container-page">
        <SectionTitle eyebrow="Процесс" title="Как проходит работа" variant="light" />
        <ol class="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          <div class="absolute left-0 right-0 top-[11px] hidden h-px bg-white/15 lg:block" aria-hidden="true" />
          <li v-for="(step, index) in service.workflow" :key="step" class="relative lg:pr-8">
            <div class="flex items-center gap-4">
              <span class="relative z-10 h-[23px] w-[23px] shrink-0 rounded-full border border-brass bg-graphite p-[5px]">
                <span class="block h-full w-full rounded-full bg-brass" />
              </span>
              <span class="font-display text-lg italic text-brass">Шаг {{ index + 1 }}</span>
            </div>
            <p class="mt-6 font-display text-2xl font-medium leading-tight">{{ step }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section v-if="serviceCases.length" class="section-padding bg-ivory">
      <div class="container-page">
        <BaseSectionTitle eyebrow="Кейсы" title="Практика по направлению" />
        <div class="mt-14 grid gap-6 lg:grid-cols-3">
          <CaseCard v-for="item in serviceCases" :key="item.title" :legal-case="item" />
        </div>
      </div>
    </section>
    <FAQSection :items="service.faq" index="" />
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Check } from 'lucide-vue-next'
import { cases } from '~/data/cases'
import { getService, services } from '~/data/services'
import { breadcrumbSchema, faqSchema, serviceSchema } from '~/utils/schema'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string
const route = useRoute()
const service = computed(() => getService(String(route.params.slug)))

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

const serviceCases = computed(() => cases.filter((item) => item.category === service.value?.key))

const keywordsMap: Record<string, string> = {
  civil: 'гражданский адвокат Ташкент, семейный спор адвокат Ташкент, взыскание долгов адвокат Узбекистан, имущественный спор юрист Ташкент, наследство адвокат Ташкент',
  criminal: 'уголовный адвокат Ташкент, защита на следствии Ташкент, адвокат по уголовным делам Узбекистан, срочный адвокат Ташкент, защита прав обвиняемого',
  administrative: 'административный адвокат Ташкент, обжалование штрафов Узбекистан, споры с госорганами Ташкент, административное право адвокат Ташкент',
}

usePageSeo({
  title: `${service.value.title} — адвокат в Ташкенте`,
  description: `${service.value.description} Iskander-Defender — адвокатская фирма в Ташкенте, Узбекистан.`,
  keywords: keywordsMap[service.value.key] || `адвокат Ташкент, ${service.value.title.toLowerCase()}, юридические услуги Узбекистан`,
  path: service.value.href,
  schema: [
    serviceSchema(service.value),
    faqSchema(service.value.faq),
    breadcrumbSchema([
      { name: 'Главная', url: siteUrl },
      { name: 'Услуги', url: `${siteUrl}/services` },
      { name: service.value.title, url: `${siteUrl}${service.value.href}` },
    ]),
  ],
})

definePageMeta({
  validate: (route) => services.some((service) => service.key === route.params.slug),
})
</script>
