import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import OnboardingModal from '../components/OnboardingModal'
import {
  NOTIF_CATEGORIES,
  NOTIF_CHANNELS,
  timeAgo,
  useNotifications,
} from '../context/NotificationsContext'

// ===== Interruptor (toggle/switch) estilizado =====
function Switch({ checked, onChange, label }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative w-12 h-7 rounded-full transition-colors duration-200 flex-shrink-0 ${
        checked ? 'bg-primary' : 'bg-outline-variant'
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      ></span>
    </button>
  )
}

export default function Notifications() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('bandeja')
  const [showOnboarding, setShowOnboarding] = useState(false)
  const { notifications, unreadCount, markAllRead, markRead, prefs, toggleCategory, toggleChannel } =
    useNotifications()

  // Onboarding: la primera vez que se abre el centro de notificaciones sin preferencias
  // guardadas, se muestra el modal de bienvenida para elegir categorías.
  useEffect(() => {
    if (!prefs.onboarded) setShowOnboarding(true)
  }, [prefs.onboarded])

  return (
    <main className="pt-20 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-3xl mx-auto">
        {/* ===== Encabezado ===== */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-2xl bg-brand-blue-deep/10 text-brand-blue-deep flex items-center justify-center">
              <MaterialIcon name="notifications" className="text-[22px]" />
            </span>
            <div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-none">Notificaciones</h1>
              <p className="text-label-sm text-on-surface-variant mt-1">
                {unreadCount > 0 ? `${unreadCount} sin leer` : 'Todo al día'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowOnboarding(true)}
            className="hidden sm:flex items-center gap-1.5 text-brand-blue-deep text-label-sm font-semibold hover:text-brand-gold transition-colors"
          >
            <MaterialIcon name="tune" className="text-[16px]" /> Preferencias
          </button>
        </div>

        {/* ===== Pestañas ===== */}
        <div className="flex bg-surface-container-low rounded-xl p-1 mb-6">
          {[
            { key: 'bandeja', label: 'Mis Notificaciones', icon: 'inbox' },
            { key: 'prefs', label: 'Preferencias', icon: 'tune' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-label-sm text-label-sm font-semibold transition-all ${
                tab === t.key ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <MaterialIcon name={t.icon} className="text-[18px]" />
              {t.label}
              {t.key === 'bandeja' && unreadCount > 0 && (
                <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ===== PESTAÑA 1: BANDEJA DE ENTRADA ===== */}
        {tab === 'bandeja' && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wide">Recientes</h2>
              <button
                onClick={markAllRead}
                disabled={unreadCount === 0}
                className={`flex items-center gap-1.5 text-label-sm font-semibold transition-colors ${
                  unreadCount === 0 ? 'text-outline cursor-default' : 'text-brand-blue-deep hover:text-brand-gold'
                }`}
              >
                <MaterialIcon name="done_all" className="text-[16px]" /> Marcar todas como leídas
              </button>
            </div>

            <div className="space-y-2.5">
              {notifications.map((n) => (
                <button
                  key={n.id}
                  onClick={() => {
                    markRead(n.id)
                    navigate(n.to)
                  }}
                  className={`w-full flex items-start gap-3.5 p-4 rounded-2xl border text-left transition-all active:scale-[0.99] ${
                    n.read
                      ? 'bg-surface-container-lowest border-outline-variant/60 hover:border-outline'
                      : 'bg-brand-blue-deep/[0.04] border-brand-blue-deep/25 hover:border-brand-blue-deep/50'
                  }`}
                >
                  {/* Icono de categoría */}
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      n.read ? 'bg-surface-container text-on-surface-variant' : 'bg-primary text-white'
                    }`}
                  >
                    <MaterialIcon name={n.icon} className="text-[20px]" />
                  </span>

                  {/* Contenido */}
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center justify-between gap-2">
                      <span className={`text-sm leading-snug ${n.read ? 'text-gray-600' : 'text-primary font-semibold'}`}>
                        {n.title}
                      </span>
                      {!n.read && <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0"></span>}
                    </span>
                    <span className="block text-[12px] text-on-surface-variant leading-snug mt-1">{n.message}</span>
                    <span className="flex items-center gap-1 text-[11px] text-outline mt-1.5">
                      <MaterialIcon name="schedule" className="text-[12px]" /> {timeAgo(n.time)}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <p className="text-center text-[11px] text-on-surface-variant mt-6">
              ¿Quieres menos avisos? <Link to="/notificaciones" onClick={() => setTab('prefs')} className="text-brand-blue-deep font-semibold hover:text-brand-gold">Ajusta tus preferencias</Link>
            </p>
          </div>
        )}

        {/* ===== PESTAÑA 2: PREFERENCIAS ===== */}
        {tab === 'prefs' && (
          <div className="animate-fade-in space-y-6">
            {/* Por categorías */}
            <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/70 overflow-hidden">
              <div className="px-5 py-4 border-b border-outline-variant/60 bg-surface-container-low/40">
                <h2 className="font-label-sm text-label-sm font-bold text-primary flex items-center gap-2">
                  <MaterialIcon name="category" className="text-[18px] text-brand-gold" /> Notificaciones por Categorías
                </h2>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Elige qué secciones quieres seguir</p>
              </div>
              <div className="divide-y divide-outline-variant/50">
                {NOTIF_CATEGORIES.map((c) => {
                  const active = prefs.categories.includes(c.key)
                  return (
                    <div key={c.key} className="flex items-center gap-3 px-5 py-3.5">
                      <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${active ? 'bg-brand-blue-deep/10 text-brand-blue-deep' : 'bg-surface-container text-outline'}`}>
                        <MaterialIcon name={c.icon} className="text-[18px]" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className={`block text-sm font-semibold ${active ? 'text-primary' : 'text-gray-500'}`}>
                          {c.emoji} {c.label}
                        </span>
                        <span className="block text-[11px] text-on-surface-variant truncate">{c.desc}</span>
                      </span>
                      <Switch checked={active} onChange={() => toggleCategory(c.key)} label={c.label} />
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Canales de recepción */}
            <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/70 overflow-hidden">
              <div className="px-5 py-4 border-b border-outline-variant/60 bg-surface-container-low/40">
                <h2 className="font-label-sm text-label-sm font-bold text-primary flex items-center gap-2">
                  <MaterialIcon name="send" className="text-[18px] text-brand-gold" /> Canales de Recepción
                </h2>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Dónde quieres recibir las alertas</p>
              </div>
              <div className="divide-y divide-outline-variant/50">
                {NOTIF_CHANNELS.map((ch) => {
                  const active = prefs.channels.includes(ch.key)
                  return (
                    <div key={ch.key} className="flex items-center gap-3 px-5 py-3.5">
                      <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${active ? 'bg-brand-blue-deep/10 text-brand-blue-deep' : 'bg-surface-container text-outline'}`}>
                        <MaterialIcon name={ch.icon} className="text-[18px]" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className={`block text-sm font-semibold ${active ? 'text-primary' : 'text-gray-500'}`}>
                          {ch.emoji} {ch.label}
                        </span>
                        <span className="block text-[11px] text-on-surface-variant truncate">{ch.desc}</span>
                      </span>
                      <Switch checked={active} onChange={() => toggleChannel(ch.key)} label={ch.label} />
                    </div>
                  )
                })}
              </div>
            </section>

            <p className="text-center text-[11px] text-on-surface-variant px-4">
              Las preferencias se guardan automáticamente en tu dispositivo. Puedes volver a configurarlas
              cuando quieras desde esta misma pantalla.
            </p>
          </div>
        )}
      </div>

      {/* Modal de bienvenida la primera vez */}
      {showOnboarding && <OnboardingModal onClose={() => setShowOnboarding(false)} />}
    </main>
  )
}
