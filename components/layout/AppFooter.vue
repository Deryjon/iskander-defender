<template>
  <footer class="bg-graphite pb-24 pt-14 text-white md:pb-10">
    <div class="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
      <div>
        <a href="#hero" class="font-display text-2xl font-extrabold">Iskander<span class="text-bronze">-Defender</span></a>
        <p class="mt-5 max-w-md leading-7 text-white/65">
          Премиальная адвокатская защита для частных лиц и бизнеса по гражданским, уголовным и административным делам.
        </p>
      </div>

      <nav class="grid gap-3 text-sm" aria-label="Навигация в подвале">
        <a v-for="item in navigationAnchors" :key="item.href" :href="item.href" class="text-white/70 hover:text-white">
          {{ item.label }}
        </a>
        <NuxtLink to="/privacy-policy" class="text-white/70 hover:text-white">Политика конфиденциальности</NuxtLink>
      </nav>

      <div class="grid gap-3 text-sm text-white/70">
        <a :href="contacts.phoneHref" class="hover:text-white">{{ contacts.phone }}</a>
        <a :href="`mailto:${contacts.email}`" class="hover:text-white">{{ contacts.email }}</a>
        <span>{{ contacts.address }}</span>
        <span>{{ contacts.schedule }}</span>
        <div class="mt-1 flex gap-3">
          <a :href="contacts.telegram" class="hover:text-white" target="_blank" rel="noopener noreferrer">Telegram</a>
          <span class="text-white/30">·</span>
          <a :href="contacts.whatsapp" class="hover:text-white" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </div>

    <div class="container-page mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
      © {{ new Date().getFullYear() }} Iskander-Defender. Все права защищены.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { contacts, navigationAnchors } from '~/data/landing'
</script>
