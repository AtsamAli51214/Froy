<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import { SITE } from '@/lib/constants'

const year = new Date().getFullYear()

/** Faint background tiles (lifestyle / tech) — low opacity in the white bar */
const footerDecoSrcs = [
  '/images/beautify/1.png',
  '/images/beautify/2.png',
  '/images/beautify/3.png',
  '/images/beautify/4.png',
  '/images/hero-ambient.jpg',
] as const

const navLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Safety', href: '#how-it-works' },
  { label: 'Contact', href: '#' },
] as const
</script>

<template>
  <footer class="bg-white">
    <div class="relative border-t border-[#E8EAED]">
      <!-- Faint decorative squares behind content -->
      <div
        class="pointer-events-none absolute inset-0 flex items-center justify-evenly gap-2 overflow-hidden px-4 opacity-[0.09] saturate-50 sm:px-8"
        aria-hidden="true"
      >
        <img
          v-for="(src, i) in footerDecoSrcs"
          :key="i"
          :src="src"
          alt=""
          class="h-14 w-14 shrink-0 object-cover sm:h-16 sm:w-16 md:h-20 md:w-20"
        />
      </div>

      <Container class="relative z-10 py-10 md:py-11">
        <div
          class="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-6 lg:gap-10"
        >
          <!-- Brand -->
          <a
            href="#top"
            class="inline-flex items-center gap-3 justify-self-center md:justify-self-start"
          >
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-[#FF8A00] to-[#FF1493] font-inter text-lg font-bold leading-none text-white shadow-sm"
              aria-hidden="true"
            >
              F
            </span>
            <span class="font-inter text-lg font-bold tracking-tight text-[#1A1F36]">
              {{ SITE.companyName }}
            </span>
          </a>

          <!-- Center nav -->
          <nav
            class="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-inter text-sm font-semibold leading-5 tracking-normal text-[#6B7C93] md:justify-self-center"
            aria-label="Footer"
          >
            <a
              v-for="link in navLinks"
              :key="link.label"
              :href="link.href"
              class="transition hover:text-[#1A1F36]"
            >
              {{ link.label }}
            </a>
          </nav>

          <!-- Copyright -->
          <p
            class="text-center font-inter text-sm font-semibold leading-5 tracking-normal text-[#6B7C93] md:justify-self-end md:text-right"
          >
            © {{ year }} {{ SITE.companyName }}. Amsterdam, NL.
          </p>
        </div>
      </Container>
    </div>
  </footer>
</template>
