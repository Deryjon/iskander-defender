<template>
  <article class="group flex flex-col border border-line bg-paper p-7 transition duration-500 hover:-translate-y-1 hover:border-bronze/40 hover:shadow-soft sm:p-8">
    <BaseBadge>{{ labels[legalCase.category] }}</BaseBadge>
    <h3 class="mt-6 font-display text-2xl font-medium leading-snug text-graphite">{{ legalCase.title }}</h3>
    <dl class="mt-6 grid gap-5 border-t border-line pt-5 text-sm leading-7">
      <div>
        <dt class="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">Ситуация</dt>
        <dd class="mt-1.5 text-steel">{{ legalCase.problem }}</dd>
      </div>
      <div>
        <dt class="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">Что сделали</dt>
        <dd class="mt-1.5 text-steel">{{ legalCase.action }}</dd>
      </div>
    </dl>
    <div class="mt-auto pt-6">
      <div class="border-l-2 border-bronze bg-ivory py-3 pl-4 pr-3">
        <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-bronze">Результат</p>
        <p class="mt-1.5 text-sm font-medium leading-6 text-graphite">{{ legalCase.result }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { LegalCase } from '~/types/case'

defineProps<{ legalCase: LegalCase }>()

const labels = {
  civil: 'Гражданское',
  criminal: 'Уголовное',
  administrative: 'Административное',
}
</script>
