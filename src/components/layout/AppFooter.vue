<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import { SITE } from '@/lib/constants'

const year = new Date().getFullYear()

type FooterLink = { label: string; href: string; external?: boolean }

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Safety', href: '#how-it-works' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Guidelines', href: '#' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Instagram', href: 'https://instagram.com', external: true },
      { label: 'X', href: 'https://x.com', external: true },
      { label: 'YouTube', href: 'https://youtube.com', external: true },
    ],
  },
]
</script>

<template>
  <footer class="border-t border-slate-200 bg-white py-14">
    <Container>
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
        <div class="lg:col-span-2">
          <a href="#top" class="inline-flex items-center">
            <img
              :src="SITE.brandLogoSrc"
              :alt="SITE.brandLogoAlt"
              class="h-[56px] w-[86px] shrink-0 object-contain object-left"
              width="86"
              height="56"
              decoding="async"
            />
          </a>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
            Meet locals who match your vibe—real plans, real neighborhoods, less scrolling.
          </p>
        </div>

        <div
          v-for="col in columns"
          :key="col.title"
          class="min-w-0"
        >
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {{ col.title }}
          </p>
          <ul class="mt-4 flex flex-col gap-2.5">
            <li v-for="link in col.links" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-slate-600 transition hover:text-slate-900"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center"
      >
        <p class="text-sm text-slate-500">© {{ year }} {{ SITE.companyName }}. All rights reserved.</p>
        <ul class="flex flex-wrap gap-6 text-sm text-slate-600">
          <li>
            <a class="hover:text-slate-900" href="#">Privacy</a>
          </li>
          <li>
            <a class="hover:text-slate-900" href="#">Terms</a>
          </li>
          <li>
            <a class="hover:text-slate-900" href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
</template>
