<template>
  <section class="section-padding bg-ivory">
    <div class="container-page">
      <BaseSectionTitle eyebrow="Отзывы" title="Что ценят клиенты" center />
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <ReviewCard v-for="review in testimonials" :key="review.name" :review="review" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { testimonials } from '~/data/faq'
</script>
