<template>
  <div>
    <section class="dark-panel overflow-hidden">
      <div class="container-page grid items-center gap-8 py-12 sm:gap-10 sm:py-16 lg:min-h-[720px] lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
        <div class="text-mobile-safe">
          <BaseBadge>{{ landing.badge }}</BaseBadge>
          <h1 class="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:mt-6 sm:text-5xl lg:text-7xl">
            {{ landing.title }}
          </h1>
          <p class="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:mt-6 sm:text-xl sm:leading-9">
            {{ landing.subtitle }}
          </p>
          <div class="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-row">
            <BaseButton href="#consultation" size="lg" class="w-full sm:w-auto" icon="lucide:send">Получить консультацию</BaseButton>
            <BaseButton :href="contacts.phoneHref" size="lg" variant="secondary" class="w-full sm:w-auto" icon="lucide:phone">
              {{ landing.urgent ? 'Позвонить срочно' : 'Позвонить' }}
            </BaseButton>
          </div>
          <div class="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
            <div v-for="stat in landing.stats" :key="stat.label" class="border-l border-bronze/45 pl-4">
              <p class="font-display text-3xl font-extrabold text-white">{{ stat.value }}</p>
              <p class="mt-2 text-sm leading-5 text-white/58">{{ stat.label }}</p>
            </div>
          </div>
        </div>
        <div class="relative">
          <NuxtImg :src="landing.image" :alt="landing.title" class="h-72 w-full rounded-2xl object-cover shadow-deep sm:h-96 lg:h-[560px]" preload />
          <div class="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/15 bg-graphite/85 p-4 text-white backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-bronze">Iskander-Defender</p>
            <p class="mt-2 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">Юридическая позиция строится на фактах, сроках, доказательствах и реальном интересе клиента.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <BaseSectionTitle eyebrow="Ситуации" :title="landing.painTitle" text="Если вы узнали свою ситуацию в списке, лучше получить правовую оценку до следующего действия или подписи." />
        <div class="grid gap-3">
          <div v-for="pain in landing.pains" :key="pain" class="flex gap-3 rounded-2xl border border-line bg-ivory p-5">
            <Icon name="lucide:alert-circle" class="mt-1 h-5 w-5 shrink-0 text-bronze" />
            <p class="font-semibold leading-7">{{ pain }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-ivory">
      <div class="container-page">
        <BaseSectionTitle eyebrow="Услуги" :title="landing.serviceTitle" text="Лендинг закрывает ключевые вопросы клиента: что случилось, что мы делаем, какой порядок работы и как оставить заявку." center />
        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <BaseCard v-for="service in landing.services" :key="service.title">
            <Icon name="lucide:scale" class="h-8 w-8 text-bronze" />
            <h2 class="mt-5 font-display text-xl font-bold">{{ service.title }}</h2>
            <p class="mt-3 leading-7 text-steel">{{ service.text }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <BaseSectionTitle eyebrow="Результат" :title="landing.resultTitle" />
          <div class="mt-8 grid gap-3">
            <p v-for="result in landing.results" :key="result" class="flex gap-3 rounded-2xl border border-line bg-ivory p-4 font-semibold">
              <Icon name="lucide:check-circle-2" class="mt-0.5 h-5 w-5 shrink-0 text-bronze" />
              {{ result }}
            </p>
          </div>
        </div>
        <div>
          <BaseSectionTitle eyebrow="Этапы" title="Понятный порядок работы" />
          <div class="mt-8 grid gap-3">
            <div v-for="(step, index) in landing.process" :key="step" class="grid grid-cols-[44px_1fr] items-center gap-3 rounded-2xl border border-line bg-ivory p-4 sm:grid-cols-[56px_1fr] sm:gap-4">
              <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-graphite font-display text-base font-extrabold text-white sm:h-12 sm:w-12 sm:text-lg">
                {{ index + 1 }}
              </span>
              <p class="font-semibold">{{ step }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-graphite text-white">
      <div class="container-page">
        <div class="max-w-3xl">
          <p class="eyebrow">Практика</p>
          <h2 class="mt-3 font-display text-3xl font-bold sm:text-5xl">{{ landing.caseTitle }}</h2>
        </div>
        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <article v-for="item in landing.cases" :key="item.title" class="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 class="font-display text-2xl font-bold">{{ item.title }}</h3>
            <p class="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-bronze">Ситуация</p>
            <p class="mt-2 leading-7 text-white/70">{{ item.situation }}</p>
            <p class="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-bronze">Результат</p>
            <p class="mt-2 leading-7 text-white/70">{{ item.result }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding bg-ivory">
      <div class="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <BaseSectionTitle eyebrow="FAQ" title="Частые вопросы по услуге" />
        <div class="grid gap-3">
          <details v-for="item in landing.faq" :key="item.question" class="rounded-2xl border border-line bg-white p-5">
            <summary class="cursor-pointer font-display text-lg font-bold">{{ item.question }}</summary>
            <p class="mt-4 leading-7 text-steel">{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <ConsultationFormSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { contacts } from '~/data/site'
import type { LandingPageContent } from '~/data/landings'

defineProps<{ landing: LandingPageContent }>()
</script>
