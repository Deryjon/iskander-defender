<template>
  <form class="grid gap-4" @submit.prevent="sent = true">
    <BaseInput v-model="name" label="Имя" placeholder="Ваше имя" />
    <BaseInput v-model="contact" label="Телефон или Telegram" placeholder="+998 ... или @username" />
    <BaseTextarea v-model="question" label="Вопрос" placeholder="Кратко опишите ситуацию" />
    <BaseButton type="submit" icon="lucide:message-square">Задать вопрос</BaseButton>
    <p v-if="sent" class="text-sm font-semibold text-bronze">Вопрос отправлен.</p>
  </form>
</template>

<script setup lang="ts">
const name = ref('')
const contact = ref('')
const question = ref('')
const sent = ref(false)
</script>
