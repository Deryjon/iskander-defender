<template>
  <section class="section-padding bg-graphite text-white" id="process">
    <div class="container-page">
      <SectionTitle
        eyebrow="Этапы работы"
        title="Как мы ведем дело"
        text="Понятный процесс от первичного анализа до итогового результата."
        variant="light"
      />
      <div class="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <BaseCard
          v-for="(step, index) in processSteps"
          :key="step.title"
          class="relative border-white/15 bg-white/5 p-5 shadow-none backdrop-blur-sm"
        >
          <span class="font-display text-3xl font-extrabold text-bronze">0{{ index + 1 }}</span>
          <h3 class="mt-4 font-display text-xl font-bold text-white">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-white/70">{{ step.description }}</p>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { processSteps } from '~/data/landing'
</script>
