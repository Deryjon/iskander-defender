<template>
  <div>
    <PageHero
      eyebrow="Кейсы"
      title="Практические сценарии защиты"
      text="Примеры по направлениям — без раскрытия персональных данных клиентов."
      :crumbs="[{ label: 'Кейсы' }]"
    />
    <section class="section-padding bg-ivory">
      <div class="container-page">
        <div class="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Фильтр по направлению">
          <button
            v-for="filter in filters"
            :key="filter.value"
            role="tab"
            :aria-selected="active === filter.value"
            :class="filterClasses(filter.value)"
            @click="active = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>
        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <CaseCard v-for="item in filteredCases" :key="item.title" :legal-case="item" />
        </div>
      </div>
    </section>
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
import { cases } from '~/data/cases'
import type { ServiceKey } from '~/types/service'

const filters = [
  { label: 'Все', value: 'all' },
  { label: 'Гражданские', value: 'civil' },
  { label: 'Уголовные', value: 'criminal' },
  { label: 'Административные', value: 'administrative' },
] as const

const active = ref<(typeof filters)[number]['value']>('all')
const filteredCases = computed(() => (active.value === 'all' ? cases : cases.filter((item) => item.category === active.value as ServiceKey)))
const filterClasses = (value: string) =>
  [
    'shrink-0 rounded-sm px-5 py-2.5 text-sm font-semibold transition',
    active.value === value ? 'bg-graphite text-white' : 'border border-line bg-paper text-graphite hover:border-graphite',
  ].join(' ')

usePageSeo({
  title: 'Кейсы',
  description: 'Примеры гражданских, уголовных и административных дел Iskander-Defender без раскрытия конфиденциальной информации.',
  path: '/cases',
})
</script>
