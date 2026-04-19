<template>
  <a
    v-if="isExternal"
    :href="href"
    :class="classes"
    :aria-label="ariaLabel"
    @click="$emit('click')"
  >
    <component :is="LoaderCircle" v-if="loading" class="h-4 w-4 animate-spin" aria-hidden="true" />
    <component :is="iconComponent" v-else-if="iconComponent" class="h-4 w-4" aria-hidden="true" />
    <Icon v-else-if="icon" :name="icon" class="h-4 w-4" aria-hidden="true" />
    <slot />
  </a>
  <NuxtLink
    v-else-if="href"
    :to="href"
    :class="classes"
    :aria-label="ariaLabel"
    @click="$emit('click')"
  >
    <component :is="LoaderCircle" v-if="loading" class="h-4 w-4 animate-spin" aria-hidden="true" />
    <component :is="iconComponent" v-else-if="iconComponent" class="h-4 w-4" aria-hidden="true" />
    <Icon v-else-if="icon" :name="icon" class="h-4 w-4" aria-hidden="true" />
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    :class="classes"
    :disabled="disabled || loading"
    :aria-label="ariaLabel"
    @click="$emit('click')"
  >
    <component :is="LoaderCircle" v-if="loading" class="h-4 w-4 animate-spin" aria-hidden="true" />
    <component :is="iconComponent" v-else-if="iconComponent" class="h-4 w-4" aria-hidden="true" />
    <Icon v-else-if="icon" :name="icon" class="h-4 w-4" aria-hidden="true" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { LoaderCircle } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    href?: string
    variant?: 'primary' | 'secondary' | 'ghost' | 'dark'
    size?: 'sm' | 'md' | 'lg'
    type?: 'button' | 'submit'
    icon?: string
    iconComponent?: Component
    loading?: boolean
    disabled?: boolean
    ariaLabel?: string
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
  },
)

defineEmits<{ click: [] }>()

const isExternal = computed(() =>
  Boolean(props.href?.startsWith('http') || props.href?.startsWith('tel:') || props.href?.startsWith('mailto:')),
)

const classes = computed(() => {
  const base =
    'inline-flex min-w-0 max-w-full items-center justify-center gap-2 rounded-xl text-center font-semibold leading-snug transition duration-200 disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:shrink-0'
  const sizes = {
    sm: 'min-h-10 px-3 text-sm sm:px-4',
    md: 'min-h-11 px-4 text-sm sm:min-h-12 sm:px-5',
    lg: 'min-h-12 px-5 text-sm sm:min-h-14 sm:px-7 sm:text-base',
  }
  const variants = {
    primary: 'bg-bronze text-white shadow-soft hover:bg-[#987343]',
    secondary: 'border border-bronze/35 bg-white text-graphite hover:border-bronze hover:bg-[#FBF8F3]',
    ghost: 'text-graphite hover:bg-white/70',
    dark: 'bg-graphite text-white hover:bg-navy',
  }

  return [base, sizes[props.size], variants[props.variant]].join(' ')
})
</script>
