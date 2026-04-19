<template>
  <article class="rounded-2xl border border-line bg-white p-6 shadow-soft">
    <Icon name="lucide:quote" class="h-8 w-8 text-bronze" />
    <p class="mt-5 leading-8 text-graphite">{{ review.text }}</p>
    <p class="mt-5 text-sm font-semibold text-steel">{{ review.name }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{ review: { name: string; text: string } }>()
</script>
