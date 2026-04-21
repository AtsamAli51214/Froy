import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * Global UI state for the shell (navigation, theme hooks, etc.).
 * Extend as the product grows (feature flags, user prefs, …).
 */
export const useAppStore = defineStore('app', () => {
  const mobileNavOpen = ref(false)

  function setMobileNavOpen(open: boolean) {
    mobileNavOpen.value = open
  }

  function toggleMobileNav() {
    mobileNavOpen.value = !mobileNavOpen.value
  }

  return {
    mobileNavOpen,
    setMobileNavOpen,
    toggleMobileNav,
  }
})
