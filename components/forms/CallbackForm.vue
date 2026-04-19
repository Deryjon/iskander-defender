<template>
  <form class="grid gap-4" @submit.prevent="submit">
    <BaseInput v-model="name" label="Имя" placeholder="Ваше имя" autocomplete="name" />
    <BaseInput v-model="phone" label="Телефон" placeholder="+998 __ ___ __ __" autocomplete="tel" />
    <BaseButton type="submit" icon="lucide:phone-call">Заказать звонок</BaseButton>
    <p v-if="sent" class="text-sm font-semibold text-bronze">Заявка на звонок принята.</p>
  </form>
</template>

<script setup lang="ts">
const name = ref('')
const phone = ref('')
const sent = ref(false)
const submit = () => {
  sent.value = true
}
</script>
