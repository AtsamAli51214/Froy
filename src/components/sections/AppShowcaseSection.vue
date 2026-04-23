<script setup lang="ts">
import Container from '@/components/ui/Container.vue'

const screens = [
  {
    src: '/images/beautify/1.png',
    alt: 'Discover Locals map view with neighborhood selector and profile pins',
  },
  {
    src: '/images/beautify/2.png',
    alt: 'Chats screen with conversation list and avatars',
  },
  {
    src: '/images/beautify/3.png',
    alt: 'Connection requests with accept and decline actions',
  },
  {
    src: '/images/beautify/4.png',
    alt: 'Discover Locals list view with profiles and first round CTA',
  },
] as const
</script>

<template>
  <section
    class="border-t border-slate-100/80 bg-[linear-gradient(180deg,#ffffff_0%,#feedd7_100%)] py-20 sm:py-28"
    aria-labelledby="showcase-heading"
  >
    <Container>
      <h2
        id="showcase-heading"
        class="text-center font-inter text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
      >
        Beautifully simple.
      </h2>
      <p
        class="mx-auto mt-4 max-w-2xl text-center font-inter text-lg leading-relaxed text-[#64748B] sm:text-[18px]"
      >
        Designed with strict iOS 17 principles.
      </p>

      <div
        class="mt-14 grid grid-cols-2 items-start gap-4 sm:gap-6 md:grid-cols-4 md:gap-6 lg:gap-8"
        role="list"
        aria-label="App interface screenshots"
      >
        <div v-for="s in screens" :key="s.src" class="min-w-0" role="listitem">
          <img
            :src="s.src"
            :alt="s.alt"
            class="h-auto w-full select-none rounded-[2rem]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
