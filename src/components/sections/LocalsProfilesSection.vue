<script setup lang="ts">
import Container from '@/components/ui/Container.vue'

const locals = [
  {
    name: 'John Doe',
    role: 'Local Host',
    tags: ['Coffee', 'Art'],
    img: '/images/profiles/John%20Doe.png',
  },
  {
    name: 'Jane Smith',
    role: 'Local Guide',
    tags: ['Nightlife', 'Food'],
    img: '/images/profiles/Jane%20Smith.png',
  },
  {
    name: 'David Le',
    role: 'Amsterdam Native',
    tags: ['History', 'Parks'],
    img: '/images/profiles/David%20Le.png',
  },
] as const
</script>

<template>
  <section
    id="meet-locals"
    class="scroll-mt-24 border-t border-slate-100/80 bg-[#FAFAFA] py-20 sm:py-28"
    aria-labelledby="amsterdam-locals-heading"
  >
    <Container>
      <h2
        id="amsterdam-locals-heading"
        class="text-center font-inter text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
      >
        Meet Our Amsterdam Locals
      </h2>
      <p
        class="mx-auto mt-4 max-w-2xl text-center font-inter text-lg leading-relaxed text-[#64748B] sm:text-[18px]"
      >
        Verified hosts ready to show you their favorite spots.
      </p>

      <ul class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li
          v-for="person in locals"
          :key="person.name"
          class="rounded-2xl border border-slate-100/80 bg-[linear-gradient(180deg,rgba(250,250,250,0.5)_0%,rgba(250,250,250,0.8)_50%,#FAFAFA_100%)] p-8 text-center shadow-sm transition hover:shadow-md"
        >
          <img
            :src="person.img"
            :alt="`Portrait of ${person.name}`"
            class="mx-auto h-28 w-28 rounded-full object-cover grayscale ring-4 ring-slate-100"
            loading="lazy"
            decoding="async"
            width="112"
            height="112"
          />
          <p class="mt-6 font-inter text-[20px] font-bold leading-[28px] tracking-normal text-[#0F172A]">
            {{ person.name }}
          </p>
          <p class="mt-1 font-inter text-sm font-medium text-[#FF8A00]">{{ person.role }}</p>
          <div class="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span
              v-for="tag in person.tags"
              :key="tag"
              class="rounded-full border border-slate-200 bg-white px-3 py-1 font-inter text-xs font-medium text-slate-700"
            >
              {{ tag }}
            </span>
          </div>
        
        </li>
      </ul>
    </Container>
  </section>
</template>
