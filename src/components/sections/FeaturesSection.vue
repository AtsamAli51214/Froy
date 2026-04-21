<script setup lang="ts">
import Container from '@/components/ui/Container.vue'

const features = [
  {
    title: 'Discover Amsterdam',
    description:
      "Find hidden gems and local favorites that you won't see in standard tourist guides, all through the eyes of a local.",
    iconWrapper: 'bg-[#DB2777]',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Meet Real People',
    description:
      "Whether you're a local sharing your city or a visitor wanting to explore, FROY connects you for meaningful meetups.",
    iconWrapper: 'bg-gradient-to-b from-[#FF8A00] to-[#EC4899]',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    title: 'Genuine Friendships',
    description:
      'We limit messaging to encourage quick, safe, offline meetups. Go grab a coffee, share a walk, and make a friend.',
    iconWrapper: 'bg-[#EA580C]',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
] as const
</script>

<template>
  <section id="features" class="scroll-mt-24 bg-white py-20 sm:py-28" aria-labelledby="features-heading">
    <Container>
      <div class="mx-auto max-w-3xl text-center">
        <h2
          id="features-heading"
          class="font-inter text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl sm:leading-tight"
        >
          Authentic Connections
        </h2>
        <p
          class="mt-5 font-inter text-lg font-normal leading-relaxed tracking-normal text-[#475569] sm:text-[18px] sm:leading-7"
        >
          We emphasize genuine face-to-face interactions over digital messaging.
        </p>
      </div>

      <ul class="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8" role="list">
        <li
          v-for="item in features"
          :key="item.title"
          class="rounded-[24px] bg-[#F8F9FA] p-8 transition hover:shadow-[0_18px_40px_-18px_rgba(15,23,42,0.12)]"
        >
          <div
            class="mb-8 flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-sm"
            :class="item.iconWrapper"
          >
            <svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="item.icon" />
            </svg>
          </div>
          <h3 class="font-inter text-[20px] font-bold leading-[28px] tracking-normal text-[#0F172A]">
            {{ item.title }}
          </h3>
          <p class="mt-3 font-inter text-base font-normal leading-[1.6] tracking-normal text-[#475569]">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </Container>
  </section>
</template>
