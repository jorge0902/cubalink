import MaterialIcon from './MaterialIcon'

// Renderiza N estrellas según una calificación (p.ej. 4.9 → 5 estrellas doradas + nota).
export default function StarRating({ rating, size = 18, showValue = true, className = '' }) {
  const fullStars = Math.round(rating)
  const stars = Array.from({ length: 5 }, (_, i) => (
    <MaterialIcon
      key={i}
      name={i < fullStars ? 'star' : 'star_border'}
      fill={i < fullStars}
      className={`text-brand-gold ${size ? '' : ''}`}
      style={{ fontVariationSettings: `'FILL' ${i < fullStars ? 1 : 0}, 'wght' 600, 'GRAD' 0, 'opsz' 24`, fontSize: `${size}px` }}
    />
  ))
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {stars}
      {showValue && <span className="ml-1 font-label-sm text-label-sm text-on-surface-variant">{rating.toFixed(1)}</span>}
    </span>
  )
}