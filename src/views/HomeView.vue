<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppShowcaseSection from '@/components/sections/AppShowcaseSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import FeatureMeetupsSection from '@/components/sections/FeatureMeetupsSection.vue'
import FeatureRealLifeSection from '@/components/sections/FeatureRealLifeSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import LocalsProfilesSection from '@/components/sections/LocalsProfilesSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
</script>

<template>
  <div id="app-root" class="flex min-h-svh flex-col">
    <AppHeader />
    <main class="flex-1">
      <HeroSection />
      <FeaturesSection />
      <FeatureRealLifeSection />
      <FeatureMeetupsSection />
      <LocalsProfilesSection />
      <AppShowcaseSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
    <AppFooter />
  </div>
</template>
