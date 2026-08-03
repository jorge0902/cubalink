import MaterialIcon from './MaterialIcon'

// Chips de roles activos — aparecen bajo el nombre en el perfil.
export default function RoleChips({ roles, size = 'sm' }) {
  const base =
    size === 'lg'
      ? 'px-3 py-1.5 rounded-full text-label-sm font-semibold'
      : 'px-2.5 py-1 rounded-full text-[11px] font-semibold'
  return (
    <div className="flex flex-wrap gap-1.5">
      {roles.map((chip) => (
        <span
          key={chip}
          className={`${base} bg-surface-container-low text-primary border border-surface-variant inline-flex items-center gap-1`}
        >
          {chip}
        </span>
      ))}
    </div>
  )
}