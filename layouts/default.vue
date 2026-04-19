<template>
  <div class="min-h-screen bg-ivory">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />

    <div class="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-graphite/95 p-3 text-white shadow-deep backdrop-blur md:hidden">
      <div class="grid grid-cols-2 gap-2">
        <BaseButton :href="contacts.phoneHref" variant="secondary" size="sm">Позвонить</BaseButton>
        <BaseButton href="#consultation" size="sm">Заявка</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contacts } from '~/data/landing'
</script>
