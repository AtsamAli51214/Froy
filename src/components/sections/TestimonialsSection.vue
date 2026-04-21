<script setup lang="ts">
import Container from '@/components/ui/Container.vue'

const left = {
  scene: '/images/testimonial/John.png',
  avatar: '/images/testimonial/John.png',
  name: 'John D.',
  role: 'Local Host',
  roleClass: 'text-[#FF8C42]',
  quote:
    "I've lived in Jordaan for 10 years, but showing it to someone seeing it for the first time made me fall in love with my neighborhood all over again.",
} as const

const right = {
  scene: '/images/testimonial/Sarah.png',
  avatar: '/images/testimonial/Sarah.png',
  name: 'Sarah M.',
  role: 'Visitor',
  roleClass: 'text-[#FF4D8D]',
  quote:
    'I was so tired of standard dating apps and lonely solo travel. FROY connected me with a local who showed me the best hidden stroopwafel bakery.',
} as const

const communityAvatars = [
  '/images/testimonial/John.png',
  '/images/testimonial/Sarah.png',
] as const
</script>

<template>
  <section
    id="stories"
    class="scroll-mt-24 rounded-t-[80px] bg-[#0F172B] py-20 sm:pt-28 sm:pb-0"
    aria-labelledby="testimonials-heading"
  >
    <Container>
      <h2
        id="testimonials-heading"
        class="text-center font-inter text-[60px] font-bold leading-[60px] tracking-normal text-white"
      >
        Real people. Real stories.
      </h2>
      <p
        class="mx-auto mt-4 max-w-2xl text-center font-inter text-lg leading-relaxed text-slate-400 sm:text-[18px]"
      >
        Join a growing community in Amsterdam dedicated to authentic offline experiences.
      </p>

      <div class="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-6">
        <!-- Left testimonial -->
        <figure
          class="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg"
        >
          <img
            :src="left.scene"
            alt=""
            class="aspect-[16/10] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption class="flex flex-col p-5 sm:p-6">
            <div class="flex items-center gap-3">
              <img
                :src="left.avatar"
                alt=""
                class="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white/20"
                width="44"
                height="44"
                loading="lazy"
              />
              <div class="min-w-0 text-left">
                <p class="font-inter font-semibold text-white">{{ left.name }}</p>
                <p class="font-inter text-sm font-medium" :class="left.roleClass">{{ left.role }}</p>
              </div>
            </div>
            <blockquote
              class="mt-4 text-left font-inter text-sm leading-relaxed text-slate-200 sm:text-[15px]"
            >
              “{{ left.quote }}”
            </blockquote>
          </figcaption>
        </figure>

        <!-- Center: community stats -->
        <figure
          class="flex h-[350px] flex-col justify-between overflow-hidden rounded-2xl border-t border-[#FF007A4D] bg-[linear-gradient(135deg,rgba(255,0,122,0.2)_0%,rgba(0,0,0,0)_100%)] p-6 text-center shadow-[var(--shadow-card)] sm:h-[390px] sm:p-8"
        >
          <div class="flex min-h-0 flex-1 flex-col items-center justify-end">
            <div class="flex items-center justify-center pl-4" aria-hidden="true">
              <img
                :src="communityAvatars[0]"
                alt=""
                class="relative z-10 h-14 w-14 rounded-full border-2 border-white/30 object-cover grayscale"
                width="56"
                height="56"
                loading="lazy"
              />
              <img
                :src="communityAvatars[1]"
                alt=""
                class="relative z-20 -ml-4 h-14 w-14 rounded-full border-2 border-white/30 object-cover grayscale"
                width="56"
                height="56"
                loading="lazy"
              />
              <div
                class="relative z-30 -ml-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white text-sm font-bold text-[#0F172B] shadow-md"
              >
                +500
              </div>
            </div>
            <h3 class="mt-8 font-inter text-xl font-bold text-white sm:text-2xl">Growing Fast</h3>
            <p class="mt-3 max-w-xs font-inter text-sm leading-relaxed text-white/95 sm:text-base">
              Over 500 active locals ready to meet in Amsterdam right now.
            </p>
          </div>
        </figure>

        <!-- Right testimonial -->
        <figure
          class="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg"
        >
          <img
            :src="right.scene"
            alt=""
            class="aspect-[16/10] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption class="flex flex-col p-5 sm:p-6">
            <div class="flex items-center gap-3">
              <img
                :src="right.avatar"
                alt=""
                class="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-pink-400/80"
                width="44"
                height="44"
                loading="lazy"
              />
              <div class="min-w-0 text-left">
                <p class="font-inter font-semibold text-white">{{ right.name }}</p>
                <p class="font-inter text-sm font-medium" :class="right.roleClass">{{ right.role }}</p>
              </div>
            </div>
            <blockquote
              class="mt-4 text-left font-inter text-sm leading-relaxed text-slate-200 sm:text-[15px]"
            >
              “{{ right.quote }}”
            </blockquote>
          </figcaption>
        </figure>
      </div>
    </Container>
  </section>
</template>
