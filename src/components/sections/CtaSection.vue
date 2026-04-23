<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
</script>

<template>
  <section
    id="final-cta"
    class="scroll-mt-24 !bg-[linear-gradient(180deg,#ffffff_0%,#feedd7_100%)] pt-20 pb-24 sm:pt-28 sm:pb-32"
    aria-labelledby="final-cta-heading"
  >
    <Container class="flex flex-col items-center text-center">
      <h2
        id="final-cta-heading"
        class="max-w-4xl font-inter text-4xl font-bold leading-[1.1] tracking-tight text-[#1A1F36] sm:text-5xl lg:text-[56px] lg:leading-[1.05]"
      >
        <span class="block">Stop scrolling.</span>
        <span class="mt-1 block text-gradient-locals sm:mt-1.5">Start meeting.</span>
      </h2>

      <p
        class="mx-auto mt-6 max-w-xl font-inter text-base leading-relaxed text-[#6B7280] sm:mt-7 sm:text-lg"
      >
        The waitlist for Amsterdam is open. Download the app to secure your spot and start making
        genuine connections.
      </p>

      <div
        class="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-4 "
      >
        <!-- Google Play (left) — official badge asset -->
        <a
          href="https://play.google.com"
          rel="noopener noreferrer"
          target="_blank"
          class="inline-block shrink-0 overflow-hidden rounded-xl transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          aria-label="Get it on Google Play"
        >
          <img
            src="/images/cta/google-play-badge.png"
            alt="Get it on Google Play"
            class="h-[52px] w-auto sm:h-[60px]"
            width="1024"
            height="296"
            loading="lazy"
            decoding="async"
          />
        </a>

        <!-- iOS: gradient pill + glow -->
        <a
          href="https://apps.apple.com"
          rel="noopener noreferrer"
          target="_blank"
          class="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-locals px-8 py-3.5 font-inter text-base font-bold text-white shadow-[0_8px_28px_-6px_rgba(255,20,147,0.4),0_4px_14px_-4px_rgba(255,140,0,0.35)] transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
          aria-label="Download iOS app"
        >
          Download iOS App
        </a>
      </div>
    </Container>
  </section>
</template>
