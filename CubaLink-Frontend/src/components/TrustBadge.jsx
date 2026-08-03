// Insignia de verificación junto al nombre (🟢 🔵 🟡 🟣 🟠)
export default function TrustBadge({ emoji, label, className = '' }) {
  return (
    <span
      title={label}
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border font-label-sm text-label-sm text-[11px] ${className}`}
    >
      <span>{emoji}</span>
      <span className="hidden sm:inline">{label}</span>
    </span>
  )
}