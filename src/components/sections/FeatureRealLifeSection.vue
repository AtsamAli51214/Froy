<script setup lang="ts">
import Container from '@/components/ui/Container.vue'

const bullets = [
  {
    title: 'Locals in Orange',
    body: 'Easily identify Amsterdam natives ready to show you around.',
    dot: 'bg-[#EA580C]',
    halo: 'bg-orange-400/35',
  },
  {
    title: 'Visitors in Pink',
    body: 'Connect with travelers bringing fresh perspectives to your city.',
    dot: 'bg-[#DB2777]',
    halo: 'bg-pink-400/35',
  },
] as const
</script>

<template>
  <section
    id="how-it-works"
    class="scroll-mt-24 border-t border-slate-100/80 bg-froy-surface py-20 sm:py-28"
    aria-labelledby="real-life-heading"
  >
    <Container class="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <!-- Phone mockup + decorative gradient (left on desktop) -->
      <div class="relative order-2 flex justify-center lg:order-1 lg:justify-start">
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[min(520px,90vw)] w-[min(420px,85vw)] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[2.5rem] 
           from-orange-200/70 via-rose-200/50 to-amber-100/40 blur-2xl"
          aria-hidden="true"
        />
        <img
          src="/images/discover-locals-screen.jpg"
          alt="FROY Discover Locals screen with Amsterdam map, neighborhood selector, and profile pins"
          class="relative z-10 w-full max-w-[min(100%,420px)] select-none drop-shadow-[0_24px_48px_-12px_rgba(15,23,42,0.18)]"
          width="507"
          height="1024"
          loading="lazy"
          decoding="async"
        />
      </div>

      <!-- Copy (right on desktop) -->
      <div class="order-1 max-w-xl lg:order-2 lg:max-w-none">
        <h2
          id="real-life-heading"
          class="font-inter text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl"
        >
          Designed for <span class="text-gradient-locals">Real Life</span>
        </h2>
        <p
          class="mt-6 font-inter text-lg font-normal leading-relaxed tracking-normal text-[#475569] sm:text-[18px] sm:leading-7"
        >
          FROY uses strict iOS design principles to provide an intuitive, beautiful experience that gets
          out of your way. We want you off your phone and into the city.
        </p>
        <ul class="mt-10 flex flex-col gap-8" role="list">
          <li v-for="b in bullets" :key="b.title" class="flex gap-4">
            <span class="relative mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center" aria-hidden="true">
              <span
                class="absolute h-5 w-5 rounded-full blur-sm"
                :class="b.halo"
              />
              <span class="relative h-3 w-3 rounded-full shadow-sm" :class="b.dot" />
            </span>
            <div>
              <p class="font-inter text-base font-bold leading-snug text-[#0F172A]">{{ b.title }}</p>
              <p class="mt-1.5 font-inter text-base font-normal leading-relaxed text-[#475569]">
                {{ b.body }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  </section>
</template>
