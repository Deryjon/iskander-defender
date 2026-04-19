<template>
  <section id="benefits" class="section-padding bg-white">
    <div class="container-page">
      <SectionTitle
        eyebrow="Преимущества"
        title="Почему клиенты выбирают Iskander-Defender"
        text="Строгие процессы, профессиональная этика и фокус на реальном результате по делу."
      />
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <BaseCard v-for="item in benefits" :key="item.title" class="p-6">
          <component :is="iconMap[item.icon]" class="h-8 w-8 text-bronze" />
          <h3 class="mt-4 font-display text-xl font-bold text-graphite">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-steel">{{ item.description }}</p>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BriefcaseBusiness, Route, ShieldCheck, Target, Timer, UserRoundCheck } from 'lucide-vue-next'
import { benefits } from '~/data/landing'

const iconMap = {
  shield: ShieldCheck,
  'user-check': UserRoundCheck,
  briefcase: BriefcaseBusiness,
  route: Route,
  timer: Timer,
  target: Target,
}
</script>
