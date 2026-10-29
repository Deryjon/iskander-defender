<template>
  <footer class="bg-graphite pb-28 pt-16 text-white sm:pt-20 md:pb-10">
    <div class="container-page">
      <div class="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <NuxtLink to="/" class="font-display text-3xl font-semibold">Iskander<span class="text-brass">·</span>Defender</NuxtLink>
          <p class="mt-5 max-w-sm text-sm leading-7 text-white/50">
            Адвокатская защита для частных лиц и бизнеса по гражданским, уголовным и административным делам. Ташкент, с 2014 года.
          </p>
          <BaseButton :href="consultationHref" size="sm" class="mt-7" :icon-component="ArrowRight">Получить консультацию</BaseButton>
        </div>

        <nav aria-label="Навигация в подвале">
          <p class="text-[11px] font-semibold uppercase tracking-eyebrow text-brass">Разделы</p>
          <ul class="mt-5 grid gap-3 text-sm">
            <li v-for="item in navigationAnchors" :key="item.href">
              <a :href="item.href" class="link-underline text-white/65 transition hover:text-white">{{ item.label }}</a>
            </li>
          </ul>
        </nav>

        <div>
          <p class="text-[11px] font-semibold uppercase tracking-eyebrow text-brass">Контакты</p>
          <ul class="mt-5 grid gap-3 text-sm text-white/65">
            <li><a :href="contacts.phoneHref" class="link-underline font-semibold text-white">{{ contacts.phone }}</a></li>
            <li><a :href="`mailto:${contacts.email}`" class="link-underline hover:text-white">{{ contacts.email }}</a></li>
            <li>{{ contacts.address }}</li>
            <li>{{ contacts.schedule }}</li>
            <li class="flex gap-4 pt-2">
              <a :href="contacts.telegram" class="link-underline hover:text-white" target="_blank" rel="noopener noreferrer">Telegram</a>
              <a :href="contacts.whatsapp" class="link-underline hover:text-white" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-3 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <span>© {{ new Date().getFullYear() }} Iskander-Defender. Все права защищены.</span>
        <NuxtLink to="/privacy-policy" class="link-underline hover:text-white/70">Политика конфиденциальности</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { contacts, navigationAnchors } from '~/data/landing'

const consultationHref = useConsultationHref()
</script>
