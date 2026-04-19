<template>
  <label class="block">
    <span class="mb-2 block text-sm font-semibold text-graphite">{{ label }}</span>
    <select
      :value="modelValue"
      :class="[
        'min-h-12 w-full rounded-xl border bg-white px-4 text-sm text-graphite transition focus:border-bronze',
        error ? 'border-red-300' : 'border-line',
      ]"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <span v-if="error" class="mt-2 block text-sm text-red-700">{{ error }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  label: string
  options: Array<{ label: string; value: string }>
  error?: string
}>()

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
