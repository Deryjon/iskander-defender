<template>
  <section id="contacts" class="section-padding bg-white">
    <div class="container-page">
      <SectionTitle
        eyebrow="Контакты"
        title="Связь с адвокатской фирмой и локация"
        text="Выберите удобный канал связи: телефон, мессенджеры или электронная почта."
      />
      <div class="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <BaseCard class="p-5 sm:p-7">
          <ul class="grid gap-5 text-sm leading-7 text-steel">
            <li>
              <p class="text-xs uppercase tracking-[0.16em] text-bronze">Телефон</p>
              <a :href="contacts.phoneHref" class="mt-1 block break-words text-base font-semibold text-graphite hover:text-navy sm:text-lg">{{ contacts.phone }}</a>
            </li>
            <li>
              <p class="text-xs uppercase tracking-[0.16em] text-bronze">Email</p>
              <a :href="`mailto:${contacts.email}`" class="mt-1 block break-words text-base font-semibold text-graphite hover:text-navy sm:text-lg">{{ contacts.email }}</a>
            </li>
            <li>
              <p class="text-xs uppercase tracking-[0.16em] text-bronze">Адрес</p>
              <p class="mt-1 text-base text-graphite">{{ contacts.address }}</p>
            </li>
            <li>
              <p class="text-xs uppercase tracking-[0.16em] text-bronze">График работы</p>
              <p class="mt-1 text-base text-graphite">{{ contacts.schedule }}</p>
            </li>
          </ul>
          <div class="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            <BaseButton :href="contacts.telegram" variant="secondary" class="w-full sm:w-auto" :icon-component="Send">Telegram</BaseButton>
            <BaseButton :href="contacts.whatsapp" variant="secondary" class="w-full sm:w-auto" :icon-component="MessageCircleMore">WhatsApp</BaseButton>
          </div>
        </BaseCard>

        <BaseCard class="overflow-hidden p-0">
          <iframe
            :src="contacts.mapEmbed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="h-72 w-full border-0 sm:h-[380px]"
            title="Карта расположения офиса Iskander-Defender"
          />
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MessageCircleMore, Send } from 'lucide-vue-next'
import { contacts } from '~/data/landing'
</script>
