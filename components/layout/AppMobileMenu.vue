<template>
  <Transition name="fade">
    <div v-if="open" class="fixed inset-0 z-[70] overflow-y-auto bg-graphite/80 backdrop-blur-sm lg:hidden" @click.self="$emit('close')">
      <div class="ml-auto flex min-h-full w-full max-w-sm flex-col bg-graphite px-5 pb-8 pt-5 text-white sm:px-7">
        <div class="flex items-center justify-between gap-3">
          <NuxtLink to="/" class="font-display text-xl font-semibold" @click="$emit('close')">
            Iskander<span class="text-brass">·</span>Defender
          </NuxtLink>
          <button class="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/20" aria-label="Закрыть меню" @click="$emit('close')">
            <X class="h-5 w-5" />
          </button>
        </div>

        <nav class="mt-10 grid" aria-label="Мобильная навигация">
          <a
            v-for="(item, index) in navigationAnchors"
            :key="item.href"
            :href="item.href"
            class="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-2xl font-medium transition hover:text-brass"
            @click="$emit('close')"
          >
            <span class="font-sans text-xs text-brass">0{{ index + 1 }}</span>
            {{ item.label }}
          </a>
        </nav>

        <div class="mt-auto grid gap-3 pt-10">
          <BaseButton :href="contacts.phoneHref" variant="light" :icon-component="Phone">{{ contacts.phone }}</BaseButton>
          <BaseButton :href="consultationHref" @click="$emit('close')">Получить консультацию</BaseButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { Phone, X } from 'lucide-vue-next'
import { contacts, navigationAnchors } from '~/data/landing'

const consultationHref = useConsultationHref()

defineProps<{ open: boolean }>()
defineEmits<{ close: [] }>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
