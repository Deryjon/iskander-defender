<template>
  <section id="about" class="section-padding bg-ivory">
    <div class="container-page grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
      <div>
        <SectionTitle
          index="04"
          eyebrow="О фирме"
          title="Опыт, дисциплина и стратегия в интересах клиента"
          text="Iskander-Defender сочетает глубокую юридическую экспертизу, строгую процессную работу и уважение к задачам клиента. Мы не предлагаем шаблонных решений: каждое дело ведётся по индивидуальной стратегии."
        />
        <ul class="mt-10 border-t border-line">
          <li v-for="(thesis, i) in aboutTheses" :key="thesis" class="flex items-baseline gap-5 border-b border-line py-5">
            <span class="font-display text-lg italic text-bronze">0{{ i + 1 }}</span>
            <span class="text-[15px] font-medium text-graphite sm:text-base">{{ thesis }}</span>
          </li>
        </ul>
      </div>

      <figure class="grain relative overflow-hidden bg-graphite p-8 text-white sm:p-12">
        <Quote class="h-10 w-10 text-brass" stroke-width="1.25" aria-hidden="true" />
        <blockquote class="mt-8 font-display text-[1.75rem] font-medium leading-[1.25] sm:text-4xl">
          Приоритет фирмы — управляемый юридический процесс: понятные этапы, прозрачная коммуникация и защита интересов клиента на всех уровнях.
        </blockquote>
        <figcaption class="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div>
            <p class="font-semibold">Iskander-Defender</p>
            <p class="text-sm text-white/50">Принцип работы фирмы</p>
          </div>
          <p class="font-display text-4xl font-medium text-brass">с 2014</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import { aboutTheses } from '~/data/landing'
</script>
