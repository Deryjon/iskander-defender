<template>
  <section class="section-padding bg-white">
    <div class="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <BaseSectionTitle eyebrow="Контакты" title="Свяжитесь с Iskander-Defender" text="Позвоните, напишите в мессенджер или оставьте заявку. Мы уточним задачу и предложим следующий шаг." />
        <div class="mt-8 grid gap-4">
          <a :href="contacts.phoneHref" class="flex gap-3 break-words rounded-2xl border border-line bg-ivory p-4 font-semibold"><Icon name="lucide:phone" class="h-5 w-5 shrink-0 text-bronze" />{{ contacts.phone }}</a>
          <a :href="`mailto:${contacts.email}`" class="flex gap-3 break-words rounded-2xl border border-line bg-ivory p-4 font-semibold"><Icon name="lucide:mail" class="h-5 w-5 shrink-0 text-bronze" />{{ contacts.email }}</a>
          <p class="flex gap-3 break-words rounded-2xl border border-line bg-ivory p-4 font-semibold"><Icon name="lucide:map-pin" class="h-5 w-5 shrink-0 text-bronze" />{{ contacts.address }}</p>
          <p class="flex gap-3 break-words rounded-2xl border border-line bg-ivory p-4 font-semibold"><Icon name="lucide:clock" class="h-5 w-5 shrink-0 text-bronze" />{{ contacts.schedule }}</p>
        </div>
      </div>
      <iframe
        :src="contacts.mapEmbed"
        title="Карта офиса Iskander-Defender"
        class="h-72 w-full rounded-2xl border border-line sm:h-96 lg:h-[460px]"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { contacts } from '~/data/site'
</script>
