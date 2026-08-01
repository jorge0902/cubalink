// Icono Material Symbols — mantiene el sistema de iconos del diseño original
export default function MaterialIcon({ name, fill = false, className = '', style }) {
  const variation = { fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24` }
  return (
    <span className={`material-symbols-outlined ${className}`} style={style || variation} data-icon={name}>
      {name}
    </span>
  )
}
