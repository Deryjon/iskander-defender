<template>
  <label class="flex items-start gap-3 text-sm leading-6 text-steel">
    <input
      :checked="modelValue"
      type="checkbox"
      class="mt-1 h-4 w-4 rounded border-line text-bronze focus:ring-bronze"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <span>
      <slot>{{ label }}</slot>
    </span>
  </label>
  <p v-if="error" class="mt-2 text-sm text-red-700">{{ error }}</p>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
  label?: string
  error?: string
}>()

defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>
