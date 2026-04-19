<template>
  <div>
    <section class="dark-panel">
      <div class="container-page grid gap-10 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-28">
        <div>
          <BaseBadge>О фирме</BaseBadge>
          <h1 class="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">Юридическая защита с дисциплиной процесса</h1>
          <p class="mt-6 text-xl leading-9 text-white/72">Iskander-Defender работает как партнер клиента в сложных правовых ситуациях: оценивает риски, выстраивает стратегию и сопровождает дело до результата.</p>
        </div>
        <NuxtImg src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="Переговоры в юридической фирме" class="h-[460px] w-full rounded-2xl object-cover shadow-deep" />
      </div>
    </section>
    <section class="section-padding bg-white">
      <div class="container-page grid gap-8 lg:grid-cols-3">
        <BaseCard>
          <h2 class="font-display text-2xl font-bold">Миссия</h2>
          <p class="mt-4 leading-8 text-steel">Защищать интересы клиента спокойно, точно и профессионально, переводя сложную правовую ситуацию в понятный план действий.</p>
        </BaseCard>
        <BaseCard>
          <h2 class="font-display text-2xl font-bold">Ценности</h2>
          <p class="mt-4 leading-8 text-steel">Конфиденциальность, честная оценка перспектив, внимательность к деталям, уважение к срокам и доказательствам.</p>
        </BaseCard>
        <BaseCard>
          <h2 class="font-display text-2xl font-bold">Бренд</h2>
          <p class="mt-4 leading-8 text-steel">Название Iskander-Defender отражает идею сильной, современной и структурной правовой защиты.</p>
        </BaseCard>
      </div>
    </section>
    <CTASection />
    <ConsultationFormSection />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'О фирме',
  description: 'История, миссия, ценности и философия работы адвокатской фирмы Iskander-Defender.',
  path: '/about',
})
</script>
