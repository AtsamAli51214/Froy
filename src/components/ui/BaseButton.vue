<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?:
      | 'primary'
      | 'gradient'
      | 'secondary'
      | 'ghost'
      | 'onDark'
      | 'onDarkOutline'
    as?: string
    type?: 'button' | 'submit' | 'reset'
    /** Set when `as` is `"a"` (hash links, external URLs). */
    href?: string
    target?: string
    rel?: string
  }>(),
  {
    variant: 'primary',
    as: 'button',
    type: 'button',
    href: undefined,
    target: undefined,
    rel: undefined,
  },
)

const variantClass = computed(() => {
  switch (props.variant) {
    case 'gradient':
      return 'bg-gradient-locals text-white shadow-soft hover:opacity-95 focus-visible:ring-orange-400'
    case 'secondary':
      return 'border border-slate-300 bg-white text-slate-800 shadow-sm hover:bg-slate-50'
    case 'ghost':
      return 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    case 'onDark':
      return 'bg-white text-slate-900 shadow-soft hover:bg-slate-100 focus-visible:ring-white'
    case 'onDarkOutline':
      return 'border border-white/30 bg-transparent text-white hover:bg-white/10'
    default:
      return 'bg-brand-600 text-white shadow-soft hover:bg-brand-700 focus-visible:ring-brand-500'
  }
})
</script>

<template>
  <component
    :is="as"
    :href="as === 'a' ? href : undefined"
    :rel="as === 'a' ? rel : undefined"
    :target="as === 'a' ? target : undefined"
    :type="as === 'button' ? type : undefined"
    class="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:pointer-events-none disabled:opacity-50"
    :class="variantClass"
  >
    <slot />
  </component>
</template>
