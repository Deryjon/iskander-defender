<template>
  <section class="section-padding bg-ivory">
    <div class="container-page">
      <BaseSectionTitle
        eyebrow="Практики"
        title="Три направления защиты"
        text="Каждая практика построена как отдельный рабочий контур: оценка рисков, стратегия, документы и представительство."
      />
      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <ServiceCard v-for="service in services" :key="service.key" :service="service" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '~/data/services'
</script>
