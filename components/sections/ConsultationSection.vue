<template>
  <section id="consultation" class="grain relative overflow-hidden bg-graphite py-16 text-white sm:py-24 lg:py-32">
    <div class="pointer-events-none absolute -left-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-brass/[0.06] blur-3xl" aria-hidden="true" />
    <div class="container-page relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div class="text-mobile-safe">
        <p class="eyebrow !text-brass">Консультация</p>
        <h2 class="mt-5 font-display text-[2.1rem] font-medium leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
          Получите стратегию защиты <em class="text-brass">по вашему делу</em>
        </h2>
        <p class="mt-6 max-w-lg text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
          Оставьте заявку — мы свяжемся с вами, уточним детали ситуации и предложим первичный план действий.
        </p>
        <ul class="mt-10 grid gap-5">
          <li v-for="item in promises" :key="item.title" class="flex items-start gap-4">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-brass">
              <component :is="item.icon" class="h-4 w-4" stroke-width="1.75" />
            </span>
            <div>
              <p class="font-semibold">{{ item.title }}</p>
              <p class="mt-0.5 text-sm text-white/50">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="bg-paper p-6 text-graphite shadow-deep sm:p-10">
        <p class="font-display text-2xl font-medium">Заявка на консультацию</p>
        <p class="mt-1.5 text-sm text-steel">Заполнение займёт меньше минуты</p>
        <div class="my-7 h-px bg-line" />
        <ConsultationForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Clock3, ListChecks, LockKeyhole } from 'lucide-vue-next'

const promises = [
  { icon: Clock3, title: 'Быстрый ответ', text: 'Перезвоним в рабочее время в течение 30 минут' },
  { icon: ListChecks, title: 'Понятные этапы', text: 'Фиксированная структура работы и прозрачные сроки' },
  { icon: LockKeyhole, title: 'Конфиденциально', text: 'Информация по делу защищена адвокатской тайной' },
]
</script>
