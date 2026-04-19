<template>
  <Transition name="fade">
    <div v-if="open" class="fixed inset-0 z-[70] overflow-y-auto bg-graphite/70 lg:hidden" @click.self="$emit('close')">
      <div class="ml-auto flex min-h-full w-full max-w-sm flex-col bg-ivory px-4 pb-6 pt-5 text-graphite shadow-deep sm:px-6 sm:pb-8 sm:pt-6">
        <div class="flex items-center justify-between gap-3">
          <NuxtLink to="/" class="font-display text-lg font-extrabold sm:text-xl" @click="$emit('close')">
            Iskander<span class="text-bronze">-Defender</span>
          </NuxtLink>
          <button class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line" aria-label="Закрыть меню" @click="$emit('close')">
            <X class="h-5 w-5" />
          </button>
        </div>

        <nav class="mt-6 grid gap-2 sm:mt-8" aria-label="Мобильная навигация">
          <a
            v-for="item in navigationAnchors"
            :key="item.href"
            :href="item.href"
            class="rounded-xl px-3 py-3 text-base font-semibold hover:bg-white"
            @click="$emit('close')"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="mt-auto grid gap-3">
          <BaseButton :href="contacts.phoneHref" variant="secondary">{{ contacts.phone }}</BaseButton>
          <BaseButton href="#consultation" :icon-component="SendHorizontal" @click="$emit('close')">Получить консультацию</BaseButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { SendHorizontal, X } from 'lucide-vue-next'
import { contacts, navigationAnchors } from '~/data/landing'

defineProps<{ open: boolean }>()
defineEmits<{ close: [] }>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
