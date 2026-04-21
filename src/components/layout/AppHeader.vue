<script setup lang="ts">
import { onUnmounted, watch } from 'vue'

import BaseButton from '@/components/ui/BaseButton.vue'
import Container from '@/components/ui/Container.vue'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { useAppStore } from '@/stores/app'

const app = useAppStore()

function scrollToSection(id: string) {
  app.setMobileNavOpen(false)
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

watch(
  () => app.mobileNavOpen,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  },
)

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-200/60 bg-[#FAFAFA]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#FAFAFA]/90"
  >
    <Container as="nav" class="flex min-h-[4.25rem] items-center justify-between gap-6 py-3">
      <a href="#top" class="flex shrink-0 items-center py-0.5">
        <img
          :src="SITE.brandLogoSrc"
          :alt="SITE.brandLogoAlt"
          class="!h-[56px] !w-[86px] shrink-0 object-contain object-left"
          width="86"
          height="56"
          decoding="async"
        />
      </a>

      <div class="hidden items-center gap-8 md:flex lg:gap-10">
        <ul class="flex items-center gap-8 lg:gap-10">
          <li v-for="link in NAV_LINKS" :key="link.id">
            <button
              type="button"
              class="font-inter text-[14px] font-medium leading-[20px] tracking-normal text-slate-700 transition hover:text-slate-900"
              @click="scrollToSection(link.id)"
            >
              {{ link.label }}
            </button>
          </li>
        </ul>

        <BaseButton
          as="a"
          href="#final-cta"
          variant="gradient"
          class="!rounded-full px-6 py-2.5 text-sm font-bold !shadow-[0_8px_28px_-6px_rgba(255,20,147,0.4),0_4px_14px_-4px_rgba(255,140,0,0.35)]"
        >
          Get the App
        </BaseButton>
      </div>

      <button
        type="button"
        class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-700 shadow-sm md:hidden"
        :aria-expanded="app.mobileNavOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        @click="app.toggleMobileNav()"
      >
        <span class="sr-only">Menu</span>
        <svg
          v-if="!app.mobileNavOpen"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </Container>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-show="app.mobileNavOpen"
        id="mobile-menu"
        class="border-b border-slate-200/60 bg-[#FAFAFA] px-4 py-4 md:hidden"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="link in NAV_LINKS" :key="link.id">
            <button
              type="button"
              class="w-full rounded-xl px-3 py-2.5 text-left font-inter text-[14px] font-medium leading-[20px] tracking-normal text-slate-700 hover:bg-white/80"
              @click="scrollToSection(link.id)"
            >
              {{ link.label }}
            </button>
          </li>
          <li class="pt-2">
            <BaseButton
              as="a"
              href="#final-cta"
              class="w-full !rounded-full py-2.5 text-sm font-bold !shadow-[0_8px_28px_-6px_rgba(255,20,147,0.4),0_4px_14px_-4px_rgba(255,140,0,0.35)]"
              variant="gradient"
              @click="app.setMobileNavOpen(false)"
            >
              Get the App
            </BaseButton>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
