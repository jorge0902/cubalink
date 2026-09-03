import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import SkyClouds from '../components/SkyClouds'
import CategoryGrid3D from '../components/CategoryGrid3D'
import ListingCarousel from '../components/ListingCarousel'
import { rentals } from '../data/rentals'
import { marketProducts } from '../data/marketplace'
import { jobs } from '../data/jobs'

// Pestañas del buscador (estilo Dubizzle: filtran la búsqueda por sección)
const SEARCH_TABS = [
  { id: 'todo', label: 'Todo', to: '/empleos' },
  { id: 'empleos', label: 'Empleos', to: '/empleos' },
  { id: 'rentas', label: 'Rentas', to: '/rentas' },
  { id: 'marketplace', label: 'Marketplace', to: '/marketplace' },
  { id: 'viajes', label: 'Viajes', to: '/viajes' },
  { id: 'remesas', label: 'Remesas', to: '/remesas' },
  { id: 'confiables', label: 'Confiables', to: '/confiables' },
]

export default function HomeNew() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('todo')
  const [query, setQuery] = useState('')

  const fmtPrice = (n) => n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ')

  const popularRentals = rentals.filter((r) => r.featured).slice(0, 5)
  const popularProducts = marketProducts.filter((p) => p.featured).slice(0, 5)
  const popularJobs = jobs.filter((j) => j.featured).slice(0, 5)

  const submitSearch = (e) => {
    e?.preventDefault()
    const target = SEARCH_TABS.find((t) => t.id === tab)?.to || '/empleos'
    navigate(target)
  }

  return (
    <main className="min-h-screen bg-surface">
      {/* ===== HERO con cielo nocturno animado (nubes de algodón) + buscador gigante ===== */}
      <section className="relative text-white pt-24 pb-20 px-6 overflow-hidden">
        {/* Fondo animado: cielo nocturno + nubes en 2 capas canvas */}
        <SkyClouds variant="night" />

        {/* Brillo sutil sobre el cielo nocturno */}
        <div className="absolute inset-0 z-[3] pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-60 h-60 rounded-full bg-sky-400/10 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>
        </div>

        {/* Contenido por encima del lienzo */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-5 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-soft-pulse"></span>
            La red de los cubanos en Moscú
          </span>
          <h1 className="font-display-lg text-[30px] leading-[1.15] sm:text-4xl md:text-display-lg mb-4 animate-fade-in-up delay-100">
            Trabajo, renta, remesa y esa mano que hace falta
          </h1>
          <p className="font-body-lg text-[15px] sm:text-body-lg mb-8 opacity-90 max-w-xl mx-auto animate-fade-in-up delay-200">
            Conectamos a la comunidad cubana en Rusia con oportunidades reales y gente de confianza.
          </p>

          {/* Buscador gigante con pestañas */}
          <form
            onSubmit={submitSearch}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-2 text-left animate-fade-in-up delay-300"
          >
            {/* Pestañas de sección */}
            <div className="flex flex-wrap gap-1 px-2 pt-2 pb-3 border-b border-slate-100 justify-center sm:justify-start">
              {SEARCH_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-label-sm font-label-sm transition-all ${
                    tab === t.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            {/* Campo + botón */}
            <div className="flex items-center gap-2 p-2">
              <MaterialIcon name="search" className="text-on-surface-variant ml-2 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="¿Qué estás buscando? Ej: albañil, cuarto, remesa..."
                className="flex-1 min-w-0 py-2.5 text-[14px] sm:text-primary placeholder:text-on-surface-variant/60 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand-gold text-primary w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center hover:shadow-lg hover:bg-brand-gold/90 active:scale-95 transition-all btn-shine flex-shrink-0"
                aria-label="Buscar"
              >
                <MaterialIcon name="arrow_forward" />
              </button>
            </div>
          </form>

          <p className="mt-6 text-label-sm opacity-80 animate-fade-in-up delay-400">
            +10,000 profesionales cubanos ya se han unido · <span className="text-brand-gold font-semibold">Moscú, Rusia</span>
          </p>
        </div>
      </section>

      {/* ===== CATEGORÍAS POPULARES (grid Dubizzle con iconos 3D) ===== */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-14">
        <div className="flex items-center justify-between mb-6 animate-fade-in-up">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Categorías populares</h2>
            <p className="text-label-sm text-on-surface-variant mt-1">Explora lo que la comunidad ofrece</p>
          </div>
          <Link to="/comunidad" className="text-brand-blue-deep font-bold flex items-center gap-1 hover:text-brand-gold transition-colors text-label-sm whitespace-nowrap">
            Ver todo <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
        <CategoryGrid3D />
      </section>

      {/* ===== POPULARES EN RENTAS — carrusel horizontal Dubizzle ===== */}
      <ListingCarousel
        title="Populares en Rentas"
        icon={<MaterialIcon name="home_work" className="text-teal-600" />}
        to="/rentas"
        items={popularRentals.map((r) => ({
          favKey: `rent-${r.id}`,
          img: r.photos[0],
          price: `${fmtPrice(r.price)} ₽`,
          title: r.title,
          location: r.metro,
          available: r.available === 'inmediato',
        }))}
      />

      {/* ===== POPULARES EN MARKETPLACE — carrusel horizontal Dubizzle ===== */}
      <ListingCarousel
        title="Populares en Marketplace"
        icon={<MaterialIcon name="storefront" className="text-amber-600" />}
        to="/marketplace"
        items={popularProducts.map((p) => ({
          favKey: `prod-${p.id}`,
          img: p.photos[0],
          price: `${fmtPrice(p.price)} ₽`,
          title: p.title,
          location: p.location,
          available: true,
        }))}
      />

      {/* ===== POPULARES EN EMPLEOS — carrusel horizontal Dubizzle ===== */}
      <ListingCarousel
        title="Populares en Empleos"
        icon={<MaterialIcon name="work" className="text-blue-600" />}
        to="/empleos"
        items={popularJobs.map((j) => ({
          favKey: `job-${j.id}`,
          img: j.image,
          price: `${j.salary}${j.salaryNote || ''}`,
          title: `${j.title} · ${j.company}`,
          location: j.location,
          available: true,
        }))}
      />

      {/* ===== BANNER SISTEMA DE CONFIANZA ===== */}
            <section className="max-w-6xl mx-auto px-6 pb-16">
              <Link
                to="/confiables"
                className="block bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-700 rounded-3xl p-6 md:p-10 text-white relative overflow-hidden group premium-hover"
                        >
                          {/* Patrón decorativo: escudo + halos */}
                          <div className="absolute inset-0 opacity-[0.12]">
                            <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/40 blur-2xl"></div>
                            <div className="absolute bottom-0 left-1/4 w-44 h-44 rounded-full bg-emerald-300/50 blur-2xl"></div>
                            <MaterialIcon name="verified" className="absolute -bottom-6 -left-6 text-[120px] text-white/30 rotate-12" />
                          </div>

                          <div className="relative flex flex-col md:flex-row items-center justify-between gap-5 md:gap-7">
                            {/* Texto principal */}
                            <div className="flex flex-col gap-4 max-w-xl w-full">
                              <div className="flex items-start sm:items-center gap-4">
                                <span className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform flex-shrink-0 shadow-lg">
                                  <MaterialIcon name="verified" className="text-2xl md:text-3xl" />
                                </span>
                                <div>
                                  <h3 className="font-headline-md text-headline-md tracking-tight">Sistema de Confianza</h3>
                                  <p className="opacity-90 text-[13px] sm:text-body-md">
                                    Personas y negocios verificados por la comunidad. ¿Con quién haces negocios sin preocuparte?
                                  </p>
                                </div>
                              </div>

                              {/* Chips de beneficios */}
                              <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-[12px] font-medium">
                                  <MaterialIcon name="shield" className="text-[15px]" /> Verificación en 3 pasos
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-[12px] font-medium">
                                  <MaterialIcon name="people" className="text-[15px]" /> Referencias reales
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-[12px] font-medium max-sm:hidden">
                                  <MaterialIcon name="works_premium" className="text-[15px]" /> Sellos de confianza
                                </span>
                              </div>
                            </div>

                            {/* Columna derecha: avatares + CTA */}
                            <div className="flex flex-row md:flex-col items-center justify-between md:justify-center gap-3 md:gap-4 w-full md:w-auto flex-shrink-0">
                              <div className="flex -space-x-2.5 md:-space-x-3 max-sm:hidden">
                                {['bg-amber-400', 'bg-sky-400', 'bg-rose-400', 'bg-violet-400'].map((c, i) => (
                                  <span
                                    key={i}
                                    className={`w-9 h-9 md:w-11 md:h-11 rounded-full ${c} ring-2 ring-emerald-500 flex items-center justify-center text-white text-[12px] md:text-[13px] font-bold shadow-md`}
                                  >
                                    {['LR', 'RM', 'AC', 'JC'][i]}
                                  </span>
                                ))}
                                <span className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/25 backdrop-blur ring-2 ring-emerald-500 flex items-center justify-center text-white text-[10px] md:text-[11px] font-bold shadow-md">
                                  +2k
                                </span>
                              </div>
                              <span className="inline-flex items-center gap-1.5 text-[11px] bg-emerald-900/40 rounded-full px-3 py-1 md:block">
                                <MaterialIcon name="verified" className="text-[14px]" />
                                Miembros verificados
                              </span>
                    <span className="bg-white text-emerald-700 px-7 py-3 rounded-xl font-title-md font-bold hover:bg-emerald-50 transition-all whitespace-nowrap w-full sm:w-auto text-center hover:-translate-y-0.5 hover:shadow-lg">
                      Ver Confiables →
                    </span>
                  </div>
                </div>
              </Link>
            </section>

      {/* ===== BANNER DESCARGA LA APP (APK) ===== */}
            <section className="max-w-6xl mx-auto px-6 pb-16">
              <div className="bg-gradient-to-br from-brand-blue-deep via-[#0b2440] to-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                {/* Halos + patrón */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute -top-10 right-1/3 w-64 h-64 rounded-full bg-brand-gold/40 blur-3xl"></div>
                  <div className="absolute -bottom-14 -left-10 w-64 h-64 rounded-full bg-sky-400/40 blur-3xl"></div>
                  <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-sky-500/30 blur-2xl"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Texto */}
                  <div className="flex flex-col gap-5 max-w-lg w-full">
                    <div className="flex items-start sm:items-center gap-4">
                      <span className="w-14 h-14 rounded-2xl bg-brand-gold/15 backdrop-blur flex items-center justify-center flex-shrink-0 border border-brand-gold/20">
                                        <MaterialIcon name="smartphone" className="text-3xl" />
                                      </span>
                      <div>
                        <h3 className="font-headline-md text-headline-md tracking-tight">CubaLink en tu bolsillo</h3>
                        <p className="opacity-90 text-[13px] sm:text-body-md">
                          Descarga la app y lleva la red profesional contigo a donde vayas.
                        </p>
                      </div>
                    </div>

                    {/* Checklist */}
                    <ul className="space-y-2">
                      {['Empleos y rentas en tiempo real', 'Notificaciones al instante', 'Chatea con la comunidad'].map((f, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-[13px]">
                          <span className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0">
                                                    <MaterialIcon name="check" className="text-[13px]" />
                                                  </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mockup teléfono + CTA */}
                                    <div className="flex flex-col items-center gap-4 flex-shrink-0">
                                      <div className="hidden sm:block w-[130px] h-[165px] rounded-[22px] bg-[#0a1220] border-[5px] border-slate-500/40 shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-slate-400/40"></div>
                                        <div className="absolute inset-x-2 top-5 bottom-2 rounded-2xl bg-gradient-to-b from-sky-500/15 to-slate-800/60 border border-white/5 flex flex-col items-center justify-center gap-1.5">
                                          <span className="w-8 h-8 rounded-xl bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/30">
                                            <svg viewBox="0 0 24 24" fill="#06131B" className="w-4 h-4" aria-hidden="true"><path d="M12 2 L20 4 V12 C20 16.5 16.6 19.9 12 21 C7.4 19.9 4 16.5 4 12 V4 Z" /></svg>
                                          </span>
                                          <span className="text-[9px] font-bold text-white">CubaLink</span>
                                          <span className="text-[6px] text-slate-300">Comunidad cubana</span>
                                        </div>
                                      </div>
                                      {/* Botón descargar APK */}
                                                                            <a
                                                                              href="/manifest.json"
                                                                              download
                                                                              className="group/btn flex items-center gap-3.5 bg-gradient-to-r from-amber-400 via-brand-gold to-amber-500 text-[#06131B] pl-4 pr-7 py-3 rounded-2xl font-bold shadow-xl shadow-amber-500/30 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-95 transition-all btn-shine whitespace-nowrap w-full sm:w-auto justify-center border border-amber-300/60"
                                                                            >
                                                                              <span className="w-11 h-11 rounded-xl bg-[#06131B] text-amber-400 flex items-center justify-center shadow-inner group-hover/btn:bg-[#0c1e30] transition-colors">
                                                                                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                                                                                  <path d="M12 3 v12 M6 10 l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                  <path d="M5 19 h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                                                                </svg>
                                                                              </span>
                                                                              <span className="flex flex-col items-start leading-none gap-1">
                                                                                <span className="text-[11px] font-semibold text-[#06131B]/60 uppercase tracking-wide">
                                                                                  Descarga gratis
                                                                                </span>
                                                                                <span className="text-lg font-extrabold tracking-tight">
                                                                                  CubaLink App
                                                                                </span>
                                                                              </span>
                                                                              <MaterialIcon name="download" className="text-[22px] flex-shrink-0 group-hover/btn:translate-y-0.5 transition-transform" />
                                                                            </a>
                  </div>
                </div>
              </div>
            </section>

      {/* ===== STATS ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-28 sm:pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { num: '+10,000', label: 'Profesionales', icon: 'groups' },
            { num: '+3,500', label: 'Empleos publicados', icon: 'work' },
            { num: '+1,500', label: 'Negocios verificados', icon: 'verified' },
            { num: '98%', label: 'Resuelven su trámite', icon: 'thumb_up' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant px-3 py-5 md:p-6 text-center premium-hover flex flex-col items-center justify-center min-w-0"
            >
              <span className="w-10 h-10 mb-3 rounded-xl bg-brand-blue-deep/10 text-brand-blue-deep flex items-center justify-center flex-shrink-0">
                <MaterialIcon name={s.icon} className="text-[20px]" />
              </span>
              {/* clamp(): la cifra nunca desborda la tarjeta en móviles */}
              <p className="font-display-md text-[clamp(1.15rem,5.5vw,1.75rem)] leading-none text-brand-blue-deep font-bold text-center w-full break-words">
                {s.num}
              </p>
              <p className="text-[11px] sm:text-label-sm text-on-surface-variant mt-2 text-center leading-snug w-full">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
