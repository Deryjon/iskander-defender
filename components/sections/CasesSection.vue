<template>
  <section class="section-padding bg-white" id="cases">
    <div class="container-page">
      <SectionTitle
        eyebrow="Кейсы"
        title="Практические результаты по разным категориям дел"
        text="Работаем без раскрытия персональных данных и соблюдаем строгую конфиденциальность клиентов."
      />
      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <BaseCard v-for="item in cases" :key="`${item.category}-${item.situation}`" class="p-6">
          <BaseBadge>{{ item.category }}</BaseBadge>
          <dl class="mt-4 grid gap-4 text-sm leading-7">
            <div>
              <dt class="font-semibold text-graphite">Ситуация</dt>
              <dd class="text-steel">{{ item.situation }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-graphite">Что сделали</dt>
              <dd class="text-steel">{{ item.actions }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-graphite">Результат</dt>
              <dd class="text-graphite">{{ item.result }}</dd>
            </div>
          </dl>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cases } from '~/data/landing'
</script>
