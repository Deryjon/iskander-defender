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
    variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'light'
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
    'group inline-flex min-w-0 max-w-full items-center justify-center gap-2.5 rounded-sm text-center font-semibold leading-snug tracking-wide transition duration-300 disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300'
  const sizes = {
    sm: 'min-h-10 px-4 text-[13px] sm:px-5',
    md: 'min-h-12 px-5 text-sm sm:px-6',
    lg: 'min-h-12 px-6 text-sm sm:min-h-14 sm:px-8 sm:text-[15px]',
  }
  const variants = {
    primary: 'bg-bronze text-white hover:bg-[#93703D] active:scale-[0.98] hover:[&_svg]:translate-x-0.5',
    secondary: 'border border-graphite/20 bg-transparent text-graphite hover:border-graphite hover:bg-graphite hover:text-white active:scale-[0.98]',
    ghost: '!min-h-0 !px-0 text-bronze hover:text-graphite hover:[&_svg]:translate-x-1',
    light: 'border border-white/25 bg-transparent text-white hover:border-white hover:bg-white hover:text-graphite active:scale-[0.98]',
    dark: 'bg-graphite text-white hover:bg-navy active:scale-[0.98]',
  }

  return [base, sizes[props.size], variants[props.variant]].join(' ')
})
</script>
