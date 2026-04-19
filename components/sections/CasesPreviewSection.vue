<template>
  <section class="section-padding bg-white">
    <div class="container-page">
      <div class="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <BaseSectionTitle eyebrow="Практика" title="Примеры рабочих сценариев" text="Кейсы описаны без раскрытия конфиденциальных деталей и показывают подход к решению задач." />
        <BaseButton href="/cases" variant="secondary" icon="lucide:folder-open">Все кейсы</BaseButton>
      </div>
      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <CaseCard v-for="item in cases.slice(0, 3)" :key="item.title" :legal-case="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cases } from '~/data/cases'
</script>
