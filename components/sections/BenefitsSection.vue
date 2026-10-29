<template>
  <section id="benefits" class="section-padding bg-paper">
    <div class="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div class="lg:sticky lg:top-32 lg:self-start">
        <SectionTitle
          index="02"
          eyebrow="Преимущества"
          title="Почему нам доверяют самое важное"
          text="Строгие процессы, профессиональная этика и фокус на реальном результате по делу."
        />
        <BaseButton href="#consultation" class="mt-9" :icon-component="ArrowRight">Записаться на консультацию</BaseButton>
      </div>

      <div class="grid gap-px bg-line sm:grid-cols-2">
        <div v-for="item in benefits" :key="item.title" class="group bg-paper p-7 transition-colors duration-300 hover:bg-ivory sm:p-9">
          <component :is="iconMap[item.icon]" class="h-7 w-7 text-bronze" stroke-width="1.5" />
          <h3 class="mt-6 font-display text-2xl font-medium text-graphite">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-steel">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, BriefcaseBusiness, Route, ShieldCheck, Target, Timer, UserRoundCheck } from 'lucide-vue-next'
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
