<template>
  <section id="process" class="grain section-padding relative overflow-hidden bg-graphite text-white">
    <div class="container-page">
      <SectionTitle
        index="03"
        eyebrow="Этапы работы"
        title="Как мы ведём дело"
        text="Понятный процесс от первичного анализа до итогового решения. Вы всегда знаете, что происходит и что будет дальше."
        variant="light"
        aside
      />

      <ol class="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        <div class="absolute left-0 right-0 top-[11px] hidden h-px bg-white/15 lg:block" aria-hidden="true" />
        <li v-for="(step, index) in processSteps" :key="step.title" class="relative lg:pr-8">
          <div class="flex items-center gap-4">
            <span class="relative z-10 h-[23px] w-[23px] shrink-0 rounded-full border border-brass bg-graphite p-[5px]">
              <span class="block h-full w-full rounded-full bg-brass" />
            </span>
            <span class="font-display text-lg italic text-brass">Шаг {{ index + 1 }}</span>
          </div>
          <h3 class="mt-6 font-display text-2xl font-medium leading-tight text-white">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-white/55">{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { processSteps } from '~/data/landing'
</script>
