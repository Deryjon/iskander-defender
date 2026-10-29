<template>
  <label class="block">
    <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-graphite/70">{{ label }}</span>
    <span class="relative block">
    <select
      :value="modelValue"
      :class="[
        'min-h-12 w-full appearance-none rounded-sm pr-10 border bg-paper px-4 text-sm text-graphite transition outline-none focus:border-bronze focus:bg-white focus:ring-1 focus:ring-bronze',
        error ? 'border-red-300' : 'border-line',
      ]"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <ChevronDown class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-bronze" aria-hidden="true" />
    </span>
    <span v-if="error" class="mt-2 block text-sm text-red-700">{{ error }}</span>
  </label>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

defineProps<{
  modelValue: string
  label: string
  options: Array<{ label: string; value: string }>
  error?: string
}>()

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
