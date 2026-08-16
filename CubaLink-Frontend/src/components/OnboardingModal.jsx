import { useState } from 'react'
import MaterialIcon from './MaterialIcon'
import { NOTIF_CATEGORIES, useNotifications } from '../context/NotificationsContext'

// Modal de bienvenida/suscripción: primera vez que el usuario abre notificaciones.
// Selecciona las categorías que le interesan; se persiste en localStorage (invitado)
// como si fuera la base de datos vinculada a su cuenta.
export default function OnboardingModal({ onClose }) {
  const { completeOnboarding } = useNotifications()
  const [selected, setSelected] = useState(() => NOTIF_CATEGORIES.map((c) => c.key))

  const toggle = (key) =>
    setSelected((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))

  const save = () => {
    completeOnboarding(selected.length > 0 ? selected : [NOTIF_CATEGORIES[1].key])
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-6 animate-fade-in" role="dialog" aria-modal="true">
      <div className="w-full sm:max-w-lg bg-surface-container-lowest rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up max-h-[88vh] flex flex-col">
        {/* Franja superior dorada */}
        <div className="h-1.5 bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold"></div>

        <div className="px-6 pt-6 pb-2 flex items-start justify-between">
          <span className="w-12 h-12 rounded-2xl bg-brand-blue-deep/10 text-brand-blue-deep flex items-center justify-center">
            <MaterialIcon name="notifications_active" className="text-2xl" />
          </span>
          <button onClick={onClose} aria-label="Cerrar" className="w-9 h-9 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant transition-colors">
            <MaterialIcon name="close" className="text-[20px]" />
          </button>
        </div>

        <div className="px-6 pb-4">
          <h2 className="font-headline-md text-headline-md text-primary">Personaliza tus notificaciones</h2>
          <p className="text-body-md text-on-surface-variant mt-1.5">
            ¿Qué te interesa ver en CubaLink? Selecciona tus categorías favoritas para enviarte
            solo la información que realmente te importa.
          </p>
        </div>

        {/* Lista de categorías seleccionables */}
        <div className="px-6 pb-4 overflow-y-auto space-y-2">
          {NOTIF_CATEGORIES.map((c) => {
            const active = selected.includes(c.key)
            return (
              <button
                key={c.key}
                onClick={() => toggle(c.key)}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl border transition-all text-left ${
                  active
                    ? 'border-brand-blue-deep/40 bg-brand-blue-deep/5'
                    : 'border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low'
                }`}
              >
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-[18px] ${active ? 'bg-brand-blue-deep text-white' : 'bg-surface-container text-on-surface-variant'}`}>
                  <MaterialIcon name={c.icon} className="text-[18px]" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className={`block font-semibold text-sm ${active ? 'text-primary' : 'text-gray-600'}`}>{c.label}</span>
                  <span className="block text-[11px] text-on-surface-variant truncate">{c.desc}</span>
                </span>
                <span
                  className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    active ? 'bg-brand-blue-deep border-brand-blue-deep text-white' : 'border-outline bg-white'
                  }`}
                >
                  {active && <MaterialIcon name="check" className="text-[14px]" />}
                </span>
              </button>
            )
          })}
        </div>

        <div className="px-6 py-4 border-t border-outline-variant/60 bg-surface-container-low/50">
          <button
            onClick={save}
            className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3.5 rounded-xl font-label-sm text-label-sm font-bold hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Guardar preferencias <MaterialIcon name="arrow_forward" className="text-[16px]" />
          </button>
          <p className="text-center text-[11px] text-on-surface-variant mt-2.5">
            Puedes cambiar esto cuando quieras en Preferencias.
          </p>
        </div>
      </div>
    </div>
  )
}
