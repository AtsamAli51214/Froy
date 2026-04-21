<script setup lang="ts">
defineProps<{
  /** Accessible label for the mockup frame */
  label?: string
}>()
</script>

<template>
  <div
    class="relative mx-auto w-full max-w-[280px]"
    role="img"
    :aria-label="label ?? 'App screen preview'"
  >
    <div
      class="rounded-[2.35rem] border-[10px] border-slate-900 bg-slate-900 shadow-[var(--shadow-card)]"
    >
      <div class="overflow-hidden rounded-[1.85rem] bg-slate-100">
        <slot />
      </div>
    </div>
    <div
      class="pointer-events-none absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900/90"
      aria-hidden="true"
    />
  </div>
</template>
