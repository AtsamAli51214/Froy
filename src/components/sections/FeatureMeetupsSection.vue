<script setup lang="ts">
import Container from '@/components/ui/Container.vue'

const features = [
  {
    title: 'Connect in public venues',
    body: 'Choose from pre-selected safe public locations.',
  },
  {
    title: 'Verified Profiles',
    body: 'Every user undergoes a pending approval phase.',
  },
  {
    title: 'Focus on Offline',
    body: 'In-app chat unlocks only shortly before the meetup.',
  },
] as const
</script>

<template>
  <section
    class="border-t border-slate-100/80 bg-white py-20 sm:py-28"
    aria-labelledby="meetups-heading"
  >
    <Container class="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <!-- Left: copy + feature cards -->
      <div class="max-w-xl lg:max-w-none">
        <h2
          id="meetups-heading"
          class="font-inter text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl"
        >
          Built for Safe, Easy Meetups
        </h2>
        <p
          class="mt-6 font-inter text-lg font-normal leading-relaxed tracking-normal text-[#475569] sm:text-[18px] sm:leading-7"
        >
          Our platform uses verified profiles and removes the friction of planning. Just set a time, a
          location and connect. If you're a Visitor, remember; First round's on you!
        </p>

        <ul class="mt-10 flex flex-col gap-5" role="list">
          <li
            v-for="item in features"
            :key="item.title"
            class="flex gap-5 rounded-[24px] bg-[#F8F9FA] p-6 sm:p-7"
          >
            <img
              src="/images/meetups-feature-icon.svg"
              alt=""
              class="h-14 w-14 shrink-0"
              width="54"
              height="54"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <div class="min-w-0">
              <h3 class="font-inter text-[20px] font-bold leading-[28px] tracking-normal text-[#0F172A]">
                {{ item.title }}
              </h3>
              <p class="mt-2 font-inter text-base font-normal leading-relaxed text-[#475569]">
                {{ item.body }}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Right: composite mockup + circle backdrop -->
      <div class="relative flex min-h-[400px] items-center justify-center lg:min-h-[520px]">
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[min(100%,560px)] w-[min(100%,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100/90"
          aria-hidden="true"
        />
        <img
          src="/images/section-meetups-visual.png"
          alt="FROY app: Go Live availability form with chats and connection requests in the background"
          class="relative z-10 w-full max-w-[min(100%,640px)] select-none drop-shadow-[0_20px_50px_-12px_rgba(15,23,42,0.2)]"
          width="662"
          height="612"
          loading="lazy"
          decoding="async"
        />
      </div>
    </Container>
  </section>
</template>
