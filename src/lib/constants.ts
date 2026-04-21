/** Central place for marketing copy and nav labels — easy to localize later. */
export const SITE = {
  name: 'Locals',
  /** Company / wordmark (header & footer) */
  companyName: 'FROY',
  brandLogoSrc: '/images/logo.png',
  brandLogoAlt: 'FROY Global Communication Logo',
  tagline: 'Connect with people who actually live there.',
} as const

export const NAV_LINKS = [
  { id: 'meet-locals', label: 'Meet Locals' },
  { id: 'stories', label: 'Stories' },
] as const
