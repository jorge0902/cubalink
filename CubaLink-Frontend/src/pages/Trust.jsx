import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import StarRating from '../components/StarRating'
import AnimatedNumber from '../components/AnimatedNumber'
import { TRUST_FILTERS, TRUST_PROFILES } from '../data/trust'

// Sistema de Confianza de CubaLink — ¿Con quién puedo hacer negocios sin preocuparme?
export default function Trust() {
  const [query, setQuery] = useState('')
  const [filtro, setFiltro] = useState('todos')
  const [cargando, setCargando] = useState(true)

  // Simula carga de datos (efecto skeleton) una sola vez
  useEffect(() => {
    const t = setTimeout(() => setCargando(false), 900)
    return () => clearTimeout(t)
  }, [])

  const lista = useMemo(() => {
    const q = query.trim().toLowerCase()
    return TRUST_PROFILES.filter((p) => {
      const porFiltro = filtro === 'todos' || p.tipo === filtro
      const porQuery = !q || p.nombre.toLowerCase().includes(q) || p.tipoLabel.toLowerCase().includes(q)
      return porFiltro && porQuery
    })
  }, [query, filtro])

  return (
    <main className="pt-16 pb-24 bg-surface min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
        {/* ===== Header ===== */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-label-sm text-label-sm mb-4">
            <MaterialIcon name="verified_user" className="text-[16px]" />
            Sistema de Confianza
          </div>
          <h1 className="font-display-lg text-[28px] leading-tight sm:text-display-lg text-primary mb-3">
            Personas y negocios de confianza
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Aquí encontrarás contratistas, rentas, agencias de viajes, servicios y negocios
            que la comunidad ha evaluado positivamente.
          </p>
        </div>

        {/* ===== Buscador ===== */}
        <div className="relative max-w-xl mx-auto mb-6">
          <MaterialIcon
            name="search"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm focus:border-brand-blue-deep focus:ring-2 focus:ring-brand-blue-deep/20 focus:outline-none transition-all"
          />
        </div>

        {/* ===== Filtros horizontales ===== */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-1 px-1 scrollbar-thin">
          {TRUST_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFiltro(f.id)}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all active:scale-95 ${
                filtro === f.id
                  ? 'bg-brand-blue-deep text-white shadow-md'
                  : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-brand-blue-deep hover:text-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ===== Grid de tarjetas ===== */}
        {cargando ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div key={s} className="rounded-2xl border border-outline-variant p-6 animate-pulse">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-container-low"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-surface-container-low rounded w-3/4"></div>
                    <div className="h-3 bg-surface-container-low rounded w-1/2"></div>
                  </div>
                </div>
                <div className="h-3 bg-surface-container-low rounded mt-6 w-full"></div>
                <div className="h-3 bg-surface-container-low rounded mt-2 w-5/6"></div>
                <div className="h-10 bg-surface-container-low rounded mt-6 w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter animate-fade-in-up">
              {lista.map((p) => (
                <Link
                  key={p.id}
                  to={`/confiables/${p.id}`}
                  className="group bg-surface-container-lowest rounded-2xl border border-outline-variant premium-shadow p-6 flex flex-col hover:border-brand-blue-deep hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Cabecera tipo Airbnb */}
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <img
                        src={p.avatar}
                        alt={p.nombre}
                        className="w-16 h-16 rounded-full object-cover border-2 border-outline-variant group-hover:border-brand-blue-deep transition-colors"
                      />
                      {p.verificado && (
                        <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-brand-blue-deep text-white flex items-center justify-center shadow">
                          <MaterialIcon name="verified" className="text-[14px]" />
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-title-md text-title-md text-primary truncate flex items-center gap-1.5">
                        <span>{p.emoji}</span> {p.nombre}
                      </h3>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        {p.tipoLabel} · Miembro desde {p.miembro}
                      </p>
                    </div>
                  </div>

                  {/* Calificación */}
                  <div className="mt-4 flex items-center justify-between">
                    <StarRating rating={p.rating} size={17} />
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      <AnimatedNumber value={p.opiniones} className="font-semibold text-primary" /> opiniones
                    </span>
                  </div>

                  {/* Ubicación */}
                  <p className="mt-3 flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                    <MaterialIcon name="location_on" className="text-[15px] text-primary" />
                    {p.ubicacion}
                  </p>

                  {/* Indicadores */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.indicadores.map((ind) => (
                      <span
                        key={`${p.id}-${ind}`}
                        className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-label-sm text-label-sm text-[11px] flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {ind}
                      </span>
                    ))}
                  </div>

                  {/* Botón */}
                  <span className="mt-5 pt-4 border-t border-outline-variant/60 flex items-center justify-between text-primary font-bold font-label-sm text-label-sm group-hover:text-brand-blue-deep transition-colors">
                    Ver perfil
                    <MaterialIcon
                      name="arrow_forward"
                      className="text-[16px] group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              ))}
            </div>

            {lista.length === 0 && (
              <div className="text-center py-16 text-on-surface-variant">
                <MaterialIcon name="search_off" className="text-5xl mx-auto mb-4 text-outline" />
                <p className="font-body-md text-body-md">
                  No encontramos a nadie con ese nombre. Prueba con otro.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}