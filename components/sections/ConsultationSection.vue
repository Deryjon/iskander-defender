<template>
  <section id="consultation" class="section-padding bg-ivory">
    <div class="container-page">
      <div class="grid gap-6 rounded-2xl border border-line bg-white p-4 shadow-soft sm:gap-8 sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:p-10">
        <div class="text-mobile-safe">
          <p class="eyebrow">Консультация</p>
          <h2 class="mt-3 font-display text-2xl font-extrabold leading-tight text-graphite sm:text-4xl">
            Получите стратегию защиты по вашему делу
          </h2>
          <p class="mt-4 text-sm leading-7 text-steel sm:text-base sm:leading-8">
            Оставьте заявку, и мы свяжемся с вами, уточним детали ситуации и предложим первичный план действий.
          </p>
          <ul class="mt-6 grid gap-3">
            <li class="flex items-start gap-3 text-sm text-graphite">
              <CircleCheck class="mt-0.5 h-5 w-5 shrink-0 text-bronze" />
              Первичный ответ в рабочее время максимально быстро
            </li>
            <li class="flex items-start gap-3 text-sm text-graphite">
              <CircleCheck class="mt-0.5 h-5 w-5 shrink-0 text-bronze" />
              Понятная структура работы и фиксированные этапы
            </li>
            <li class="flex items-start gap-3 text-sm text-graphite">
              <CircleCheck class="mt-0.5 h-5 w-5 shrink-0 text-bronze" />
              Конфиденциальный формат взаимодействия
            </li>
          </ul>
        </div>

        <BaseCard class="p-4 sm:p-6">
          <ConsultationForm />
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next'
</script>
