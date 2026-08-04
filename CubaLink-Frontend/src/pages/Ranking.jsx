import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import StarRating from '../components/StarRating'
import { RANKING_TABS, RANKINGS } from '../data/rankings'

// Ranking de la Comunidad CubaLink — Top por actividad.
export default function Ranking() {
  const [tab, setTab] = useState('trabajadores')
  const [visibleCount, setVisibleCount] = useState(6)
  const topList = RANKINGS[tab] || []

  const changeTab = (id) => {
    setTab(id)
    setVisibleCount(6)
  }

  return (
    <main className="pt-16 pb-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-xl bg-brand-blue-deep/10 text-brand-blue-deep flex items-center justify-center">
              <MaterialIcon name="emoji_events" className="text-2xl" />
            </span>
            <div>
              <h1 className="font-headline-lg text-headline-lg text-primary">Ranking de la Comunidad</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Los cubanos que más resuelven en Rusia, según su reputación por actividad.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-1 px-1">
          {RANKING_TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => changeTab(t.id)}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${
                tab === t.id
                  ? 'bg-brand-blue-deep text-white shadow-md'
                  : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-brand-blue-deep'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tarjetas del ranking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {topList.slice(0, visibleCount).map((persona, idx) => (
            <article
              key={persona.nombre}
              className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-6 hover:border-brand-blue-deep transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className={`w-14 h-14 rounded-xl overflow-hidden border-2 ${idx === 0 ? 'border-brand-gold' : 'border-outline-variant'}`}>
                    <img className="w-full h-full object-cover" src={persona.avatar} alt={persona.nombre} />
                  </div>
                  <span className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white shadow ${
                    idx === 0 ? 'bg-brand-gold' : idx === 1 ? 'bg-on-surface-variant' : idx === 2 ? 'bg-secondary' : 'bg-outline'
                  }`}>
                    {idx + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-title-md text-title-md text-primary truncate">{persona.nombre}</h3>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {persona.roles.map((r) => (
                      <span key={`${persona.nombre}-${r}`} className="px-2 py-0.5 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm text-[10px] border border-surface-variant">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <StarRating rating={persona.reputacion} size={16} />
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {persona.recomendaciones} recomendaciones
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {persona.badges.map((b) => (
                  <span key={`${persona.nombre}-${b}`} className="px-2 py-0.5 rounded-full bg-brand-gold/10 text-on-surface font-label-sm text-label-sm text-[10px] border border-brand-gold/30">
                    {b}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {visibleCount < topList.length && (
          <button
            onClick={() => setVisibleCount((c) => c + 6)}
            className="mt-8 w-full py-4 border-2 border-dashed border-outline-variant text-outline rounded-xl hover:bg-surface-container-low hover:text-primary hover:border-primary transition-all font-label-sm text-label-sm"
          >
            Ver más de la comunidad ({topList.length - visibleCount} más)
          </button>
        )}
      </div>
    </main>
  )
}