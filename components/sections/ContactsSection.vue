<template>
  <section id="contacts" class="section-padding bg-ivory">
    <div class="container-page">
      <SectionTitle
        :index="index"
        eyebrow="Контакты"
        title="Приходите или свяжитесь удобным способом"
        text="Телефон, мессенджеры или электронная почта — отвечаем на всех каналах."
        aside
      />
      <div class="mt-14 grid border border-line bg-paper lg:grid-cols-[0.9fr_1.1fr]">
        <div class="p-7 sm:p-10">
          <dl class="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div v-for="item in items" :key="item.label" class="min-w-0">
              <dt class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-bronze">
                <component :is="item.icon" class="h-3.5 w-3.5" aria-hidden="true" />
                {{ item.label }}
              </dt>
              <dd class="mt-2.5">
                <a v-if="item.href" :href="item.href" class="link-underline break-words font-display text-xl font-medium text-graphite sm:text-2xl">{{ item.value }}</a>
                <span v-else class="text-[15px] leading-7 text-graphite">{{ item.value }}</span>
              </dd>
            </div>
          </dl>
          <div class="mt-10 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row">
            <BaseButton :href="contacts.telegram" variant="secondary" class="w-full sm:w-auto" :icon-component="Send">Telegram</BaseButton>
            <BaseButton :href="contacts.whatsapp" variant="secondary" class="w-full sm:w-auto" :icon-component="MessageCircleMore">WhatsApp</BaseButton>
          </div>
        </div>

        <iframe
          :src="contacts.mapEmbed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="h-80 w-full border-0 grayscale-[60%] lg:h-full lg:min-h-[440px]"
          title="Карта расположения офиса Iskander-Defender"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Clock3, Mail, MapPin, MessageCircleMore, Phone, Send } from 'lucide-vue-next'
import { contacts } from '~/data/landing'

withDefaults(defineProps<{ index?: string }>(), { index: '08' })

const items = [
  { label: 'Телефон', value: contacts.phone, href: contacts.phoneHref, icon: Phone },
  { label: 'Email', value: contacts.email, href: `mailto:${contacts.email}`, icon: Mail },
  { label: 'Адрес', value: contacts.address, icon: MapPin },
  { label: 'График работы', value: contacts.schedule, icon: Clock3 },
]
</script>
