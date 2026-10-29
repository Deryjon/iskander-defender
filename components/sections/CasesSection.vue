<template>
  <section id="cases" class="section-padding bg-paper">
    <div class="container-page">
      <SectionTitle
        index="05"
        eyebrow="Кейсы"
        title="Практические результаты по разным категориям дел"
        text="Публикуем без раскрытия персональных данных — конфиденциальность клиентов для нас безусловна."
        aside
      />
      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <article
          v-for="item in cases"
          :key="`${item.category}-${item.situation}`"
          class="group flex flex-col border border-line bg-ivory/60 p-7 transition duration-500 hover:-translate-y-1 hover:border-bronze/40 hover:bg-paper hover:shadow-soft sm:p-8"
        >
          <BaseBadge>{{ item.category }}</BaseBadge>
          <h3 class="mt-6 font-display text-2xl font-medium leading-snug text-graphite">{{ item.situation }}</h3>
          <div class="mt-6 border-t border-line pt-5">
            <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">Что сделали</p>
            <p class="mt-2 text-sm leading-7 text-steel">{{ item.actions }}</p>
          </div>
          <div class="mt-auto pt-6">
            <div class="border-l-2 border-bronze bg-paper py-3 pl-4 pr-3 transition group-hover:bg-ivory">
              <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-bronze">Результат</p>
              <p class="mt-1.5 text-sm font-medium leading-6 text-graphite">{{ item.result }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cases } from '~/data/landing'
</script>
