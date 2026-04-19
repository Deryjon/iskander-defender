<template>
  <section class="section-padding bg-white" id="reviews">
    <div class="container-page">
      <SectionTitle
        eyebrow="Отзывы"
        title="Что говорят клиенты"
        text="Сдержанные, реалистичные отзывы о качестве сопровождения и уровне юридической защиты."
      />
      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <BaseCard v-for="item in reviews" :key="item.client" class="p-6">
          <Quote class="h-6 w-6 text-bronze" />
          <p class="mt-4 text-sm leading-7 text-steel">{{ item.text }}</p>
          <p class="mt-6 font-display text-lg font-bold text-graphite">{{ item.client }}</p>
          <p class="text-xs uppercase tracking-[0.16em] text-bronze">{{ item.category }}</p>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import { reviews } from '~/data/landing'
</script>
