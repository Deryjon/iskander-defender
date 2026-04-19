<template>
  <section class="section-padding bg-white">
    <div class="container-page">
      <BaseSectionTitle eyebrow="Почему мы" title="Доверие создается процессом" text="Клиент получает не общие обещания, а управляемую юридическую работу с понятными этапами и ответственностью." />
      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <BaseCard v-for="item in advantages" :key="item.title">
          <Icon :name="item.icon" class="h-8 w-8 text-bronze" />
          <h3 class="mt-5 font-display text-xl font-bold">{{ item.title }}</h3>
          <p class="mt-3 leading-7 text-steel">{{ item.text }}</p>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { advantages } from '~/data/site'
</script>
