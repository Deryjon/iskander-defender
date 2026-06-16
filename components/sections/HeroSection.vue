<template>
  <section class="relative overflow-hidden bg-graphite pb-14 pt-10 text-white sm:pb-20 sm:pt-16 lg:pb-28" id="hero">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,86,217,0.28),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(13,27,62,0.55),transparent_45%)]" aria-hidden="true" />
    <div class="container-page relative grid gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
      <div class="text-mobile-safe">
        <p class="eyebrow text-bronze">Iskander-Defender</p>
        <h1 class="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
          Профессиональная защита по гражданским, уголовным и административным делам
        </h1>
        <p class="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">
          Iskander-Defender — адвокатские услуги для частных лиц и бизнеса. Консультируем, выстраиваем стратегию и защищаем интересы клиента на каждом этапе.
        </p>
        <div class="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
          <BaseButton href="#consultation" size="lg" class="w-full sm:w-auto" :icon-component="ShieldCheck">Получить консультацию</BaseButton>
          <BaseButton href="#services" variant="secondary" size="lg" class="w-full sm:w-auto" :icon-component="Scale">Наши услуги</BaseButton>
        </div>
        <div class="mt-8 grid grid-cols-2 gap-3 sm:mt-10">
          <BaseCard
            v-for="item in heroStats"
            :key="item.label"
            class="border-white/15 bg-white/5 px-4 py-4 shadow-none backdrop-blur-sm sm:px-5"
          >
            <p class="font-display text-xl font-bold text-bronze sm:text-2xl">{{ item.value }}</p>
            <p class="mt-1.5 text-xs text-white/70 sm:text-sm">{{ item.label }}</p>
          </BaseCard>
        </div>
      </div>
      <div class="relative">
        <div class="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-bronze/20 blur-2xl" aria-hidden="true" />
        <BaseCard class="overflow-hidden border-white/10 bg-white/5 p-0 backdrop-blur-sm">
          <NuxtImg
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Юридическая команда в статусном офисе"
            class="h-64 w-full object-cover sm:h-80 lg:h-[460px]"
            sizes="sm:100vw md:50vw lg:560px"
            loading="eager"
          />
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Scale, ShieldCheck } from 'lucide-vue-next'
import { heroStats } from '~/data/landing'
</script>
