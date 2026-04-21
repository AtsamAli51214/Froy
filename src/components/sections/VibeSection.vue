<script setup lang="ts">
import Container from '@/components/ui/Container.vue'

const featured = {
  src: '/images/frame/art-walk.png',
  alt: 'Art and culture walk — explore local galleries',
} as const

const gridItems = [
  {
    src: '/images/frame/pop-up.png',
    alt: 'Pop-up events',
  },
  {
    src: '/images/frame/street-food.png',
    alt: 'Street food',
  },
  {
    src: '/images/frame/night-life.png',
    alt: 'Nightlife',
  },
  {
    src: '/images/frame/sightseeing.png',
    alt: 'Sightseeing',
  },
  {
    src: '/images/frame/nature-trails.png',
    alt: 'Nature trails',
  },
  {
    src: '/images/frame/board-games.png',
    alt: 'Board games',
  },
] as const
</script>

<template>
  <section class="border-t border-slate-100 bg-[#FAFAFA] py-20 sm:py-28" aria-labelledby="vibe-heading">
    <Container>
      <h2
        id="vibe-heading"
        class="text-center font-inter text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
      >
        Find your vibe
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-center font-inter text-lg text-[#64748B] sm:text-[18px]">
        Curated activities for every mood.
      </p>

      <!-- Large card + 3×2 grid (copy is baked into frame assets) -->
      <div
        class="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-12 lg:gap-5 lg:items-stretch"
        role="list"
        aria-label="Activity categories"
      >
        <article
          class="relative min-h-[280px] w-full overflow-hidden rounded-[28px] sm:min-h-[360px] lg:col-span-5 lg:min-h-[520px]"
          role="listitem"
        >
          <img
            :src="featured.src"
            :alt="featured.alt"
            class="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </article>

        <div class="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-7 lg:grid-cols-3" role="list">
          <article
            v-for="item in gridItems"
            :key="item.src"
            class="relative aspect-[4/3] min-h-[140px] overflow-hidden rounded-[24px] sm:min-h-[160px]"
            role="listitem"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              class="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </article>
        </div>
      </div>

      <!-- Bottom banner -->
      <div
        class="mt-8 flex flex-col items-stretch gap-6 overflow-hidden rounded-[28px] bg-gradient-locals px-6 py-8 text-white shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-10 sm:py-9"
      >
        <div class="max-w-xl">
          <p class="font-inter text-2xl font-bold leading-tight sm:text-3xl">Morning Coffee Runs</p>
          <p class="mt-2 font-inter text-base text-white/95 sm:text-lg">
            The most popular way to break the ice.
          </p>
        </div>
        <div class="shrink-0 sm:ml-auto">
          <img
            src="/images/frame/morning-coffee.png"
            alt=""
            class="h-28 w-28 rounded-2xl object-cover shadow-lg ring-2 ring-white/30 sm:h-32 sm:w-32"
            width="128"
            height="128"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
