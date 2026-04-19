<template>
  <label class="block">
    <span class="mb-2 block text-sm font-semibold text-graphite">{{ label }}</span>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :class="[
        'min-h-12 w-full rounded-xl border bg-white px-4 text-sm text-graphite transition placeholder:text-steel focus:border-bronze',
        error ? 'border-red-300' : 'border-line',
      ]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <span v-if="error" class="mt-2 block text-sm text-red-700">{{ error }}</span>
  </label>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    label: string
    placeholder?: string
    type?: string
    autocomplete?: string
    error?: string
  }>(),
  { type: 'text' },
)

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
