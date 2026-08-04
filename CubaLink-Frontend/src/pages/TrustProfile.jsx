import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import StarRating from '../components/StarRating'
import AnimatedNumber from '../components/AnimatedNumber'
import { TRUST_PROFILES } from '../data/trust'

// Perfil completo de una persona o negocio de confianza
export default function TrustProfile() {
  const { id } = useParams()
  const perfil = TRUST_PROFILES.find((p) => p.id === parseInt(id))
  const [mostrarOpiniones, setMostrarOpiniones] = useState(false)

  if (!perfil) {
    return (
      <main className="pt-16 pb-24 bg-surface min-h-screen flex items-center justify-center">
        <div className="text-center">
          <MaterialIcon name="person_off" className="text-5xl text-outline mb-4" />
          <h2 className="font-title-md text-title-md text-primary mb-2">Perfil no encontrado</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Este perfil no existe o fue eliminado.
          </p>
          <Link to="/confiables" className="bg-primary text-white px-6 py-3 rounded-lg font-label-sm text-label-sm">
            Volver a Confiables
          </Link>
        </div>
      </main>
    )
  }

  const {
    nombre, tipoLabel, emoji, avatar, rating, opiniones, verificado, miembro, ubicacion,
    indicadores, insignias, stats, resumen, barras, opinionesLista,
  } = perfil

  const años = new Date().getFullYear() - miembro

  return (
    <main className="pt-16 pb-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-6">
        {/* ===== Header ===== */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant premium-shadow p-6 md:p-8 mb-6 animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Foto */}
            <div className="relative shrink-0">
              <img
                src={avatar}
                alt={nombre}
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover border-3 border-outline-variant"
              />
              {verificado && (
                <span className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-brand-blue-deep text-white flex items-center justify-center shadow-lg">
                  <MaterialIcon name="verified" className="text-[18px]" />
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-2xl">{emoji}</span>
                <h1 className="font-display-lg text-display-lg text-primary truncate">{nombre}</h1>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-3">
                {tipoLabel} · Miembro desde {miembro} ({años} años en CubaLink)
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <StarRating rating={rating} size={20} />
                <span className="font-body-md text-body-md text-on-surface-variant">
                  <AnimatedNumber value={opiniones} /> opiniones
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-label-sm text-label-sm text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {ubicacion}
                </span>
              </div>

              {/* Indicadores */}
              <div className="flex flex-wrap gap-2 mb-4">
                {indicadores.map((ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-label-sm text-label-sm text-[11px] flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {ind}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex gap-3">
                <button className="bg-brand-blue-deep text-white px-6 py-3 rounded-xl font-label-sm text-label-sm hover:opacity-90 transition-all active:scale-95 shadow-md">
                  Contactar
                </button>
                <button className="border border-outline-variant px-4 py-3 rounded-xl font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container-low transition-all active:scale-95">
                  <MaterialIcon name="share" className="text-[16px] inline" /> Compartir
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Insignias ===== */}
        <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {insignias.map(([emoji, label]) => (
            <span
              key={label}
              className="px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant font-label-sm text-label-sm text-[11px] flex items-center gap-1.5 shadow-sm"
            >
              {emoji} {label}
            </span>
          ))}
        </div>

        {/* ===== Estadísticas ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 text-center hover:shadow-md transition-shadow"
            >
              <MaterialIcon name={s.icon} className="text-2xl text-primary mb-2" />
              <div className="font-title-md text-title-md text-primary">
                <AnimatedNumber value={typeof s.valor === 'number' ? s.valor : 0} />
                {typeof s.valor === 'string' && s.valor}
              </div>
              <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ===== Resumen de la comunidad ===== */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant premium-shadow p-6 md:p-8 mb-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4 flex items-center gap-2">
            <MaterialIcon name="groups" className="text-2xl text-brand-gold" />
            La comunidad dice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumen.map((item) => (
              <div key={item.texto} className="flex items-center gap-3 bg-surface-container-low rounded-lg p-3">
                <span className="text-emerald-500 text-lg">✔</span>
                <span className="font-body-md text-body-md text-on-surface flex-1">{item.texto}</span>
                <span className="font-title-md text-title-md text-primary">{item.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Calificaciones por categoría (barras) ===== */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant premium-shadow p-6 md:p-8 mb-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6 flex items-center gap-2">
            <MaterialIcon name="bar_chart" className="text-2xl text-brand-blue-deep" />
            Evaluación por categoría
          </h2>
          <div className="space-y-4">
            {barras.map((b) => (
              <div key={b.label}>
                <div className="flex justify-between mb-1">
                  <span className="font-label-sm text-label-sm text-on-surface">{b.label}</span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">{b.pct}%</span>
                </div>
                <div className="h-3 bg-surface-container rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-blue-deep to-brand-gold rounded-full transition-all duration-1000"
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Opiniones ===== */}
        <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <button
            onClick={() => setMostrarOpiniones(!mostrarOpiniones)}
            className="flex items-center gap-2 font-label-sm text-label-sm text-primary hover:text-brand-blue-deep transition-colors mb-4"
          >
            <MaterialIcon name={mostrarOpiniones ? 'expand_less' : 'expand_more'} className="text-[18px]" />
            {mostrarOpiniones ? 'Ocultar' : 'Ver'} opiniones ({opinionesLista.length})
          </button>

          {mostrarOpiniones && (
            <div className="space-y-4 animate-fade-in-up">
              {opinionesLista.map((op, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest rounded-xl border border-outline-variant p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary font-bold text-sm">
                      {op.nombre[0]}
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">{op.nombre}</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant ml-2">{op.fecha}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }, (_, j) => (
                      <MaterialIcon
                        key={j}
                        name={j < op.estrellas ? 'star' : 'star_border'}
                        fill={j < op.estrellas}
                        className="text-brand-gold text-[14px]"
                      />
                    ))}
                  </div>
                  <p className="font-body-md text-body-md text-on-surface mb-3">{op.texto}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {op.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm text-[10px] border border-outline-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===== Volver ===== */}
        <div className="mt-10 text-center">
          <Link
            to="/confiables"
            className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm hover:text-brand-blue-deep transition-colors"
          >
            <MaterialIcon name="arrow_back" className="text-[16px]" />
            Volver al listado de Confiables
          </Link>
        </div>
      </div>
    </main>
  )
}