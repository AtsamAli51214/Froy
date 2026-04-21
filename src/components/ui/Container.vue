<script setup lang="ts">
defineProps<{
  as?: string
}>()
</script>

<template>
  <component
    :is="as ?? 'div'"
    class="mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[150px]"
  >
    <slot />
  </component>
</template>
