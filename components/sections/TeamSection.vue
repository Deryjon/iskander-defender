<template>
  <section class="section-padding bg-ivory" id="team">
    <div class="container-page">
      <SectionTitle
        eyebrow="Команда"
        title="Профильные адвокаты и юристы"
        text="Над каждым делом работает специалист с релевантной практикой и персональной ответственностью за результат процесса."
      />
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <BaseCard v-for="member in team" :key="member.name" class="overflow-hidden p-0">
          <NuxtImg :src="member.image" :alt="member.name" class="h-56 w-full object-cover" sizes="sm:100vw md:50vw lg:320px" />
          <div class="p-5">
            <h3 class="font-display text-xl font-bold text-graphite">{{ member.name }}</h3>
            <p class="mt-1 text-sm font-semibold text-bronze">{{ member.position }}</p>
            <p class="mt-3 text-sm leading-7 text-steel">{{ member.specialization }}</p>
            <p class="mt-3 text-sm font-semibold text-graphite">{{ member.experience }}</p>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { team } from '~/data/landing'
</script>
