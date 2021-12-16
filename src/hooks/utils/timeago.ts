import { shouldPolyfill } from '@formatjs/intl-relativetimeformat/should-polyfill'
type DATE_UNITS_TYPE = [string, number][];

const DATE_UNITS: DATE_UNITS_TYPE = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]
async function polyfill (locale: string) {
  if (!shouldPolyfill(locale)) {
    return
  }
  // Load the polyfill 1st BEFORE loading data
  await import('@formatjs/intl-relativetimeformat/polyfill')

  switch (locale) {
    case 'fr':
      await import('@formatjs/intl-relativetimeformat/locale-data/fr')
      break
    default:
      await import('@formatjs/intl-relativetimeformat/locale-data/en')
      break
  }
}
const getDateDiff = (timestamp: number) => {
  polyfill('en')
  const now = Date.now()
  const diff = (timestamp - now) / 1000

  for (const [unit, secondsUnits] of DATE_UNITS) {
    if (Math.abs(diff) > secondsUnits || unit === 'second') {
      const value = Math.round(diff / secondsUnits)
      return { value, unit }
    }
  }
  return { value: 0, unit: 'second' }
}

export function useTimeAgo ({ created_at }: { created_at: string }) {
  const timestam = new Date(created_at)
  const { value, unit } = getDateDiff(timestam.getTime())

  const rtf = new Intl.RelativeTimeFormat('en', { style: 'short' })
  return rtf.format(value, unit as Intl.RelativeTimeFormatUnit)
}
