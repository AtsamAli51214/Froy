<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import Container from '@/components/ui/Container.vue'
</script>

<template>
  <section
    id="final-cta"
    class="scroll-mt-24 border-t border-slate-100 bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28"
    aria-labelledby="final-cta-heading"
  >
    <Container class="text-center">
      <h2
        id="final-cta-heading"
        class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
      >
        Stop scrolling.
        <span class="text-gradient-locals"> Start meeting.</span>
      </h2>
      <p class="mx-auto mt-5 max-w-xl text-lg text-slate-600">
        Download Locals and turn your next trip into conversations, shared tables, and streets you
        will remember.
      </p>

      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
        <a
          href="https://apps.apple.com"
          rel="noopener noreferrer"
          target="_blank"
          class="inline-flex min-h-[52px] min-w-[200px] items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          aria-label="Download on the App Store"
        >
          <svg class="mr-3 h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
            />
          </svg>
          <span class="text-left leading-tight">
            <span class="block text-[10px] font-normal uppercase tracking-wide text-slate-300"
              >Download on the</span
            >
            <span class="block text-base">App Store</span>
          </span>
        </a>

        <a
          href="https://play.google.com"
          rel="noopener noreferrer"
          target="_blank"
          class="inline-flex min-h-[52px] min-w-[200px] items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          aria-label="Get it on Google Play"
        >
          <svg class="mr-3 h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#EA4335"
              d="M3.6 20.4c-.4-.4-.6-.9-.6-1.4V5c0-.5.2-1 .6-1.4l10.7 10.7L3.6 20.4z"
            />
            <path fill="#FBBC04" d="M14.3 15.7L3.6 20.4c.5.5 1.2.8 2 .8 1.7 0 3.2-1.1 3.7-2.7l4.9-2.8z" />
            <path fill="#34A853" d="M21.6 10.7l-4.6 2.6-3.7-3.7 3.7-3.7 4.6 2.6c.8.5 1.3 1.3 1.3 2.2s-.5 1.7-1.3 2.2z" />
            <path fill="#4285F4" d="M3.6 3.6C3.1 4.1 2.8 4.8 2.8 5.6v12.8c0 .8.3 1.5.8 2l7.3-7.3L3.6 3.6z" />
          </svg>
          <span class="text-left leading-tight">
            <span class="block text-[10px] font-normal uppercase tracking-wide text-slate-500"
              >Get it on</span
            >
            <span class="block text-base">Google Play</span>
          </span>
        </a>
      </div>

      <div class="mt-10">
        <BaseButton as="a" href="#top" variant="secondary"> Back to top </BaseButton>
      </div>
    </Container>
  </section>
</template>
