// Kainų formatavimas
export function formatPrice(amount: number, currency = 'EUR'): string {
  return new Intl.NumberFormat('lt-LT', {
    style: 'currency',
    currency,
  }).format(amount)
}

// Laiko formatavimas
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('lt-LT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

// Liko laiko skaičiavimas
export function timeRemaining(endsAt: string): string {
  const diff = new Date(endsAt).getTime() - Date.now()
  if (diff <= 0) return 'Baigėsi'

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  if (days > 0) return `${days}d ${hours}v`
  if (hours > 0) return `${hours}v ${minutes}min`
  return `${minutes}min`
}

// Platformos mokestis (5%)
export function calculateFee(amount: number): number {
  return Math.round(amount * 0.05 * 100) / 100
}

// Slug generavimas
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ąčęėįšųūž]/g, (c) =>
      ({ ą: 'a', č: 'c', ę: 'e', ė: 'e', į: 'i', š: 's', ų: 'u', ū: 'u', ž: 'z' }[c] ?? c)
    )
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
