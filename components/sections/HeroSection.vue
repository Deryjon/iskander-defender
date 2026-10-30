<template>
  <section id="hero" class="grain relative overflow-hidden bg-graphite text-white">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute -right-40 top-0 h-[42rem] w-[42rem] rounded-full bg-brass/[0.07] blur-3xl" />
      <div class="absolute inset-y-0 left-[58%] hidden w-px bg-white/[0.06] lg:block" />
    </div>

    <div class="container-page relative grid gap-12 pb-16 pt-12 sm:pb-24 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
      <div class="text-mobile-safe">
        <p class="eyebrow !text-brass">Адвокатская фирма · Ташкент</p>
        <h1 class="mt-7 font-display text-[2.75rem] font-medium leading-[0.98] tracking-[-0.01em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          Защищаем ваши интересы
          <em class="block font-medium text-brass">уверенно и по делу</em>
        </h1>
        <p class="mt-7 max-w-xl text-[15px] leading-7 text-white/60 sm:text-lg sm:leading-8">
          Гражданские, уголовные и административные дела. Разбираемся в ситуации, объясняем варианты и ведём дело вместе с вами — до результата.
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <BaseButton href="#consultation" size="lg" class="w-full sm:w-auto" :icon-component="ArrowRight">Обсудить ситуацию</BaseButton>
          <a :href="contacts.phoneHref" class="group inline-flex items-center justify-center gap-3 py-2 text-sm text-white/70 transition hover:text-white">
            <span class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition group-hover:border-brass">
              <Phone class="h-4 w-4 text-brass" aria-hidden="true" />
            </span>
            <span class="text-left leading-tight">
              <span class="block text-[11px] uppercase tracking-[0.18em] text-white/40">Звоните сейчас</span>
              <span class="font-semibold text-white">{{ contacts.phone }}</span>
            </span>
          </a>
        </div>

        <dl class="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 xl:grid-cols-4">
          <div v-for="item in heroStats" :key="item.label" class="min-w-0">
            <dt class="sr-only">{{ item.label }}</dt>
            <dd class="whitespace-nowrap font-display text-3xl font-medium text-white xl:text-[1.85rem]">{{ item.value }}</dd>
            <dd class="mt-1.5 text-xs leading-5 text-white/45">{{ item.label }}</dd>
          </div>
        </dl>
      </div>

      <div class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="absolute -right-3 -top-3 bottom-10 left-10 border border-brass/40 sm:-right-5 sm:-top-5" aria-hidden="true" />
        <div class="relative overflow-hidden bg-charcoal">
          <NuxtImg
            src="/images/ilhomjon.jpg"
            width="1047"
            height="1400"
            format="webp"
            quality="80"
            fetchpriority="high"
            preload
            alt="Юсупов Ильхомжон Кубижонович, управляющий партнер"
            class="aspect-[4/5] w-full object-cover object-top"
            sizes="sm:100vw md:60vw lg:520px"
            loading="eager"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/10 to-transparent" aria-hidden="true" />
          <div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p class="text-[11px] uppercase tracking-eyebrow text-brass">Управляющий партнёр</p>
            <p class="mt-2 font-display text-2xl font-medium sm:text-3xl">Юсупов Ильхомжон</p>
            <p class="mt-1 text-sm text-white/55">35+ лет адвокатской практики</p>
          </div>
        </div>
        <div class="absolute -left-4 top-10 hidden bg-paper px-5 py-4 text-graphite shadow-deep sm:block lg:-left-10">
          <p class="font-display text-4xl font-semibold leading-none text-bronze">2014</p>
          <p class="mt-1.5 text-xs leading-4 text-steel">год основания<br>фирмы</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Phone } from 'lucide-vue-next'
import { contacts, heroStats } from '~/data/landing'
</script>
