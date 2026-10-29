<template>
  <section id="services" class="section-padding bg-ivory">
    <div class="container-page">
      <SectionTitle
        index="01"
        eyebrow="Практика"
        title="Правовая защита по ключевым направлениям"
        text="Работаем с частными лицами и бизнесом. Каждое направление ведёт партнёр с профильным опытом."
        aside
      />

      <div class="mt-14 grid border-t border-line lg:grid-cols-3">
        <article
          v-for="(service, i) in services"
          :key="service.key"
          class="group relative flex flex-col border-b border-line py-10 transition-colors duration-500 lg:border-b-0 lg:px-10 lg:py-12 lg:first:pl-0 lg:last:pr-0"
          :class="i > 0 ? 'lg:border-l' : ''"
        >
          <div class="flex items-start justify-between">
            <span class="flex h-14 w-14 items-center justify-center border border-line bg-paper text-bronze transition duration-500 group-hover:border-bronze group-hover:bg-bronze group-hover:text-white">
              <component :is="iconMap[service.key]" class="h-6 w-6" stroke-width="1.5" />
            </span>
            <span class="font-display text-5xl font-medium text-line transition-colors duration-500 group-hover:text-bronze/30">0{{ i + 1 }}</span>
          </div>
          <h3 class="mt-8 font-display text-3xl font-medium text-graphite">{{ service.title }}</h3>
          <p class="mt-4 text-[15px] leading-7 text-steel">{{ service.description }}</p>
          <ul class="mt-7 grid gap-3 text-sm text-graphite">
            <li v-for="point in service.points" :key="point" class="flex items-center gap-3">
              <span class="h-px w-4 shrink-0 bg-bronze" aria-hidden="true" />
              <span>{{ point }}</span>
            </li>
          </ul>
          <div class="mt-auto pt-9">
            <BaseButton href="#consultation" variant="ghost" :icon-component="ArrowRight" class="flex-row-reverse">Обсудить дело</BaseButton>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Landmark, Scale, ShieldAlert } from 'lucide-vue-next'
import { services } from '~/data/landing'

const iconMap = {
  civil: Scale,
  criminal: ShieldAlert,
  administrative: Landmark,
}
</script>
