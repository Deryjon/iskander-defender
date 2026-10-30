<template>
  <div>
    <PageHero
      eyebrow="О фирме"
      title="Юридическая защита с дисциплиной процесса"
      text="Iskander-Defender работает как партнёр клиента в сложных правовых ситуациях: оценивает риски, выстраивает стратегию и сопровождает дело до результата."
      :crumbs="[{ label: 'О фирме' }]"
    >
      <template #aside>
        <dl class="grid grid-cols-2 border-l border-t border-white/10">
          <div v-for="stat in stats" :key="stat.label" class="border-b border-r border-white/10 p-6 sm:p-8">
            <dt class="sr-only">{{ stat.label }}</dt>
            <dd class="font-display text-4xl font-medium text-brass sm:text-5xl">{{ stat.value }}</dd>
            <dd class="mt-2 text-xs leading-5 text-white/50">{{ stat.label }}</dd>
          </div>
        </dl>
      </template>
    </PageHero>

    <section class="section-padding bg-paper">
      <div class="container-page">
        <BaseSectionTitle eyebrow="Принципы" title="На чём держится наша работа" />
        <div class="mt-14 grid border-t border-line lg:grid-cols-3">
          <article
            v-for="(item, i) in principles"
            :key="item.title"
            class="border-b border-line py-10 lg:border-b-0 lg:px-10 lg:first:pl-0 lg:last:pr-0"
            :class="i > 0 ? 'lg:border-l' : ''"
          >
            <span class="font-display text-5xl font-medium text-bronze/30">0{{ i + 1 }}</span>
            <h2 class="mt-6 font-display text-3xl font-medium text-graphite">{{ item.title }}</h2>
            <p class="mt-4 text-[15px] leading-7 text-steel">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
    <CTASection />
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '2014', label: 'год основания фирмы' },
  { value: '35+', label: 'лет практики партнёров' },
  { value: '5000+', label: 'обслуженных клиентов' },
  { value: '3', label: 'ключевых направления права' },
]

const principles = [
  { title: 'Миссия', text: 'Защищать интересы клиента спокойно, точно и профессионально, переводя сложную правовую ситуацию в понятный план действий.' },
  { title: 'Ценности', text: 'Конфиденциальность, честная оценка перспектив, внимательность к деталям, уважение к срокам и доказательствам.' },
  { title: 'Подход', text: 'Название Iskander-Defender отражает идею сильной, современной и структурной правовой защиты.' },
]

usePageSeo({
  title: 'Об адвокатской фирме в Ташкенте',
  description: 'История, миссия, ценности и философия работы адвокатской фирмы Iskander-Defender.',
  path: '/about',
})
</script>
