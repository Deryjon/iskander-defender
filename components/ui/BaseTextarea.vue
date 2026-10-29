<template>
  <label class="block">
    <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-graphite/70">{{ label }}</span>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      rows="5"
      :class="[
        'w-full rounded-sm border bg-paper px-4 py-3 text-sm text-graphite transition placeholder:text-steel/60 outline-none focus:border-bronze focus:bg-white focus:ring-1 focus:ring-bronze',
        error ? 'border-red-300' : 'border-line',
      ]"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <span v-if="error" class="mt-2 block text-sm text-red-700">{{ error }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  label: string
  placeholder?: string
  error?: string
}>()

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
