<template>
  <div>
    <section class="dark-panel">
      <div class="container-page py-20 lg:py-28">
        <BaseBadge>Кейсы</BaseBadge>
        <h1 class="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">Практические сценарии защиты</h1>
        <p class="mt-6 max-w-3xl text-xl leading-9 text-white/72">Фильтруйте примеры по направлениям, чтобы увидеть подход к разным категориям дел.</p>
      </div>
    </section>
    <section class="section-padding bg-ivory">
      <div class="container-page">
        <div class="flex flex-wrap gap-2">
          <button v-for="filter in filters" :key="filter.value" :class="filterClasses(filter.value)" @click="active = filter.value">
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
    'rounded-xl px-4 py-2 text-sm font-semibold transition',
    active.value === value ? 'bg-graphite text-white' : 'border border-line bg-white text-graphite hover:border-bronze',
  ].join(' ')

usePageSeo({
  title: 'Кейсы',
  description: 'Примеры гражданских, уголовных и административных дел Iskander-Defender без раскрытия конфиденциальной информации.',
  path: '/cases',
})
</script>
