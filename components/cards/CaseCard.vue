<template>
  <article class="rounded-2xl border border-line bg-white p-6 shadow-soft">
    <BaseBadge>{{ labels[legalCase.category] }}</BaseBadge>
    <h3 class="mt-5 font-display text-2xl font-bold">{{ legalCase.title }}</h3>
    <dl class="mt-5 grid gap-4 text-sm leading-7">
      <div>
        <dt class="font-semibold text-graphite">Ситуация</dt>
        <dd class="text-steel">{{ legalCase.problem }}</dd>
      </div>
      <div>
        <dt class="font-semibold text-graphite">Действия</dt>
        <dd class="text-steel">{{ legalCase.action }}</dd>
      </div>
      <div>
        <dt class="font-semibold text-graphite">Результат</dt>
        <dd class="text-steel">{{ legalCase.result }}</dd>
      </div>
    </dl>
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
