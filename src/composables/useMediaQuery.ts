import { onUnmounted, ref } from 'vue'

/**
 * Reactive `window.matchMedia` — useful for responsive behavior outside CSS alone.
 */
export function useMediaQuery(query: string) {
  const matches = ref(false)

  if (typeof window === 'undefined') {
    return matches
  }

  const mq = window.matchMedia(query)
  matches.value = mq.matches

  const handler = (e: MediaQueryListEvent) => {
    matches.value = e.matches
  }

  mq.addEventListener('change', handler)
  onUnmounted(() => mq.removeEventListener('change', handler))

  return matches
}
