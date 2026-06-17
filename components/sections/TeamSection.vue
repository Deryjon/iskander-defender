<template>
  <section class="section-padding bg-ivory" id="team">
    <div class="container-page">
      <SectionTitle
        eyebrow="Команда"
        title="Адвокаты с многолетней практикой"
        text="Каждое дело ведётся лично партнёром с профильным опытом и персональной ответственностью за результат."
      />
      <div class="mt-10 grid gap-6 sm:grid-cols-2">
        <BaseCard v-for="member in team" :key="member.name" class="overflow-hidden p-0">
          <div v-if="member.image" class="h-[480px] w-full overflow-hidden">
            <NuxtImg :src="member.image" :alt="member.name" class="h-full w-full object-cover object-top " sizes="sm:100vw md:50vw lg:640px" />
          </div>
          <div v-else class="flex h-56 w-full items-center justify-center bg-graphite/5">
            <UserRound class="h-20 w-20 text-graphite/20" />
          </div>
          <div class="p-6 sm:p-7">
            <h3 class="font-display text-xl font-bold text-graphite sm:text-2xl">{{ member.name }}</h3>
            <p class="mt-1.5 text-sm font-semibold text-bronze">{{ member.position }}</p>
            <div class="mt-4 inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-bronze/10 px-3 py-1 text-xs font-semibold text-bronze">
              <Award class="h-3.5 w-3.5" />
              {{ member.experience }}
            </div>
            <p class="mt-4 text-sm leading-7 text-steel">{{ member.specialization }}</p>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Award, UserRound } from 'lucide-vue-next'
import { team } from '~/data/landing'
</script>
