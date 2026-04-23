<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import Container from '@/components/ui/Container.vue'
import { SITE } from '@/lib/constants'
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden border-b border-slate-200/50 bg-[linear-gradient(180deg,#ffffff_0%,#feedd7_100%)] pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-28"
    aria-labelledby="hero-heading"
  >
    <!-- Faint ambient art (matches reference texture) -->
    <div
      class="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/images/hero-ambient.jpg"
        alt=""
        class="h-[120%] min-h-full w-full max-w-[1920px] scale-110 object-cover opacity-[0.14] blur-3xl"
        loading="eager"
        decoding="async"
      />
    </div>

    <Container class="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <div class="max-w-xl lg:max-w-none">
        <p
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#1a1a1a] shadow-sm"
        >
          <span class="h-2 w-2 shrink-0 rounded-full bg-[#ff8c00]" aria-hidden="true" />
          Now live in Amsterdam
        </p>

        <h1
          id="hero-heading"
          class="font-inter font-extrabold text-[72px] leading-[79.2px] tracking-[-1.8px] text-[#1a1a1a]"
        >
          Explore cities with
          <span class="text-gradient-locals">{{ SITE.name }}.</span>
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-relaxed text-[#666666] sm:text-xl">
          FROY connects Visitors and Locals through the first round of drinks and creates genuine offline experiences.
          <br />
          Drop the endless messaging, meet face-to-face, and experience the real Amsterdam.
        </p>
        

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <BaseButton
            as="a"
            href="#final-cta"
            variant="gradient"
            class="!rounded-full px-8 py-3 text-sm font-bold !shadow-[0_10px_32px_-8px_rgba(255,0,128,0.45),0_4px_16px_-6px_rgba(255,140,0,0.35)]"
          >
            Become a Visitor
          </BaseButton>
          <BaseButton
            as="a"
            href="#meet-locals"
            variant="secondary"
            class="!rounded-full border-slate-200/90 px-8 py-3 text-sm font-bold text-[#1a1a1a]"
          >
            Become a Local
          </BaseButton>
        </div>
      </div>

      <div class="flex justify-center lg:justify-end">
        <div class="relative w-full max-w-[min(100%,420px)]">
          <img
            src="/images/hero-container.png"
            alt="FROY app Discover Locals screen showing local profiles in Amsterdam"
            class="relative z-10 w-full select-none drop-shadow-[0_28px_60px_-12px_rgba(0,0,0,0.22)]"
            width="499"
            height="819"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
