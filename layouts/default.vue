<template>
  <div class="min-h-screen bg-ivory">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />

    <div class="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-graphite/95 p-3 text-white backdrop-blur-md md:hidden">
      <div class="grid grid-cols-2 gap-2">
        <BaseButton :href="contacts.phoneHref" variant="light" size="sm">Позвонить</BaseButton>
        <BaseButton :href="consultationHref" size="sm">Заявка</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contacts } from '~/data/landing'

const consultationHref = useConsultationHref()
</script>
