<template>
  <div>
    <section class="dark-panel grain relative overflow-hidden">
      <div class="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-brass/[0.07] blur-3xl" aria-hidden="true" />
      <div class="container-page relative grid items-center gap-12 pb-16 pt-10 sm:pb-24 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div class="text-mobile-safe">
          <nav aria-label="Хлебные крошки" class="flex flex-wrap items-center gap-2 text-xs text-white/40">
            <NuxtLink to="/" class="transition hover:text-white">Главная</NuxtLink>
            <span aria-hidden="true">/</span>
            <NuxtLink to="/landing" class="transition hover:text-white">Направления</NuxtLink>
          </nav>
          <p class="eyebrow mt-10 !text-brass sm:mt-14">{{ landing.badge }}</p>
          <h1 class="mt-6 font-display text-[2.5rem] font-medium leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
            {{ landing.title }}
          </h1>
          <p class="mt-6 max-w-xl text-[15px] leading-7 text-white/60 sm:text-lg sm:leading-8">
            {{ landing.subtitle }}
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <BaseButton href="#consultation" size="lg" :icon-component="ArrowRight">Получить консультацию</BaseButton>
            <BaseButton :href="contacts.phoneHref" size="lg" variant="light" :icon-component="Phone">
              {{ landing.urgent ? 'Позвонить срочно' : 'Позвонить' }}
            </BaseButton>
          </div>
          <dl class="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div v-for="stat in landing.stats" :key="stat.label">
              <dt class="sr-only">{{ stat.label }}</dt>
              <dd class="font-display text-3xl font-medium sm:text-4xl">{{ stat.value }}</dd>
              <dd class="mt-1.5 text-xs leading-5 text-white/45">{{ stat.label }}</dd>
            </div>
          </dl>
        </div>
        <div class="relative mx-auto w-full max-w-md lg:max-w-none">
          <div class="absolute -right-3 -top-3 bottom-10 left-10 border border-brass/40 sm:-right-5 sm:-top-5" aria-hidden="true" />
          <div class="relative overflow-hidden bg-charcoal">
            <NuxtImg :src="landing.image" format="webp" quality="75" width="800" height="1000" sizes="sm:100vw md:60vw lg:560px" fetchpriority="high" :alt="landing.title" class="aspect-[4/5] w-full object-cover lg:aspect-[5/6]" preload />
            <div class="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/10 to-transparent" aria-hidden="true" />
            <p class="absolute inset-x-0 bottom-0 p-6 font-display text-xl leading-snug text-white/90 sm:p-8 sm:text-2xl">
              Юридическая позиция строится на фактах, сроках, доказательствах и реальном интересе клиента.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-paper">
      <div class="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <BaseSectionTitle eyebrow="Ситуации" :title="landing.painTitle" text="Если вы узнали свою ситуацию в списке, лучше получить правовую оценку до следующего действия или подписи." />
        <ul class="border-t border-line">
          <li v-for="(pain, i) in landing.pains" :key="pain" class="flex items-baseline gap-5 border-b border-line py-5">
            <span class="font-display text-lg italic text-bronze">0{{ i + 1 }}</span>
            <p class="text-[15px] font-medium leading-7 text-graphite sm:text-base">{{ pain }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section-padding bg-ivory">
      <div class="container-page">
        <BaseSectionTitle eyebrow="Услуги" :title="landing.serviceTitle" />
        <div class="mt-14 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
          <div v-for="service in landing.services" :key="service.title" class="bg-ivory p-7 transition-colors duration-300 hover:bg-paper sm:p-8">
            <Scale class="h-7 w-7 text-bronze" stroke-width="1.5" />
            <h2 class="mt-6 font-display text-2xl font-medium">{{ service.title }}</h2>
            <p class="mt-3 text-sm leading-7 text-steel">{{ service.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-paper">
      <div class="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <BaseSectionTitle eyebrow="Результат" :title="landing.resultTitle" />
          <ul class="mt-10 border-t border-line">
            <li v-for="result in landing.results" :key="result" class="flex items-start gap-4 border-b border-line py-5">
              <Check class="mt-1 h-4 w-4 shrink-0 text-bronze" aria-hidden="true" />
              <span class="text-[15px] font-medium text-graphite">{{ result }}</span>
            </li>
          </ul>
        </div>
        <div>
          <BaseSectionTitle eyebrow="Этапы" title="Понятный порядок работы" />
          <ol class="mt-10 grid gap-0">
            <li v-for="(step, index) in landing.process" :key="step" class="relative flex gap-5 pb-8 last:pb-0">
              <span v-if="index < landing.process.length - 1" class="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-line" aria-hidden="true" />
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bronze font-display text-lg text-bronze">{{ index + 1 }}</span>
              <p class="pt-2 text-[15px] font-medium leading-6 text-graphite">{{ step }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="grain section-padding relative overflow-hidden bg-graphite text-white">
      <div class="container-page">
        <SectionTitle eyebrow="Практика" :title="landing.caseTitle" variant="light" />
        <div class="mt-14 grid gap-6 lg:grid-cols-2">
          <article v-for="item in landing.cases" :key="item.title" class="border border-white/10 p-7 sm:p-9">
            <h3 class="font-display text-2xl font-medium sm:text-3xl">{{ item.title }}</h3>
            <p class="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">Ситуация</p>
            <p class="mt-2 text-[15px] leading-7 text-white/65">{{ item.situation }}</p>
            <div class="mt-6 border-l-2 border-brass pl-4">
              <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">Результат</p>
              <p class="mt-2 text-[15px] leading-7 text-white/85">{{ item.result }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <FAQSection :items="landing.faq" index="" />
    <ConsultationFormSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Check, Phone, Scale } from 'lucide-vue-next'
import { contacts } from '~/data/site'
import type { LandingPageContent } from '~/data/landings'

defineProps<{ landing: LandingPageContent }>()
</script>
