<template>
  <section id="team" class="section-padding bg-ivory">
    <div class="container-page">
      <SectionTitle
        index="06"
        eyebrow="Команда"
        title="Адвокаты с многолетней практикой"
        text="Каждое дело ведётся лично партнёром — с профильным опытом и персональной ответственностью за результат."
        aside
      />
      <div class="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-14">
        <article v-for="member in team" :key="member.name" class="group">
          <div class="relative aspect-[4/5] overflow-hidden bg-line">
            <NuxtImg
              v-if="member.image"
              format="webp"
              quality="80"
              width="1047"
              height="1400"
              loading="lazy"
              :src="member.image"
              :alt="member.name"
              class="h-full w-full object-cover object-top grayscale-[35%] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              sizes="sm:100vw md:50vw lg:600px"
            />
            <div v-else class="flex h-full w-full items-center justify-center">
              <UserRound class="h-20 w-20 text-graphite/20" />
            </div>
            <span class="absolute left-5 top-5 bg-graphite/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brass backdrop-blur-sm">
              {{ member.experience }}
            </span>
          </div>
          <div class="mt-6 flex items-start justify-between gap-6 border-b border-line pb-6">
            <div>
              <h3 class="font-display text-2xl font-medium text-graphite sm:text-3xl">{{ member.name }}</h3>
              <p class="mt-1.5 text-sm font-semibold text-bronze">{{ member.position }}</p>
            </div>
            <Award class="mt-1 h-6 w-6 shrink-0 text-bronze/60" stroke-width="1.5" />
          </div>
          <p class="mt-4 text-[15px] leading-7 text-steel">{{ member.specialization }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Award, UserRound } from 'lucide-vue-next'
import { team } from '~/data/landing'
</script>
