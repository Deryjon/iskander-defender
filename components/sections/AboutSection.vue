<template>
  <section class="section-padding bg-ivory" id="about">
    <div class="container-page grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
      <div>
        <SectionTitle
          eyebrow="О фирме"
          title="Опыт, дисциплина и стратегический подход в интересах клиента"
          text="Iskander-Defender сочетает глубокую юридическую экспертизу, строгую процессную работу и уважение к задачам клиента. Мы не предлагаем шаблонных решений: каждое дело ведется по индивидуальной стратегии."
        />
        <p class="mt-5 max-w-2xl text-sm leading-7 text-steel sm:text-base sm:leading-8">
          Приоритет фирмы — управляемый юридический процесс: понятные этапы, прозрачная коммуникация и защита интересов клиента на всех уровнях взаимодействия с оппонентами, госорганами и судом.
        </p>
        <ul class="mt-6 grid gap-3">
          <li v-for="thesis in aboutTheses" :key="thesis" class="flex items-start gap-3 rounded-xl border border-line bg-white px-4 py-3">
            <ShieldCheck class="mt-0.5 h-4 w-4 shrink-0 text-bronze" />
            <span class="text-sm text-graphite">{{ thesis }}</span>
          </li>
        </ul>
      </div>
      <BaseCard class="overflow-hidden p-0">
        <NuxtImg
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
          alt="Интерьер статусного офиса юридической фирмы"
          class="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
          sizes="sm:100vw md:50vw lg:540px"
        />
      </BaseCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'
import { aboutTheses } from '~/data/landing'
</script>
