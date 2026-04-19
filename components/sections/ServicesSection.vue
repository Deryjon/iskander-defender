<template>
  <section id="services" class="section-padding bg-ivory">
    <div class="container-page">
      <SectionTitle
        eyebrow="Услуги"
        title="Правовая защита по ключевым направлениям"
        text="Работаем с частными лицами и бизнесом по гражданским, уголовным и административным делам."
      />

      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <BaseCard v-for="service in services" :key="service.key" class="p-6 sm:p-7">
          <component :is="iconMap[service.key]" class="h-8 w-8 text-bronze" />
          <h3 class="mt-5 font-display text-2xl font-bold text-graphite">{{ service.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-steel">{{ service.description }}</p>
          <ul class="mt-5 grid gap-2 text-sm text-graphite/90">
            <li v-for="point in service.points" :key="point" class="flex items-start gap-2">
              <Dot class="mt-1 h-4 w-4 shrink-0 text-bronze" />
              <span>{{ point }}</span>
            </li>
          </ul>
          <BaseButton href="#consultation" variant="ghost" class="mt-6" :icon-component="ArrowRight">Оставить заявку</BaseButton>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Dot, Landmark, Scale, ShieldAlert } from 'lucide-vue-next'
import { services } from '~/data/landing'

const iconMap = {
  civil: Scale,
  criminal: ShieldAlert,
  administrative: Landmark,
}
</script>
