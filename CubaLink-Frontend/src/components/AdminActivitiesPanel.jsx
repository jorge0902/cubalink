import MaterialIcon from './MaterialIcon'
import { useActivity } from '../context/ActivityContext'
import { ALL_ROLES } from '../data/roles'

// Panel moderno para activar/desactivar módulos del perfil. Cada módulo activa pestañas.
export default function AdminActivitiesPanel() {
  const { activeRoles, toggleRole } = useActivity()

  return (
    <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant overflow-hidden">
      <div className="px-6 py-5 border-b border-outline-variant flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MaterialIcon name="tune" className="text-brand-blue-deep" />
          <h3 className="font-title-md text-title-md text-primary">Administrar actividades</h3>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-brand-blue-deep/10 text-brand-blue-deep font-label-sm text-label-sm">
          {activeRoles.length}/{ALL_ROLES.length} activas
        </span>
      </div>
      <div className="p-4 space-y-2.5">
        {ALL_ROLES.map((rol) => {
          const activo = activeRoles.includes(rol.id)
          return (
            <button
              key={rol.id}
              onClick={() => toggleRole(rol.id)}
              className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all active:scale-[0.99] ${
                activo
                  ? 'bg-surface-container-low border-brand-blue-deep/40'
                  : 'bg-surface-container-lowest border-outline-variant hover:border-brand-blue-deep/40'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${activo ? 'bg-brand-blue-deep text-white' : 'bg-surface-container text-on-surface-variant'}`}>
                  <MaterialIcon name={rol.icon} className="text-[18px]" />
                </span>
                <div className="text-left min-w-0">
                  <p className={`font-label-sm text-label-sm font-semibold ${activo ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {rol.label}
                  </p>
                  <p className="text-[11px] text-on-surface-variant truncate">{rol.desc}</p>
                </div>
              </div>
              {/* Switch */}
              <span className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors shrink-0 ${activo ? 'bg-brand-blue-deep' : 'bg-outline-variant'}`}>
                <span className={`inline-block w-5 h-5 transform rounded-full bg-white shadow transition-transform ${activo ? 'translate-x-5' : 'translate-x-0.5'}`}></span>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}