<template>
  <section class="section-padding bg-ivory">
    <div class="container-page">
      <div class="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <BaseSectionTitle eyebrow="Команда" title="Специалисты по ключевым направлениям" text="В работу включаются адвокаты и юристы с релевантной специализацией по категории дела." />
        <BaseButton href="/team" variant="secondary" icon="lucide:users">Вся команда</BaseButton>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <LawyerCard v-for="lawyer in lawyers.slice(0, 4)" :key="lawyer.name" :lawyer="lawyer" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { lawyers } from '~/data/team'
</script>
