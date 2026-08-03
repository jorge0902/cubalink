import MaterialIcon from './MaterialIcon'
import StarRating from './StarRating'
import { BADGES } from '../data/persona'

// Carnet de Confianza — tarjeta premium de reputación profesional.
export default function CarnetConfianza({ persona, activeRoles, reputacionPromedio }) {
  const nivel = activeRoles.length >= 8 ? 'Élite' : activeRoles.length >= 5 ? 'Avanzado' : 'Activo'

  const rows = [
    { icon: 'badge', label: 'Nivel', value: nivel, strong: true },
    { icon: 'schedule', label: 'Tiempo en CubaLink', value: '4 años 5 meses' },
    { icon: 'apps', label: 'Roles activos', value: `${activeRoles.length} actividades` },
    { icon: 'work_history', label: 'Trabajos realizados', value: '543' },
    { icon: 'payments', label: 'Pagos confirmados', value: '498' },
    { icon: 'thumb_up', label: 'Opiniones positivas', value: '96%' },
    { icon: 'gpp_good', label: 'Reportes', value: 'Sin reportes' },
    { icon: 'bolt', label: 'Respuesta', value: 'Responde en < 1 hora' },
  ]

  return (
    <div className="bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl premium-shadow border border-primary-container overflow-hidden">
      <div className="px-6 py-5 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MaterialIcon name="workspace_premium" fill className="text-secondary-fixed" />
            <h3 className="font-title-md text-title-md text-secondary-fixed">Carnet de Confianza</h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-white/10 font-label-sm text-label-sm text-secondary-fixed border border-white/20">
            Nivel {nivel}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <StarRating rating={reputacionPromedio} showValue className="text-secondary-fixed" />
          <span className="font-label-sm text-label-sm text-white/70">Reputación general</span>
        </div>
      </div>

      <div className="px-6 py-5 grid grid-cols-2 gap-x-4 gap-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <MaterialIcon name={row.icon} className="text-secondary-fixed text-[16px]" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-white/60">{row.label}</p>
              <p className={`font-label-sm text-label-sm truncate ${row.strong ? 'font-bold text-secondary-fixed' : 'text-white'}`}>
                {row.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 border-t border-white/10">
        <p className="text-[10px] uppercase tracking-wider text-white/60 mb-2">Insignias ganadas</p>
        <div className="flex flex-wrap gap-1.5">
          {BADGES.slice(0, 6).map((b) => (
            <span key={b.id} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-label-sm">
              {b.icon} {b.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}