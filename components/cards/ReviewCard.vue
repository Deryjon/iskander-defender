<template>
  <article class="border border-line bg-paper p-7 sm:p-8">
    <Icon name="lucide:quote" class="h-8 w-8 text-bronze" />
    <p class="mt-6 font-display text-xl leading-8 text-graphite">{{ review.text }}</p>
    <p class="mt-6 border-t border-line pt-4 text-sm font-semibold text-steel">{{ review.name }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{ review: { name: string; text: string } }>()
</script>
